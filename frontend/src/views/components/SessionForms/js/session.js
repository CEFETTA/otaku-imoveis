import apiUri from "../../../../config/uri";
import axios from "axios";

export async function performRegister(name, email, password) {
  const registerEndpoint = `${apiUri}/users`;
  const body = { name, email, password };

  return await axios.post(registerEndpoint, body);
}

export async function performLogin(email, password) {
  const loginEndpoint = `${apiUri}/sessions`;
  const body = { email, password };

  return await axios.post(loginEndpoint, body);
}

export function getAuthHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.token ? { Authorization: `Bearer ${user.token}` } : {};
}
