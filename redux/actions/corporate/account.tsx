import * as actions from "../../types/corporate/account";

export const changeFullName = (full_name) => {
  return {
    type: actions.FULL_NAME_ADDED,
    payload: {
      full_name: full_name,
    },
  };
};

export const changeEmail = (email) => {
  return {
    type: actions.EMAIL_ADDED,
    payload: {
        email: email,
    },
  };
};

export const setValidation = (isValid) => {
    return {
      type: actions.VALIDATED_ACCOUNT_INFORMATION,
      payload: {
        isValid: isValid,
      },
    };
  };

export const changeImage = (image) => {
    return {
      type: actions.PROFILE_CHANGED,
      payload: {
        image: image,
      },
    };
  };

export const changePhone = ({ phone_no, country, country_code, isValid }) => {
    return {
      type: actions.PHONE_NUMBER_ADDED,
      payload: {
        phone_no: phone_no,
        country_code: country_code,
        country: country,
        isValid: isValid,
      },
    };
  };


  export const changeCompanyName = (name) => {
    return {
      type: actions.COMPANY_NAME_ADDED,
      payload: {
        name: name,
      },
    };
  };

  export const changeDebitLimit = (debit_limit) => {
    return {
      type: actions.DEBIT_LIMIT_ADDED,
      payload: {
        debit_limit: debit_limit,
      },
    };
  };
  export const changeAddress = (address) => {
    return {
      type: actions.ADDRESS_ADDED,
      payload: {
        address: address,
      },
    };
  };

  export const changeUserLimit = (max_user_limit) => {
    return {
      type: actions.MAX_USER_ADDED,
      payload: {
        max_user_limit: max_user_limit,
      },
    };
  };

  export const changeOfficialEmail = (official_email) => {
    return {
      type: actions.OFFICIAL_EMAIL_ADDED,
      payload: {
        official_email: official_email,
      },
    };
  };
  export const changeInvoiceEmail = (invoice_email) => {
    return {
      type: actions.COMPANY_INVOICE_EMAIL_ADDED,
      payload: {
        invoice_email: invoice_email,
      },
    };
  };

  export const changeVatNumber = (vat_number) => {
    return {
      type: actions.VAT_NUMBER_ADDED,
      payload: {
        vat_number: vat_number,
      },
    };
  };


  export const changeCompanyPhone = ({ phone_no, country, country_code, isValid }) => {
    return {
      type: actions.COMPANY_PHONE_NUMBER_ADDED,
      payload: {
        phone_no: phone_no,
        country_code: country_code,
        country: country,
        isValid: isValid,
      },
    };
  };

  export const setComapanyValidation = (isValid) => {
    return {
      type: actions.VALIDATED_COMPANY_INFORMATION,
      payload: {
        isValid: isValid,
      },
    };
  };