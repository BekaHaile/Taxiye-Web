const submitOtpDto = (data) => {
  return {
    phone_no: `${data["country_code"]}${data["phone_no"]}`,
    country: `${data["country"]}`,
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    country_code: `${data["country_code"]}`,
    login_type: "0",
    login_otp: `${data["otp"]}`,
    app_version: "6007",
    device_type: "0",
    locale: "en",
    device_token: `${data["device_token"]}`,
  };
};

export default submitOtpDto;
