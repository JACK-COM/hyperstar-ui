import { ComponentPropsWithRef, ReactNode, ReactText } from "react";
import styled from "styled-components";
import { noOp } from "utils/index";

export type ListViewProps<T extends any> = {
  data: T[];
  ordered?: boolean;
  row?: boolean;
  itemText: (d: T, i?: number) => ReactText | ReactNode;
  onItemClick?: (d: T) => any | void;
} & ComponentPropsWithRef<"ul" | "ol">;

const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${({ theme }) => theme.sizes.sm};
  > * {
    padding: ${({ theme }) => `0 ${theme.sizes.sm}`};
  }
`;
const OrderedList = styled.ol`
  > * {
    width: 100%;
  }
`;
/**
 * `ListView` for displaying a or horizontal list of items
 * @returns {JSX.Element} `ListView` with ordered or unordered items
 */
const ListView = styled((props: ListViewProps<any>): JSX.Element => {
  const { data, itemText, onItemClick = noOp, ordered, ...rest } = props;
  const Wrapper: any = ordered ? OrderedList : UnorderedList;

  return (
    <Wrapper {...rest}>
      {data.map((item: any, i: number) => (
        <ListViewItem key={i} onClick={() => onItemClick(item)}>
          {itemText(item, i)}
        </ListViewItem>
      ))}
    </Wrapper>
  );
})`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  flex-wrap: wrap;
`;
/**
 * Single item in a `ListView`
 */
const ListViewItem = styled.li`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  text-align: left;
`;
export default ListView;

export const WideListView = styled(ListView)`
  width: 100%;
`;

export const LinkListItem = styled.div.attrs({ role: "button" })`
  align-items: center;
  border-radius: ${({ theme }) => theme.presets.rounded.md};
  border: 1px solid #eee3;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  line-height: 2.4;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.semitransparent};
    border-color: transparent;
  }
`;

export const LinkList = styled(WideListView)`
  padding-left: 0;
  padding-right: 0;

  > * {
    padding: 0;
    margin-bottom: ${({ theme }) => theme.sizes.sm};
  }
`;

/** Classname for adujstable-list-grid */
export const gridClass = (itemsCount: number) => {
  if (!itemsCount) return "";
  if (itemsCount % 4 === 0) return "four-col";
  if (itemsCount % 3 === 0) return "three-col";
  return "two-col";
};

export const AdjustableListGrid = styled(WideListView)`
  align-items: start;
  display: inline-grid;
  gap: ${({ theme }) => theme.sizes.xs};

  &.four-col {
    grid-template-columns: repeat(4, 25%);
  }

  &.three-col {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }

  &.two-col {
    grid-template-columns: 50% 50%;
  }

  > * {
    align-items: start;
    align-self: stretch;
    padding: 0;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 50% 50%;
  }

  @media screen and (max-width: 500px) {
    &.four-col,
    &.three-col,
    &.two-col {
      grid-template-columns: auto;
    }
  }
`;
