import { createReachAPI, ReachToken } from "@jackcom/reachduck";
import createState from "@jackcom/raphsducks";
import { FormEventHandler, useEffect, useMemo, useState } from "react";
import * as FormUIs from "components/Forms/Form";
import { FlexRow } from "./Common/Containers";
import { ToggleImageLoader } from "./Common/ImageLoader";
import { IconButton, WideButton } from "./Forms/Button";
import TokenView from "./TokenView";
import styled from "styled-components";
import { calculateInvValue } from "reach/views/MarketView";
import { intlFormatCurrency } from "utils";
import SelectAsset from "./SelectAsset";
import PrevNextControls from "./PrevNextControls";
import Modal from "./Common/Modal";
import { SaleItemPreview } from "./SaleListItem";

type SellNFTFormData = Record<string, any> & { useBondingCurve: boolean };
type SellNFTFormProps = {
  assets: ReachToken[];
  onSubmit(d: SellNFTFormData): any;
};
const Submit = styled(WideButton)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bgColor};
  margin-top: ${({ theme }) => theme.sizes.lg};
`;
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;
export type ListingState = {
  altPrice: number;
  altToken: string;
  img: string;
  item: string;
  price: number;
  qty: number;
  useBondingCurve: boolean;
};
const Listing = createState<ListingState>({
  altPrice: 0,
  altToken: "",
  img: "",
  item: "",
  price: 0,
  qty: 0,
  useBondingCurve: false
});

enum PHASE {
  START = "1",
  PRICING = "PRICING",
  FINAL = "FINAL",
  FINISH = "FINISH"
}
const phasesList = [PHASE.START, PHASE.PRICING, PHASE.FINAL, PHASE.FINISH];

const CreateListingForm = (props: SellNFTFormProps) => {
  const { connector, ge, gt } = createReachAPI();
  const { onSubmit, assets } = props;
  const nonZeroAssets = assets.filter((a) => a.amount > 0);
  const [data, setData] = useState<ListingState>(Listing.getState());
  const [view, setView] = useState(PHASE.START);
  const [altAssets, setAlts] = useState<any[]>(assets);
  const [maxQty, setMax] = useState(Number.MAX_SAFE_INTEGER);
  const [loading, setLoading] = useState(false);
  const str = (v: any) => v.toString();
  const [itemToken, altToken] = useMemo(
    () =>
      assets.reduce((agg, t) => {
        if (str(t.id) === str(data.item)) return [t, agg[1] || undefined];
        if (str(t.id) === str(data.altToken)) return [agg[0] || undefined, t];
        return agg;
      }, [] as ReachToken[]),
    [data]
  );
  const selectAlt = (item: any) => Listing.altToken(item);
  const selectItem = (tok: any) => {
    const updates: Partial<ListingState> = { item: tok.id };
    if (tok !== "null") {
      updates.img = tok.url;
      setMax(tok.amount);
      setAlts(assets.filter((a) => a.id !== tok.id));
      if (tok.amount === "1") updates.qty = 1;
    } else setAlts([...assets]);

    Listing.multiple(updates);
  };
  const validForm = useMemo(() => {
    const d = data;
    const req: (keyof ListingState)[] = ["img", "item", "qty"];
    const validFields = req.every((field) => d[field]);
    const validPrice = (d.altPrice && d.altToken) || d.price;
    const validQty = ge(maxQty, d.qty);
    return validFields && validPrice && validQty;
  }, [data]);
  const suppress: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const submit = (e: any) => {
    e.preventDefault();
    if (!validForm) return;
    setLoading(true);
    onSubmit(data);
  };
  const next = () => {
    const currIndex = phasesList.findIndex((p) => p === view);
    const nextIndex = currIndex + 1;
    setView(phasesList[Math.min(phasesList.length - 1, nextIndex)]);
  };
  const prev = () => {
    const currIndex = phasesList.findIndex((p) => p === view);
    let nextIndex = currIndex - 1;
    // Skip "bonding curve" page if only selling one item
    if (view === PHASE.PRICING) nextIndex -= Number((data.qty || 0) <= 1);
    setView(phasesList[Math.max(0, nextIndex)]);
  };
  const variantFor = (v: PHASE) => (view === v ? undefined : "transparent");

  useEffect(() => {
    setAlts(assets);
    const unsub = Listing.subscribe((s) => {
      setData((p: ListingState) => ({ ...p, ...s }));
    });

    return function u() {
      unsub();
      Listing.reset(true);
    };
  }, [assets]);

  return (
    <FormUIs.Form onSubmit={suppress}>
      <FlexRow style={{ placeContent: "center" }}>
        {[PHASE.START, PHASE.PRICING, PHASE.FINAL, PHASE.FINISH].map((v) => (
          <IconButton
            disabled={v === PHASE.FINISH && !validForm}
            key={v.valueOf()}
            variant={variantFor(v)}
            onClick={() => setView(v)}
            icon="radio_button_unchecked"
          />
        ))}
      </FlexRow>
      {view === PHASE.START && (
        <FormUIs.Fieldset>
          <FormUIs.Legend aria-required>Select an item</FormUIs.Legend>
          <FormUIs.Hint>Tell the world what you will be selling</FormUIs.Hint>

          <FormUIs.FormRow>
            {/* Sale Item */}
            <SelectAsset
              assets={nonZeroAssets}
              onAssetSelect={(a) => selectItem(a)}
            />

            {/* Sale Quantity */}
            <FormUIs.Label>
              <span>How many will you sell?</span>
              <FormUIs.Input
                type="number"
                placeholder={data.img ? `(${maxQty} available)` : "e.g. 100"}
                min={1}
                max={maxQty}
                onChange={({ target }) => Listing.qty(Number(target.value))}
                value={data.qty || ""}
              />
              <FormUIs.Hint>Enter number of units</FormUIs.Hint>
            </FormUIs.Label>
          </FormUIs.FormRow>

          {/* Bonding Curve pricing */}
          {data.qty > 2 && (
            <FormUIs.Label>
              <FlexRow>
                <FormUIs.Input
                  type="checkbox"
                  onChange={() =>
                    Listing.useBondingCurve(!data.useBondingCurve)
                  }
                  checked={data.useBondingCurve}
                />

                <span>
                  &nbsp;Use <b>bonding curve pricing</b>?
                </span>
              </FlexRow>

              {data.useBondingCurve ? (
                <FormUIs.Hint>
                  This will&nbsp;
                  <b className="secondary--text">
                    raise the item price as the inventory decreases.
                  </b>
                  <br />
                  <b>Example:</b> if you sell{" "}
                  <b className="accent--text">{data.qty || 10} items</b>{" "}
                  at&nbsp;
                  <b className="secondary--text">{data.price || 1} ALGO each</b>
                  , you will earn&nbsp;
                  <b className="accent--text">
                    {calculateInvValue(data.qty || 10, data.price || 1, true)}{" "}
                    Algo
                  </b>
                  .
                </FormUIs.Hint>
              ) : (
                <FormUIs.Hint>
                  Skip checkbox to{" "}
                  <b className="secondary--text">
                    keep the price flat as the inventory decreases.
                  </b>
                  <br />
                  <b>Example:</b> if you sell{" "}
                  <b className="secondary--text">{data.qty || 10} items</b>{" "}
                  at&nbsp;
                  <b className="secondary--text">{data.price || 1} ALGO each</b>
                  , you will earn&nbsp;
                  <b className="secondary--text">
                    {intlFormatCurrency((data.qty || 10) * (data.price || 1))}{" "}
                    Algo
                  </b>
                </FormUIs.Hint>
              )}
            </FormUIs.Label>
          )}

          {data.img && <ToggleImageLoader icon width="100%" src={data.img} />}

          <PrevNextControls
            next={next}
            nextDisabled={!data.img || !data.qty || gt(data.qty, maxQty)}
          />
        </FormUIs.Fieldset>
      )}

      {/* Pricing */}
      {view === PHASE.PRICING && (
        <FormUIs.Fieldset>
          <FormUIs.Legend aria-required>{connector} Price</FormUIs.Legend>

          <p>
            Set your item's {connector} price, or skip if you only want to sell
            for a different ASA.
          </p>

          {/* Price */}
          <FormUIs.Label>
            <span>
              Price per item (in <b>{connector}</b>)?
            </span>
            <FormUIs.Input
              type="number"
              min={0}
              placeholder="e.g. 5"
              onChange={({ target }) => Listing.price(Number(target.value))}
              value={data.price || ""}
            />
            <FormUIs.Hint>
              Set price <b>per item</b> in {connector}
            </FormUIs.Hint>
          </FormUIs.Label>

          <PrevNextControls next={next} prev={prev} />
        </FormUIs.Fieldset>
      )}

      {/* Alt Pricing */}
      {view === PHASE.FINAL && (
        <>
          <FormUIs.Fieldset>
            <FormUIs.Legend aria-required>Alternate Price</FormUIs.Legend>
            <p>Set a purchase price in a different token.</p>

            {/* Alt Token */}
            <FormUIs.FormRow>
              <FormUIs.Label>
                <span>Token</span>
                <FormUIs.Select
                  data={altAssets}
                  itemText={(d) => `${d.symbol} (${d.id})`}
                  itemValue={(d) => d.id}
                  onChange={({ target }) => selectAlt(target.value)}
                  value={data.altToken || ""}
                  placeholder="Select an asset"
                />
              </FormUIs.Label>

              <FormUIs.Label>
                <span>Or enter an Asset ID</span>
                <FormUIs.Input
                  placeholder="XXXXX..."
                  onChange={({ target }) =>
                    target.value ? selectAlt(target.value) : null
                  }
                  onBlur={({ target }) =>
                    target.value ? selectAlt(target.value) : null
                  }
                  value={data.altToken || ""}
                />
              </FormUIs.Label>
            </FormUIs.FormRow>

            <FormUIs.Hint>
              (Optional) Opt-in to Token if you don&apos;t have it
            </FormUIs.Hint>
            {data.altToken && <TokenView tokenId={data.altToken} />}

            {/* Alt Price */}
            <FormUIs.Label>
              <span>Alt. price per item?</span>
              <FormUIs.Input
                type="number"
                placeholder={`"500" (as in 500 ALT_TOKEN)`}
                onChange={({ target }) =>
                  Listing.altPrice(Number(target.value))
                }
                min={0}
                value={data.altPrice || ""}
              />
            </FormUIs.Label>

            {altToken && (
              <FormUIs.Hint>
                <b>
                  {data.useBondingCurve ? `Bonding curve` : "Standard"}{" "}
                  pricing:&nbsp;
                </b>
                <b className="accent--text">{data.qty || 10} items</b> at&nbsp;
                <b className="secondary--text">
                  {`${data.altPrice || 1} ${altToken?.symbol || "COIN"} each`}
                </b>
                &nbsp;=&nbsp;
                <b className="accent--text">
                  {calculateInvValue(
                    data.qty || 10,
                    data.altPrice || 1,
                    data.useBondingCurve
                  )}
                  &nbsp;COIN
                </b>
                .
              </FormUIs.Hint>
            )}
          </FormUIs.Fieldset>

          <PrevNextControls
            prev={prev}
            next={next}
            nextDisabled={!data.price && !(data.altToken && data.altPrice)}
          />
        </>
      )}

      {/* Preview */}
      {view === PHASE.FINISH && (
        <Modal title="Preview and List" onClose={prev}>
          <PreviewContainer>
            <SaleItemPreview
              altPrice={data.altPrice}
              altToken={altToken}
              item={itemToken}
              price={data.price}
              qty={data.qty}
              useBondingCurve={data.useBondingCurve}
            />

            <Submit disabled={!validForm || loading} onClick={submit}>
              List item
            </Submit>
          </PreviewContainer>
        </Modal>
      )}
    </FormUIs.Form>
  );
};

export default CreateListingForm;
