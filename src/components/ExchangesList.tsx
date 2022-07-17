import { useHistory } from "react-router";
import { ExchangeView } from "reach/views/TokenExchangeView";
import { EnhancedCryptoIcon } from "components/Reach/CryptoIcon";
import { LinkList, LinkListItem } from "components/Common/ListView";

const ExchangesList = (props: { exchanges: ExchangeView[] }) => {
  const { exchanges } = props;
  const history = useHistory();
  const navigateTo = (ctcInfo: any) => history.push(`/swap/${ctcInfo}`);

  if (!exchanges?.length) {
    return <p className="secondary--text">New pools will appear here</p>;
  }

  return (
    <>
      <LinkList
        data={exchanges}
        itemText={({ ctcInfo, smallUnit, largeUnit }: ExchangeView) => (
          <LinkListItem onClick={() => navigateTo(ctcInfo)}>
            <EnhancedCryptoIcon
              symbol={largeUnit.symbol}
              address={largeUnit.id}
              color
            />
            {/* <span>&nbsp;⟷&nbsp;</span> */}
            <EnhancedCryptoIcon
              symbol={smallUnit.symbol}
              address={smallUnit.id}
              color
            />
          </LinkListItem>
        )}
      />
    </>
  );
};

export default ExchangesList;
