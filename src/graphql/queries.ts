import axios from "axios";
import config from "./config";

// 99893361

export async function listDaos() {
  const { url, method, headers } = config;
  const query = `query ListDaos { 
    listDaos { id, created, founder, admin, name, description } 
  }`;
  const axiosConfig = { method, data: { query }, headers };
  return axios(url(), axiosConfig).then(({ data }) => data.data.listDaos);
}

export async function getDaoDescription(daoId: string) {
  const id = daoId.toString();
  const { url, method, headers } = config;
  const query = `query GetDao($id: String!) { 
    getDao(id: $id) { description } 
  }`;
  const axiosConfig = { method, data: { query, variables: { id } }, headers };
  const res = await axios(url(), axiosConfig).then(
    ({ data }) => data.data.getDao
  );
  return res?.description;
}
