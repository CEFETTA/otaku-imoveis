import axios from "axios";

export default function fetchOptions() {
    const apiRoot = "http://localhost:3333";
    return new Promise(async (resolve, reject) => {
        const housesResponse = axios.get(`${apiRoot}/houses`);
        const apartmentsResponse = axios.get(`${apiRoot}/apartments`);
        
        try {
            await Promise.all([housesResponse, apartmentsResponse]);
            resolve({
                houses: (await housesResponse).data,
                apartments: (await apartmentsResponse).data
            });
        } catch (err) {
            reject(err);
        }
    })
}
