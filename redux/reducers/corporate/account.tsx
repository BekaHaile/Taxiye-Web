import * as actionTypes from "../../types/corporate/account";
const initialState = {
  user: {
    full_name: "Ayele Tolosa",
    email: "ayele@gmail.com",
    profile: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    phone_no: "978768767",
    country_code: "+251",
    country: "Ethiopia",
    isPhoneValid: false,
    isValid: false,
  },
  company: {
    name: "Elnet Techologies",
    debit_limit: "500",
    address: "Gerji, Addis Ababa",
    max_user_limit: "50",
    official_email: "elnet@elnet.com",
    vat_number: "87300638",
    invoice_email: "invoice@elnet.com",
    phone_no: "911676573",
    country_code: "+251",
    country: "Ethiopia",
    isPhoneValid: false,
    isValid: false,
  },
  roles: {
    users: [],
    query: "",
    loading: false,
    user: {
      full_name: "",
      email: "",
      role: "Moderator",
      loading: false,
      isValid: false,
    },
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

    case actionTypes.ROLES_DATA_FETCHED:
      return {
        ...state,
        roles: {
          ...state.roles,
          users: action.payload.users,
        },
      };

    case actionTypes.ROLES_TAB_LOADING_CHANGED:
      return {
        ...state,
        roles: {
          ...state.roles,
          loading: action.payload.loading,
        },
      };

    case actionTypes.ROLES_DATA_QUERY_ADDED:
      return {
        ...state,
        roles: {
          ...state.roles,
          query: action.payload.query,
        },
      };
    case actionTypes.NEW_FULL_NAME_ADDED:
      return {
        ...state,
        roles: {
          ...state.roles,
          user: {
            ...state.roles.user,
            full_name: action.payload.full_name,
          },
        },
      };

    case actionTypes.NEW_EMAIL_ADDED:
      return {
        ...state,
        roles: {
          ...state.roles,
          user: {
            ...state.roles.user,
            email: action.payload.email,
          },
        },
      };

    case actionTypes.NEW_ROLE_SELECTED:
      return {
        ...state,
        roles: {
          ...state.roles,
          user: {
            ...state.roles.user,
            role: action.payload.role,
          },
        },
      };
    case actionTypes.ROLE_FORM_VALIDATED:
      return {
        ...state,
        roles: {
          ...state.roles,
          user: {
            ...state.roles.user,
            isValid: action.payload.isValid,
          },
        },
      };

    case actionTypes.ROLE_FORM_LOADING_CHANGED:
      return {
        ...state,
        roles: {
          ...state.roles,
          user: {
            ...state.roles.user,
            loading: action.payload.loading,
          },
        },
      };
    case actionTypes.RESET_NEW_FORM:
      return {
        ...state,
        roles: {
          ...state.roles,
          user: {
            ...state.roles.user,
            full_name: "",
            email: "",
            role: "Moderator",
            loading: false,
            isValid: false,
          },
        },
      };

    default:
      return state;
  }
}
