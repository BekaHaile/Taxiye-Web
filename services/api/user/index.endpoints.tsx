const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
const userEndpoint = {
  loginUser: `${NEXT_PUBLIC_TAXIYE_HOST}/v4/customer/generate_login_otp`,
  submitOtp: `${NEXT_PUBLIC_TAXIYE_HOST}/v4/customer/verify_otp`,
};

export default userEndpoint;
