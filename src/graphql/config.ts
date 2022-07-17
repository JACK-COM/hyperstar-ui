const url = () => `http://localhost:3001/graphql`;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};
const method = "POST";
const config = { method, url, headers };

export default config;
