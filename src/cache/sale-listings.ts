import { ReachToken } from "@jackcom/reachduck/lib/types";
import Dexie from "dexie";
import { ListQueryOpts, PaginatedDBResults } from "types/shared";
import { getItem as getToken } from "./tokens";
import { paginate } from "./utils";

type DBListing = {
  ctc: string;
  altPrice: string | number;
  altToken: string | number;
  item: string | number;
  price: string | number;
  qty: number;
  seller: string;
  useBondingCurve: boolean;
};
type SaleListing = DBListing & {
  altToken: ReachToken;
  item: ReachToken;
};

class ListingsDB extends Dexie {
  public listings: Dexie.Table<DBListing, string>;

  constructor() {
    super("ListingsDB");

    const listings =
      "ctc,altPrice,altToken,item,price,qty,seller,useBondingCurve";
    this.version(1).stores({ listings });
    this.listings = this.table("listings");
  }
}

const db = new ListingsDB();

const listingsAPI = {
  getItem,
  putItem,
  removeItem,
  listItems,
  clearItems,
};

export default listingsAPI;

async function getItem(ctc: string): Promise<SaleListing | null> {
  const listing = await db.listings.where({ ctc }).first();
  if (!listing) return null;

  const [item, altToken] = await Promise.all([
    getToken(listing.item as any),
    getToken(listing.altToken as any),
  ]);
  return { ...listing, item, altToken } as SaleListing;
}

async function putItem(id: any, listing: SaleListing) {
  const dbListing = {
    ...listing,
    altToken: listing.altToken.id,
    item: listing.item.id,
  };

  await db.listings.put(dbListing, listing.ctc);
  return listing;
}

async function removeItem(id: string) {
  await db.listings.delete(id);
  return id;
}

async function listItems(
  opts: ListQueryOpts
): Promise<PaginatedDBResults<DBListing>> {
  let fetched: any[] = [];
  let listings = await db.listings.toArray();
  const uniqueTokens = new Set();

  listings.forEach((l) => {
    [l.altToken, l.item].forEach((token) => {
      if (uniqueTokens.has(token)) return;
      uniqueTokens.add(token);
      fetched.push(getToken(token as any));
    });
  });

  fetched = await Promise.all(fetched);
  listings = listings.map((listing) => {
    const item = fetched.find((t) => t?.id === listing.item);
    const altToken = fetched.find((t) => t?.id === listing.altToken);
    return { ...listing, item, altToken };
  });

  return paginate(listings, opts);
}

async function clearItems() {
  return db.listings.toCollection().delete();
}
