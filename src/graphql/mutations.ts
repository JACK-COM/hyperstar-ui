import config from "./config";
import axios from "axios";
import { HSDao } from "./types";

// 99893361

export async function addDAO(dao: HSDao) {
  const { url, method, headers } = config;
  const { created, founder, admin, description, id, name } = dao;
  const input = { admin, created, founder, description, id, name };
  const variables = { input: { ...input, id: id.toString() } };
  const query = `mutation AddDao($input: HSDaoInput!){ 
    addDao(input: $input) { 
      id, created, founder, name, description 
    } 
  }`;

  return axios(url(), { method, data: { query, variables }, headers });
}

export async function hideDAO(id: string) {
  const { url, method, headers } = config;
  const input = { id, private: true };
  const variables = { input: { ...input, id: id.toString() } };
  const query = `mutation HideDao($input: HSDaoInput!){ 
    hideDao(input: $input) { id } 
  }`;
  const data = { query, variables };
  return axios(url(), { method, data, headers });
}

export async function endListing(id: string) {
  const { url, method, headers } = config;
  const variables = { id };
  const query = `mutation EndListing($id: String!){
    endListing(id: $id) {
      ... on HSListing { id, created, seller, price, tokens { item { symbol } } }
    }
  }`;

  return axios(url(), { method, data: { query, variables }, headers });
}
