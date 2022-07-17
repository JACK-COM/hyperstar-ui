import styled from "styled-components";
import { FlexColumn } from "components/Common/Containers";
import ListView from "components/Common/ListView";
import { Hint } from "components/Forms/Form";
import MIcon from "components/Common/MIcon";

export const ToggleList = styled(ListView).attrs({
  className: "slide-down-fade-in"
})<{ fixedHeight?: boolean }>`
  -ms-overflow-style: none;
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-radius: ${({ theme }) => theme.presets.rounded.sm};
  border: 1px dotted;
  color: ${({ theme }) => theme.colors.accent};
  display: block;
  font-size: initial;
  height: ${({ fixedHeight }) => (fixedHeight ? "240px" : "auto")};
  overflow: hidden auto;
  padding-left: 0;
  padding-right: 0;
  position: absolute;
  right: 0.2rem;
  scrollbar-width: none;
  top: calc(100% + 1.2rem);
  width: 12rem;
  z-index: 99;
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    padding: 0;

    &:last-of-type {
      margin-bottom: 0;
    }

    > * {
      min-height: ${({ theme }) => theme.sizes.xlg};
      padding: ${({ theme }) => `0 ${theme.sizes.sm}`};
    }
  }

  > li,
  > li > section {
    display: block;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  ${Hint} {
    display: flex;
  }

  ${MIcon} {
    font-size: small;
    margin-right: 0.2rem;
  }
`;

export const ToggleListItem = styled(FlexColumn)`
  cursor: pointer;
  width: 100%;
`;

export const ToggleListItemHoverable = styled(ToggleListItem)`
  align-items: flex-start;
  line-height: ${({ theme }) => theme.sizes.lg};
  text-align: left;

  &:hover:not(.selected) {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &.selected,
  &.selected:hover,
  &:hover {
    color: #000;
    font-weight: bold;
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
  }
`;
