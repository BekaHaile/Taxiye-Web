import * as actions from "../../types/driver";

export const addFullName = (full_name) => {
  return {
    type: actions.DRIVER_FULLNAME_ADDED,
    payload: {
      full_name: full_name,
    },
  };
};

export const genderSelected = (gender) => {
  return {
    type: actions.DRIVER_GENDER_ADDED,
    payload: {
      gender: gender,
    },
  };
};

export const countrySelected = (country) => {
  return {
    type: actions.DRIVER_COUNTRY_ADDED,
    payload: {
      country: country,
    },
  };
};

export const addPhone = ({ phone_no, country, country_code, isValid }) => {
  return {
    type: actions.PHONE_ADDED,
    payload: {
      phone_no: phone_no,
      country_code: country_code,
      country: country,
      isPhoneValid: isValid,
    },
  };
};

export const changeTerm = (agreeToTerms) => {
  return {
    type: actions.TERMS_CHANGED,
    payload: {
      agreeToTerms: agreeToTerms,
    },
  };
};

export const submitPhone = () => {
  return {
    type: actions.PHONE_SUBMITTED,
  };
};

export const validateFirstForm = (isFirstFormValid) => {
  return {
    type: actions.FIRST_FORM_VALIDATED,
    payload: {
      isFirstFormValid: isFirstFormValid,
    },
  };
};

export const changeOtpStatus = ({ loading, otpSent }) => {
  return {
    type: actions.OTP_SENT,
    payload: {
      otpSent: otpSent,
      loading: loading,
    },
  };
};

export const changeOtp = (otp) => {
  return {
    type: actions.OTP_ADDED,
    payload: {
      otp: otp,
    },
  };
};

export const resendOtp = () => {
  return {
    type: actions.OTP_RESENT,
  };
};

export const submitOtp = () => {
  return {
    type: actions.OTP_SUBMITTED,
  };
};

export const setLoading = (loading) => {
  return {
    type: actions.LOADING_UPDATED,
    payload: {
      loading: loading,
    },
  };
};

export const initiateLoadDriverDetail = () => {
  return {
    type: actions.INITIATE_GET_DRIVER_SIGNUP_DETAILS,
  };
};

export const setDriverSignDetail = (signup_detail, vehicles) => {
  return {
    type: actions.GET_DRIVER_SIGNUP_DETAILS_FINISHED,
    payload: {
      signup_detail: signup_detail,
      vehicles: vehicles,
    },
  };
};

export const changeVehicle = (vehicleType) => {
  return {
    type: actions.VEHICLE_CHANGED,
    payload: {
      vehicleType: vehicleType,
    },
  };
};

export const setDriverData = (driver_data, access_token) => {
  return {
    type: actions.DRIVER_DATA_ADDED,
    payload: {
      driver_data: driver_data,
      access_token: access_token,
    },
  };
};

export const setRequiredDocuments = (required_documents) => {
  return {
    type: actions.REQUIRED_DOCUMENT_FETCHED,
    payload: {
      required_documents: required_documents,
    },
  };
};

export const submitDriverForm = () => {
  return {
    type: actions.INITIATE_SUBMIT_DRIVER_FORM,
  };
};

export const driverFormSubmitted = (status) => {
  return {
    type: actions.DRIVER_FORM_SUBMITTED,
    payload: {
      status: status,
    },
  };
};

export const addPortraitPicture = (portraitPicture) => {
  return {
    type: actions.PORTRAIT_IMAGE_ADDED,
    payload: {
      portraitPicture: portraitPicture,
    },
  };
};
export const deletePortraitPicture = () => {
  return {
    type: actions.PORTRAIT_IMAGE_DELETED,
  };
};

export const uploadPortraitPicture = () => {
  return {
    type: actions.UPLOAD_PORTRAITE_IMAGE_INITIATED,
  };
};

export const setUploadedPortraitePicture = (id, step) => {
  return {
    type: actions.PORTRAIT_IMAGE_UPLOADED,
    payload: {
      id: id,
      step: step,
    },
  };
};

export const addDriverLicensePicture = (driverLicensePicture) => {
  return {
    type: actions.DRIVER_LICENSE_IMAGE_ADDED,
    payload: {
      driverLicensePicture: driverLicensePicture,
    },
  };
};
export const deleteDriverLicensePicture = () => {
  return {
    type: actions.DRIVER_LICENSE_IMAGE_DELETED,
  };
};

export const uploadDriverLicensePicture = () => {
  return {
    type: actions.UPLOAD_DRIVER_LICENSE_IMAGE_INITIATED,
  };
};

export const setUploadedDriverLicensePicture = (id, step) => {
  return {
    type: actions.DRIVER_LICENSE_IMAGE_UPLOADED,
    payload: {
      id: id,
      step: step,
    },
  };
};

export const addOwnershipCertificatePicture = (ownershipCertificatePicture) => {
  return {
    type: actions.OWNERSHIP_CERTIFICATE_IMAGE_ADDED,
    payload: {
      ownershipCertificatePicture: ownershipCertificatePicture,
    },
  };
};
export const deleteOwnershipCertificatePicture = () => {
  return {
    type: actions.OWNERSHIP_CERTIFICATE_IMAGE_DELETED,
  };
};

export const uploadOwnershipCertificatePicture = () => {
  return {
    type: actions.UPLOAD_OWNERSHIP_CERTIFICATE_IMAGE_INITIATED,
  };
};

export const setUploadedOwnershipCertificatePicture = (id, step) => {
  return {
    type: actions.OWNERSHIP_CERTIFICATE_IMAGE_UPLOADED,
    payload: {
      id: id,
      step: step,
    },
  };
};

export const addVehicleFrontPicture = (vehicleFrontViewPicture) => {
  return {
    type: actions.VEHICLE_FRONT_VIEW_IMAGE_ADDED,
    payload: {
      vehicleFrontViewPicture: vehicleFrontViewPicture,
    },
  };
};
export const deleteVehicleFrontPicture = () => {
  return {
    type: actions.VEHICLE_FRONT_VIEW_IMAGE_DELETED,
  };
};

export const addVehicleBackPicture = (vehicleBackViewPicture) => {
  return {
    type: actions.VEHICLE_BACK_VIEW_IMAGE_ADDED,
    payload: {
      vehicleBackViewPicture: vehicleBackViewPicture,
    },
  };
};
export const deleteVehicleBackPicture = () => {
  return {
    type: actions.VEHICLE_BACK_VIEW_IMAGE_DELETED,
  };
};

export const uploadVehiclePictures = () => {
  return {
    type: actions.UPLOAD_VEHICLE_IMAGE_INITIATED,
  };
};

export const setUploadedVehiclePictures = (frontId, backId, step) => {
  return {
    type: actions.VEHICLE_IMAGE_UPLOADED,
    payload: {
      backId: backId,
      frontId: frontId,
      step: step,
    },
  };
};

export const changeProgress = (progress) => {
  return {
    type: actions.PROGRESS_CHANGED,
    payload: {
      progress: progress,
    },
  };
};

export const changeStep = (step) => {
  return {
    type: actions.STEP_CHANGED,
    payload: {
      step: step,
    },
  };
};

export const changeSubStep = (subStep) => {
  return {
    type: actions.SUB_STEP_CHANGED,
    payload: {
      subStep: subStep,
    },
  };
};
