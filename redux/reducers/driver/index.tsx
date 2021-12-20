import * as actionTypes from "../../types/driver";
/*
// Here
*/

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
  subStep: 0,
  otp: "",
  isOtpValid: false,
  vehicleType: null,
  driver_data: null,
  signup_detail: null,
  city: "",
  access_token: "",
  required_documents: null,
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
  formStatus: false,
  portraitPicture: null,
  portraitPictureId: "",

  driverLicensePicture: null,
  driverLicensePictureId: "",

  vehicleFrontViewPicture: null,
  vehicleFrontViewPictureId: "",
  vehicleBackViewPicture: null,
  vehicleBackViewPictureId: "",

  ownershipCertificatePicture: null,
  ownershipCertificatePictureId: "",

  files: [],
  doc_type_num: 0,
  lastUpload: false,

  uploading: false,
  progress: 0,
};

export default function driverReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STEP_CHANGED:
      return { ...state, step: action.payload.step };
    case actionTypes.SUB_STEP_CHANGED:
      return {
        ...state,
        subStep: action.payload.subStep,
        files: [],
        doc_type_num: 0,
      };

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
        isOtpValid: action.payload.otp.length == 4,
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
    case actionTypes.DRIVER_CITY_ADDED:
      return { ...state, city: action.payload.city, vehicles: action.payload.city.vehicle_types };

    case actionTypes.DRIVER_FORM_SUBMITTED:
      return { ...state, formStatus: action.payload.status, loading: false };
    case actionTypes.DRIVER_DATA_ADDED:
      return {
        ...state,
        driver_data: action.payload.driver_data,
        access_token: action.payload.access_token,
      };
    case actionTypes.GET_DRIVER_SIGNUP_DETAILS_FINISHED:
      return {
        ...state,
        signup_detail: action.payload.signup_detail,
        vehicles: action.payload.vehicles,
        city: action.payload.city
      };

    case actionTypes.REQUIRED_DOCUMENT_FETCHED:
      return {
        ...state,
        required_documents: action.payload.required_documents,
      };

    case actionTypes.PROGRESS_CHANGED:
      return { ...state, progress: action.payload.progress };

    case actionTypes.PORTRAIT_IMAGE_ADDED:
      return { ...state, portraitPicture: action.payload.portraitPicture };
    case actionTypes.UPLOAD_PORTRAITE_IMAGE_INITIATED:
      return { ...state, uploading: true };
    case actionTypes.PORTRAIT_IMAGE_UPLOADED:
      return {
        ...state,
        uploading: false,
        progress: 0,
        portraitPictureId: action.payload.id,
        subStep: action.payload.step,
      };
    case actionTypes.PORTRAIT_IMAGE_DELETED:
      return { ...state, portraitPicture: null };

    case actionTypes.DRIVER_LICENSE_IMAGE_ADDED:
      return {
        ...state,
        driverLicensePicture: action.payload.driverLicensePicture,
      };
    case actionTypes.UPLOAD_DRIVER_LICENSE_IMAGE_INITIATED:
      return { ...state, uploading: true };
    case actionTypes.DRIVER_LICENSE_IMAGE_UPLOADED:
      return {
        ...state,
        uploading: false,
        progress: 0,
        driverLicensePictureId: action.payload.id,
        subStep: action.payload.step,
      };
    case actionTypes.DRIVER_LICENSE_IMAGE_DELETED:
      return { ...state, driverLicensePicture: null };

    case actionTypes.OWNERSHIP_CERTIFICATE_IMAGE_ADDED:
      return {
        ...state,
        ownershipCertificatePicture: action.payload.ownershipCertificatePicture,
      };
    case actionTypes.UPLOAD_OWNERSHIP_CERTIFICATE_IMAGE_INITIATED:
      return { ...state, uploading: true };
    case actionTypes.OWNERSHIP_CERTIFICATE_IMAGE_UPLOADED:
      return {
        ...state,
        uploading: false,
        progress: 0,
        ownershipCertificatePictureId: action.payload.id,
        step: action.payload.step,
      };
    case actionTypes.OWNERSHIP_CERTIFICATE_IMAGE_DELETED:
      return { ...state, ownershipCertificatePicture: null };

    case actionTypes.VEHICLE_FRONT_VIEW_IMAGE_ADDED:
      return {
        ...state,
        vehicleFrontViewPicture: action.payload.vehicleFrontViewPicture,
      };

    case actionTypes.VEHICLE_FRONT_VIEW_IMAGE_DELETED:
      return { ...state, vehicleFrontViewPicture: null };

    case actionTypes.VEHICLE_BACK_VIEW_IMAGE_ADDED:
      return {
        ...state,
        vehicleBackViewPicture: action.payload.vehicleBackViewPicture,
      };
    case actionTypes.VEHICLE_BACK_VIEW_IMAGE_DELETED:
      return { ...state, vehicleBackViewPicture: null };
    case actionTypes.UPLOAD_VEHICLE_IMAGE_INITIATED:
      return { ...state, uploading: true };
    case actionTypes.VEHICLE_IMAGE_UPLOADED:
      return {
        ...state,
        uploading: false,
        progress: 0,
        vehicleFrontViewPictureId: action.payload.frontId,
        vehicleBackViewPictureId: action.payload.backId,
        subStep: action.payload.step,
      };

    case actionTypes.ADD_IMAGE_TO_BE_UPLOADED:
      return {
        ...state,
        files: [...state.files, action.payload.file],
        doc_type_num: action.payload.doc_type_num,
      };
    case actionTypes.UPLOADING_STATUS_CHANGED:
      return { ...state, uploading: action.payload.uploading };
    case actionTypes.DELETE_IMAGE_TO_BE_UPLOADED:
      return {
        ...state,
        files: [
          ...state.files.slice(0, action.payload.index),
          ...state.files.slice(action.payload.index + 1),
        ],
      };
    case actionTypes.INITIATE_UPLOAD_IMAGE:
      return {
        ...state,
        lastUpload: action.payload.lastUpload,
      };
    case actionTypes.IMAGE_UPLOAD_FINISHED:
      return {
        ...state,
        files: [],
      };

    default:
      return state;
  }
}
