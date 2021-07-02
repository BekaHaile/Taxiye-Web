import * as actionTypes from "../../types/driver";
const initialState = {
  phone_no: "",
  country_code: "+251",
  phone_country: "",
  isPhoneValid: false,
  full_name: "",
  gender: "Male",
  country: "Ethiopia",
  isFirstFormValid: false,
  agreeToTerms: false,
  loading: false,
  otpSent: false,
  step: 0,
  otp: "",
  isOtpValid: false,
  vehicleType: {
    name: "Mini",
    image: require("../../../assets/images/cars/mini.svg"),
  },
  vehicles: [
    {
      name: "Sedan",
      image: require("../../../assets/images/cars/sedan.svg"),
    },
    {
      name: "Mini",
      image: require("../../../assets/images/cars/mini.svg"),
    },
    {
      name: "7 Seater",
      image: require("../../../assets/images/cars/seven-seater.svg"),
    },
    {
      name: "Lada",
      image: require("../../../assets/images/cars/lada.svg"),
    },
    {
      name: "Sedan",
      image: require("../../../assets/images/cars/sedan.svg"),
    },
    {
      name: "Mini",
      image: require("../../../assets/images/cars/mini.svg"),
    },
    {
      name: "7 Seater",
      image: require("../../../assets/images/cars/seven-seater.svg"),
    },
    {
      name: "Lada",
      image: require("../../../assets/images/cars/lada.svg"),
    },
  ],
  formStatus:false
};

export default function driverReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STEP_CHANGED:
      return { ...state, step: action.payload.step };
    case actionTypes.DRIVER_FULLNAME_ADDED:
      return { ...state, full_name: action.payload.full_name };
    case actionTypes.DRIVER_GENDER_ADDED:
      return { ...state, gender: action.payload.gender };
    case actionTypes.DRIVER_COUNTRY_ADDED:
      return { ...state, country: action.payload.country };
    case actionTypes.TERMS_CHANGED:
      return { ...state, agreeToTerms: action.payload.agreeToTerms };
    case actionTypes.FIRST_FORM_VALIDATED:
      return { ...state, isFirstFormValid: action.payload.isFirstFormValid };

    case actionTypes.PHONE_ADDED:
      return {
        ...state,
        phone_no: action.payload.phone_no,
        country_code: action.payload.country_code,
        phone_country: action.payload.country,
        isPhoneValid: action.payload.isPhoneValid,
      };

    case actionTypes.OTP_SUBMITTED:
      return { ...state };
    case actionTypes.OTP_ADDED:
      return {
        ...state,
        otp: action.payload.otp,
        isOtpValid: action.payload.otp.length == 6,
      };
    case actionTypes.LOADING_UPDATED:
      return { ...state, loading: action.payload.loading };
    case actionTypes.OTP_SENT:
      return {
        ...state,
        otpSent: action.payload.otpSent,
        loading: action.payload.loading,
      };

    case actionTypes.VEHICLE_CHANGED:
      return { ...state, vehicleType: action.payload.vehicleType };

    case actionTypes.DRIVER_FORM_SUBMITTED:
      return { ...state, formStatus: action.payload.status, loading:false };

    default:
      return state;
  }
}
