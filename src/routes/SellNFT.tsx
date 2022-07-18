import { useState, useEffect } from "react";
import { BigValue, Hero, PageContainer } from "components/Common/Containers";
import SellNFTForm from "components/SellNFTForm";
import { createSaleContract } from "reach/participants/MarketSeller";
import store from "state";
import Modal from "components/Common/Modal";
import { Link } from "react-router-dom";
import WalletNotFound from "components/Reach/WalletNotFound";
import styled from "styled-components";

const Page = styled(PageContainer)``;

const BuySellNFT = () => {
  const { account, address } = store.getState();
  const [assets, setAssets] = useState<any[]>(store.getState().assets);
  const [complete, setComplete] = useState(false);
  const [saleCtc, setSaleCtc] = useState<any>();
  const hideModal = () => setComplete(false);
  const onSubmit = async (d: any) => {
    if (!account) return;
    const ctcInfo = await createSaleContract(d, account);
    if (ctcInfo) {
      setSaleCtc(ctcInfo);
      setComplete(true);
    }
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
            Your sale contract has been created, and should be visible in the{" "}
            <Link to="/buy">Marketplace</Link> shortly. Your contract address
            is:
          </p>
          <BigValue>{saleCtc}</BigValue>
          <p />

          <Link to={`/buy/${saleCtc}`}>(View Listing)</Link>
          <p>
            Your listing lives on the blockchain: the creators of this app
            cannot recover it for you.
          </p>
        </Modal>
      )}
    </Page>
  );
};

export default BuySellNFT;
