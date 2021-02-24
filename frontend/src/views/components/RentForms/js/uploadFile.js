import axios from "axios";
import { apiRoot } from "../../../../main";
import { getAuthHeader } from "../../SessionForms/js/session";

export default function uploadFile(file) {
    const dataForm = new FormData();
    dataForm.append(`file`, file);

    return axios.post(`${apiRoot || "http://localhost:3333"}/upload`, dataForm, {headers: getAuthHeader()})
}
