import config from "./config";
import axios from "axios";
import { HSDao } from "./types";

// 99893361

export async function addDAO(dao: HSDao) {
  const { url, method, headers } = config;
  const { created, founder, admin, description, id, name } = dao;
  const input = { admin, created, founder, description, id, name };
  const variables = { input };
  const query = `mutation AddDao($input: HSDaoInput!){ 
    addDao(input: $input) { 
      id, created, founder, name, description 
    } 
  }`;

  return axios(url(), { method, data: { query, variables }, headers });
}