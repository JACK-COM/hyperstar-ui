import Dexie from "dexie";
import { PaginatedDBResults } from "types/shared";
import tokensAPI from "./tokens";
import { paginate } from "./utils";

type DBExchange = {
  ctcInfo: string | number;
  admin: string;
  largeUnit: string | number;
  smallUnit: string | number;
  conversion: number;
};

class ExchangesDB extends Dexie {
  public exchanges: Dexie.Table<DBExchange, string | number>;

  constructor() {
    super("ExchangesDB");

    const exchanges = "ctcInfo,smallUnit,largeUnit,conversion,admin";
    this.version(1).stores({ exchanges });
    this.exchanges = this.table("exchanges");
  }
}

const db = new ExchangesDB();

const exchangesDB = {
  getItem,
  putItem,
  removeItem,
  listItems,
  clearItems,
};

export default exchangesDB;

async function getItem(ctcInfo: any) {
  const exchange = await db.exchanges.where({ ctcInfo }).first();
  if (!exchange) return null;
  return mapExchangeTokens(exchange);
}

async function mapExchangeTokens(exchange: DBExchange) {
  const [largeUnit, smallUnit] = await Promise.all([
    tokensAPI.getItem(exchange?.largeUnit as any),
    tokensAPI.getItem(exchange?.smallUnit as any),
  ]);
  return { ...exchange, largeUnit, smallUnit };
}

async function putItem(id: any, exchange: DBExchange) {
  return db.exchanges
    .put(exchange, id || exchange.ctcInfo)
    .then(() => exchange);
}

async function removeItem(exchangeId: string) {
  return db.exchanges.delete(exchangeId).then(() => exchangeId);
}

async function listItems(opts: any): Promise<PaginatedDBResults<DBExchange>> {
  const data = await db.exchanges.toArray();
  const withTokens: any[] = await Promise.all(data.map(mapExchangeTokens));
  return paginate(withTokens, opts);
}

async function clearItems() {
  return db.exchanges.toCollection().delete();
}
