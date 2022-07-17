import { ReachToken } from "@jackcom/reachduck/lib/types";
import { useState } from "react";
import styled from "styled-components";
import { isImageFile, isVideoFile } from "utils";
import { CapsLabel, FlexColumn } from "./Common/Containers";
import ImageLoader from "./Common/ImageLoader";
import { AdjustableListGrid } from "./Common/ListView";
import Modal from "./Common/Modal";
import { WideButton } from "./Forms/Button";
import AllButtonProps from "./Forms/Button.Helpers";

type Props = {
  assets: ReachToken[];
  onAssetSelect(asset: ReachToken): any;
} & AllButtonProps;

const AssetItemContainer = styled(FlexColumn)`
  cursor: pointer;
`;
const SelectAssetItem = styled((props: ReachToken) => {
  const { url, name } = props;

  return (
    <AssetItemContainer>
      <ImageLoader src={url} />
      <CapsLabel>{name}</CapsLabel>
    </AssetItemContainer>
  );
})``;

const SelectAsset = styled(({ assets, onAssetSelect, ...rest }: Props) => {
  const [active, showModal] = useState(false);
  const selectAsset = (a: ReachToken) => {
    showModal(false);
    onAssetSelect(a);
  };
  const imageAssets = assets.filter(
    ({ url }) => isImageFile(url) || isVideoFile(url)
  );

  return (
    <>
      <WideButton onClick={() => showModal(true)} {...rest}>
        Select an Asset
      </WideButton>

      {active && (
        <Modal title="Select an Asset to list" onClose={() => showModal(false)}>
          {!imageAssets.length && (
            <p>You don&apos;t have any assets with an image URL</p>
          )}

          <AdjustableListGrid
            row
            className="four-col"
            data={imageAssets}
            onItemClick={selectAsset}
            itemText={(token) => <SelectAssetItem {...token} />}
          />
        </Modal>
      )}
    </>
  );
})``;

export default SelectAsset;
