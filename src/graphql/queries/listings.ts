import axios from "axios";
import { Sale } from "reach/views/MarketView";
import config from "../config";
import { HSListing } from "../types";

/**
 * List all available marketplace items
 */
export async function listMarketplaceItems(): Promise<Sale[]> {
  const { url, method, headers } = config;
  const query = `query ListMarketplaceItems { 
      listMarketplaceItems { 
        id, qty, price, ended, bondingCurve, tokens { 
          item { id, name, decimals, symbol, url }
          altToken { id, name, decimals, symbol, url }
        }
      } 
    }`;

  const axiosConfig = { method, data: { query }, headers };
  return axios(url(), axiosConfig)
    .then(({ data }) => Promise.resolve(data.data.listMarketplaceItems))
    .then((items) => items.map(formatListing));
}

function formatListing(l: HSListing) {
  return {
    altToken: l.tokens?.altToken,
    closed: l.ended,
    ctc: l.id,
    item: l.tokens?.item,
    price: l.price,
    qty: l.qty,
    useBondingCurve: l.bondingCurve
  };
}
