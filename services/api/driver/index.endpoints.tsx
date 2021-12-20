const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
const driverEndpoint = {
  loginDriver: `${NEXT_PUBLIC_TAXIYE_HOST}/v2/generate_login_otp`,
  submitOtp: `${NEXT_PUBLIC_TAXIYE_HOST}/driver/login`,
  fetchRequiredDocuments: `${NEXT_PUBLIC_TAXIYE_HOST}/fetch_required_docs`,
  fetchDriverDetail: `${NEXT_PUBLIC_TAXIYE_HOST}/get_driver_signup_details`,
  uploadFile: `${NEXT_PUBLIC_TAXIYE_HOST}/upload_document`,
  updateDriverData: `${NEXT_PUBLIC_TAXIYE_HOST}/update_driver_info`
};

export default driverEndpoint;
