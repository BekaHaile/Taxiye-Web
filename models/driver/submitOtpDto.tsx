const submitOtpDto = (data) => {
  return {
    phone_no: `${data["country_code"]}${data["phone_no"]}`,
    country: `${data["country"]}`,
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    app_version: 6010,
    login_type: 1,
    os_version: 11,
    telerickshaw_installed: 0,
    device_type: 0,
    locale: "en",
    client_id: "EEBUOvQq7RRJBxJm",
    device_rooted: 1,
    auto_n_cab_installed: 0,
    unique_device_id: "",
    uber_installed: 0,
    ola_installed: 0,
    login_otp: `${data["otp"]}`,
  };
};

export default submitOtpDto;
