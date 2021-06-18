
import * as actions from "../../actions/corporate";
import axios from "axios";
import * as navigationActions from "../../actions/navigation";
import { validateEmail } from "../common";
export const corporate = (store) => (next) => async (action) => {
    next(action);
    let data = store.getState().corporate;

    if (action.type == "COMPANY_NAME_ADDED" ||
        action.type == "COMPANY_OFFICIAL_EMAIL_ADDED" ||
        action.type == "COMPANY_PHONE_NUMBER_ADDED" ||
        action.type == "NUMBER_OF_EMPLOYEES_ADDED") {
        if (data["company_name"] != "" && data["company_name"] != null &&
            data["company_email"] != "" && data["company_email"] != null &&
            data["phone_no"] != "" && data["phone_no"] != null &&
            data["no_of_employees"] != "" && data["no_of_employees"] != null &&
            data["isPhoneValid"] && validateEmail(data["company_email"]))
            next(actions.setValidation(true));
        else
            next(actions.setValidation(false));

    }
    else if (action.type == "COMPANY_DATA_SUBMIT_INITIATED") {
        
        try {
            next(actions.initiateLoading(true));
            await submitCompanyData({});
            next(actions.initiateLoading(false));
            next(navigationActions.goTo("corporate-verify"));
            
        } catch (e) {
            next(actions.setValidation(false));
        }
    }
}

async function submitCompanyData(data) {

    try {
        await sleep(2000);
        return [];
        const { NEXT_PUBLIC_AGGREGATE_HOST } = process.env;
        const res = await axios.post(`${NEXT_PUBLIC_AGGREGATE_HOST}/account/generate_login_otp`, data, { timeout: 5000 });
        return res.data;
    } catch (e) {
        return null;
    }
}

async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}