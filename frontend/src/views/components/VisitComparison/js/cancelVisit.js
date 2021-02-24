import axios from "axios";
import { apiRoot } from "../../../../main";
import { getAuthHeader } from "../../SessionForms/js/session";

export default function cancelVisit(id) {
    return axios.delete(`${apiRoot || "http://localhost:3333"}/visits/${id}`, {headers: getAuthHeader()})
}
