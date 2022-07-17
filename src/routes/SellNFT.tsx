import { useState, useEffect } from "react";
import { BigValue, Hero, PageContainer } from "components/Common/Containers";
import SellNFTForm from "components/SellNFTForm";
import { createSaleContract } from "reach/participants/MarketSeller";
import { createSaleAnnouncerAPI } from "reach/participants/Announcers";
import { SALE_ANNOUNCER } from "constants/announcers";
import store from "state";
import Modal from "components/Common/Modal";
import { WideButton } from "components/Forms/Button";
import { Link } from "react-router-dom";
import WalletNotFound from "components/Reach/WalletNotFound";
import styled from "styled-components";

const Page = styled(PageContainer)``;

const BuySellNFT = () => {
  const { account, address } = store.getState();
  const [assets, setAssets] = useState<any[]>(store.getState().assets);
  const [complete, setComplete] = useState(false);
  const [saleCtc, setSaleCtc] = useState<any>();
  const [saleData, setData] = useState<any>();
  const hideModal = () => setComplete(false);
  const onSubmit = async (d: any) => {
    if (!account) return;
    setData(d);
    const ctcInfo = await createSaleContract(d, account);
    if (ctcInfo) {
      setSaleCtc(ctcInfo);
      setComplete(true);
    }
  };
  const onPublish = async () => {
    if (!saleData) return;
    const saleAnnouncer = createSaleAnnouncerAPI(account, SALE_ANNOUNCER);
    await saleAnnouncer.publish(saleCtc, saleData);
  };

  useEffect(() =>
    store.subscribeToKeys((s) => setAssets(s.assets || []), ["assets"])
  );

  if (!address) return <WalletNotFound />;

  return (
    <Page padded>
      <h1 className="h2">Sell an Item</h1>
      <Hero>Create and list an item for sale in the marketplace</Hero>

      <SellNFTForm onSubmit={onSubmit} assets={assets} />
      {complete && (
        <Modal title="Sale Contract created!" onClose={hideModal}>
          <p>
            Your sale contract has been created. You can <b>Publish</b> to make
            it visible in the <Link to="/buy">Marketplace</Link>, or leave it
            secret so that only those with a link can find it.
          </p>
          <BigValue>{saleCtc}</BigValue>
          <WideButton onClick={onPublish}>Publish Sale</WideButton>
          <p />

          <Link to={`/buy/${saleCtc}`}>(or View Listing)</Link>
          <p>
            If you don&apos;t publish the sale, be sure to bookmark your listing
            so you don&apos;t lose it!
          </p>
          <p>
            Your listing lives on the blockchain -- but the creators of this app
            cannot recover it for you.
          </p>
        </Modal>
      )}
    </Page>
  );
};

export default BuySellNFT;
