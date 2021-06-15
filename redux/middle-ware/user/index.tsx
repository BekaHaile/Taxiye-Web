import * as actions from "../../actions/user";
import axios from "axios";
import { showError } from "../common";


export const user = (store) => (next) => async (action) => {
    let data = store.getState().user;
    if (action.type == "PHONE_SUBMITTED") {
        next(actions.setLoading(true));
        try {
            let res = await submitPhone(
                {
                    "phone_no": `${data["country_code"]}${data["phone_no"]}`,
                    "country": `${data["country"]}`
                }
            );
            if (res) {
                if (res.status === "OK") {
                    next(actions.changeStep(data["step"] + 1));
                    next(actions.changeOtpStatus({ loading: false, otpSent: true }));
                }
                else {
                    showError(next);
                    next(actions.changeOtpStatus({ loading: false, otpSent: false }));
                }
            }
            else {
                next(actions.changeOtpStatus({ loading: false, otpSent: false }));
            }
        } catch (e) {
            showError(next);
            next(actions.changeOtpStatus({ loading: false, otpSent: false }));
        }
    } else if (action.type == "OTP_RESENT") {
        next(actions.changeOtpStatus({ loading: true, otpSent: false, }));
        try {
            let res = await submitPhone(
                {
                    "phone_no": `${data["country_code"]}${data["phone_no"]}`,
                    "country": `${data["country"]}`
                }
            );
            if (res) {
                if (res.status === "OK") {

                    next(actions.changeOtpStatus({ loading: false, otpSent: true, }));
                }
                else {
                    next(actions.changeOtpStatus({ loading: false, otpSent: false }));
                }
            }
        } catch (e) {
            showError(next);
            next(actions.changeOtpStatus({ loading: false, otpSent: false, }));
        }
    }

    else if (action.type == "OTP_SUBMITTED") {
        next(actions.setLoading(true));
        try {
            let res = await submitPhone(
                {
                    "phone_no": `${data["country_code"]}${data["phone_no"]}`,
                    "country": `${data["country"]}`
                }
            );
            if (res) {
                if (res.status === "OK") {
                    next(actions.changeStep(data["step"] + 1));
                    next(actions.changeOtpStatus({ loading: false, otpSent: true }));
                }
                else {
                    next(actions.changeOtpStatus({ loading: false, otpSent: false }));
                }
            }
        } catch (e) {
            showError(next);
            next(actions.setLoading(false));
        }
    }
    else {
        next(action);
    }

};

async function submitPhone(data) {
    try {
        const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
        const res = await axios.post(`${NEXT_PUBLIC_AGGREGATE_HOST}/account/generate_login_otp`, data, {timeout:5000});
        return res.data;
    } catch (e) {
        return null;
    }
}

