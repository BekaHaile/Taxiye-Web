import axios from "axios";
import { showMessage } from "../../actions/navigation";

export async function fetchVehicles(body) {
    try {
        const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
        const res = await axios.post(`${NEXT_PUBLIC_AGGREGATE_HOST}/ride/available-vehicles`, body);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}