import axios from "axios";

export async function performRegister(name, email, password) {
  const registerEndpoint = `http://localhost:3333/users`;
  const body = { name, email, password };

  return await axios.post(registerEndpoint, body);
}

export async function performLogin(email, password) {
  const loginEndpoint = `http://localhost:3333/sessions`;
  const body = { email, password };

  return await axios.post(loginEndpoint, body);
}

export function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}
