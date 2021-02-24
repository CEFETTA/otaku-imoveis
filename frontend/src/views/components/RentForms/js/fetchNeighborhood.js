import axios from "axios";
import { getAuthHeader } from "../../SessionForms/js/session";

export default function fetchNeighborhood() {
    return axios.get("http://localhost:3333/neighborhoods", {headers: getAuthHeader()})
}
