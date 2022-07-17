import Dexie from "dexie";
import { ListQueryOpts, PaginatedDBResults } from "types/shared";

/** Table pagination helper */
export function paginate<T>(
  results: T[],
  opts: ListQueryOpts
): PaginatedDBResults<T> {
  const totalResults = results.length;
  if (!opts.resultsPerPage && !opts.page)
    return { data: results, totalResults };

  const { resultsPerPage = 20, page = 1 } = opts;
  const start = page * resultsPerPage;
  const data = results.slice(start - 1, resultsPerPage);
  const totalPages = Math.floor(results.length / resultsPerPage);

  return {
    data,
    page,
    resultsPerPage,
    totalPages,
    totalResults,
  };
}

/** Delete all items in a table without deleting the table */
export function deleteAllItems(db: Dexie.Table<any, any>) {
  return db.toCollection().delete();
}
