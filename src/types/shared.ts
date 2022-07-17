// import { DefaultTheme } from "styled-components";

export type ConnectionProps = {
  address?: string;
  accountsList?: any[];
  appsCount?: number;
  error?: string | any | null;
  loading?: boolean;
  msg?: string | null;
  account?: any | null;
};

export type UIThemeType = "Dark" | "Light";

declare module "styled-components" {
  type DefaultSizes = {
    xlg: string;
    lg: string;
    md: string;
    sm: string;
  };
  export interface DefaultTheme {
    sizes: {
      default: string;
      xs: string;
      xxlg: string;
      xxs: string;
    } & DefaultSizes;

    colors: {
      accent: string;
      bgColor: string;
      bgGradient: string;
      semitransparent: string;
      error: string;
      primary: string;
      secondary: string;
      warning: string;
    };

    presets: {
      elevated: { md(t: DefaultTheme): string };
      rounded: DefaultSizes;
    };
  }
}

/* ADI */
export type ADIDBInterface<T> = Record<string, (...a: any[]) => any> & {
  listItems(opts?: ListQueryOpts): Promise<PaginatedDBResults<T>>;
  getItem(id: any): Promise<T | null>;
  putItem(id: any, val: any): Promise<any | null>;
  removeItem(id: any): Promise<any>;
};

/** Query options for listing all items in a db */
export type ListQueryOpts = {
  cacheKey: string;
  page?: number;
  resultsPerPage?: number;
  orderBy?: string;
};

/** Query results for a "List items" request (allows pagination) */
export type PaginatedDBResults<T> = {
  totalResults?: number;
  totalPages?: number;
  resultsPerPage?: number;
  data: T[];
  page?: number;
};

// eslint-disable-next-line no-shadow
export enum VIEWSTATE {
  IDLE = "0",
  SUBMITTING = "Submitting",
  LOADING = "Loading",
  FUND_ERROR = "Pool Funding Error",
}

export type TokenID = string | number;
export type MarketInventory = {
  item: TokenID;
  price: number;
  altToken: TokenID;
  altPrice: number;
  qty: number;
};

export type SaleItemView = {
  seller: string;
  useBondingCurve: boolean;
} & MarketInventory;

export type Inventory = SaleItemView;
export type MarketView = SaleItemView;
export type MarketDeployerOpts = {
  smallUnit: TokenID;
  largeUnit: TokenID;
  largeDecs: number;
  conversion: number;
} & Record<string, any>;
export type AdminData = { notifyComplete(): any } & MarketDeployerOpts;

export type UnwrapPromise<T> = T extends Promise<infer A> ? A : T;
