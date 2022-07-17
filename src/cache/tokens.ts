import Dexie from "dexie";
import { PaginatedDBResults } from "types/shared";

type DBToken = {
  id: string;
  name: string;
  symbol: string;
  url?: string;
  supply?: string;
  decimals?: number;
};

class TokensDB extends Dexie {
  public tokens: Dexie.Table<DBToken, string>;

  constructor() {
    super("TokensDB");

    const tokens = "id,name,symbol,url,supply,decimals";
    this.version(1).stores({ tokens });
    this.tokens = this.table("tokens");
  }
}

const db = new TokensDB();

const tokensDB = { getItem, putItem, removeItem, listItems, clearItems };

export default tokensDB;

export async function getItem(id: string) {
  const token = await db.tokens.where({ id }).first();
  return token || null;
}

export async function putItem(id: any, token: DBToken) {
  return db.tokens.put(token, id || token.id).then(() => token);
}

export async function removeItem(tokenId: string) {
  return db.tokens.delete(tokenId).then(() => tokenId);
}

export async function listItems(): Promise<PaginatedDBResults<DBToken>> {
  const data = await db.tokens.toArray();
  return { data, totalResults: data.length, totalPages: 1 };
}

export async function clearItems() {
  return db.tokens.toCollection().delete();
}
