import * as actions from "../../types/corporate";

export const addCompanyName = (company_name) => {
    
    return {
        type: actions.COMPANY_NAME_ADDED,
        payload: {
            company_name: company_name
        }
    }
};
export const addCompanyEmail = (company_email) => {
    return {
        type: actions.COMPANY_OFFICIAL_EMAIL_ADDED,
        payload: {
            company_email: company_email
        }
    }
};
export const addPhone = ({ phone_no, country, country_code, isPhoneValid }) => {
    return {
        type: actions.COMPANY_PHONE_NUMBER_ADDED,
        payload: {
            phone_no: phone_no,
            country_code: country_code,
            country: country,
            isPhoneValid: isPhoneValid
        }
    }
};


export const addCompanyEmployeesNumber = (no_of_employees) => {
    return {
        type: actions.NUMBER_OF_EMPLOYEES_ADDED,
        payload: {
            no_of_employees: no_of_employees
        }
    }
};

export const setValidation = (isValid) => {
    return {
        type: actions.VALIDATION_UPDATED,
        payload: {
            isValid: isValid
        }
    }
};


export const initiateLoading = (loading) => {
    return {
        type: actions.LOADING_INITIATED,
        payload: {
            loading: loading
        }
    }
};


export const initiateSubmitCompanyData = () => {
    return {
        type: actions.COMPANY_DATA_SUBMIT_INITIATED,
    }
};
