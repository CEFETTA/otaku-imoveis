import axios from "axios";
import { apiRoot } from "../../../../main";
import { getAuthHeader } from "../../SessionForms/js/session";

export default function fetchVisits() {
    return axios.get(`${apiRoot || "http://localhost:3333"}/visits`, {headers: getAuthHeader()})
}
