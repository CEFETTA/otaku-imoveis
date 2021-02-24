import axios from "axios";
import { apiRoot } from "../../../../main";
import { getAuthHeader } from "../../SessionForms/js/session";


export default function registerVisit(id, date) {
    return axios.post(`${apiRoot}/visits`, {house_id: id, scheduled_to: date}, {headers: getAuthHeader()})
}
