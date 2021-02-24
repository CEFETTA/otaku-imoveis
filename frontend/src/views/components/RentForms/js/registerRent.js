import axios from "axios";
import { getAuthHeader } from "../../SessionForms/js/session";

export default function registerRent(type, formData) {
    const apiRoot = "http://localhost:3333"
    const registerEndpoint = /casa|house/i.test(type) ? "/houses" : "/apartments"

    return axios.post(`${apiRoot}${registerEndpoint}`, formData, {headers: getAuthHeader()})
}
