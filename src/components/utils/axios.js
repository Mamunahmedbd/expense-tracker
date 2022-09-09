import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://mamun-json-server.herokuapp.com",
});

export default instanceAxios;
