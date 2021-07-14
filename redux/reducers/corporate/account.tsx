import * as actionTypes from "../../types/corporate/account";
const initialState = {
  user: {
    full_name: "",
    email: "",
    profile: "",
    phone_no: "",
    country_code: "+251",
    country: "",
    isPhoneValid: false,
    isValid: false,
  },
  company: {
    name: "",
    debit_limit: "",
    address: "",
    max_user_limit: "",
    official_email: "",
    vat_number: "",
    invoice_email: "",
    phone_no: "",
    country_code: "+251",
    country: "",
    isPhoneValid: false,
    isValid: false,
  },
};

export default function corporateAccountReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FULL_NAME_ADDED:
      return {
        ...state,
        user: {
          ...state.user,
          full_name: action.payload.full_name,
        },
      };
    case actionTypes.EMAIL_ADDED:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
        },
      };
    case actionTypes.PHONE_NUMBER_ADDED:
      return {
        ...state,
        user: {
          ...state.user,
          phone_no: action.payload.phone_no,
          country_code: action.payload.country_code,
          country: action.payload.country,
          isPhoneValid: action.payload.isValid,
        },
      };

    case actionTypes.VALIDATED_ACCOUNT_INFORMATION:
      return {
        ...state,
        user: {
          ...state.user,
          isValid: action.payload.isValid,
        },
      };

    case actionTypes.PHONE_NUMBER_ADDED:
      return {
        ...state,
        user: {
          ...state.user,
          phone_no: action.payload.phone_no,
          country_code: action.payload.country_code,
          country: action.payload.country,
          isPhoneValid: action.payload.isValid,
        },
      };

    case actionTypes.VALIDATED_ACCOUNT_INFORMATION:
      return {
        ...state,
        user: {
          ...state.user,
          isValid: action.payload.isValid,
        },
      };

    case actionTypes.COMPANY_NAME_ADDED:
      return {
        ...state,
        company: {
          ...state.company,
          name: action.payload.name,
        },
      };
    case actionTypes.DEBIT_LIMIT_ADDED:
      return {
        ...state,
        company: {
          ...state.company,
          debit_limit: action.payload.debit_limit,
        },
      };
    case actionTypes.ADDRESS_ADDED:
      return {
        ...state,
        company: {
          ...state.company,
          address: action.payload.address,
        },
      };
    case actionTypes.MAX_USER_ADDED:
      return {
        ...state,
        company: {
          ...state.company,
          max_user_limit: action.payload.max_user_limit,
        },
      };
    case actionTypes.OFFICIAL_EMAIL_ADDED:
      return {
        ...state,
        company: {
          ...state.company,
          official_email: action.payload.official_email,
        },
      };
    case actionTypes.VAT_NUMBER_ADDED:
      return {
        ...state,
        company: {
          ...state.company,
          vat_number: action.payload.vat_number,
        },
      };

    case actionTypes.COMPANY_PHONE_NUMBER_ADDED:
      return {
        ...state,
        company: {
          ...state.company,
          phone_no: action.payload.phone_no,
          country_code: action.payload.country_code,
          country: action.payload.country,
          isPhoneValid: action.payload.isValid,
        },
      };
    case actionTypes.COMPANY_INVOICE_EMAIL_ADDED:
      return {
        ...state,
        company: {
          ...state.company,
          invoice_email: action.payload.invoice_email,
        },
      };
    case actionTypes.VALIDATED_COMPANY_INFORMATION:
      return {
        ...state,
        company: {
          ...state.company,
          isValid: action.payload.isValid,
        },
      };

    default:
      return state;
  }
}
