import axios from "axios";

export async function fetchVehicles(body) {
    try {
        const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
        const res = await axios.post(`${NEXT_PUBLIC_AGGREGATE_HOST}/ride/available-vehicles`, body, {timeout:5000});
        return res.data;
    } catch (e) {
        throw e;
        return null;
    }
}