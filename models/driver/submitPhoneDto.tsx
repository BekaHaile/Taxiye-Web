const submitPhoneDto = (data) => {
  return {
    phone_no: `${data["country_code"]}${data["phone_no"]}`,
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    app_version: 6010,
    login_type: 1,
    os_version: 11,
    device_type: 0,
    country_code: `${data["country_code"]}`,
    device_rooted: 1,
    device_name: "Taxiye Web",
    device_token: "",
    unique_device_id: "",
  };
};

export default submitPhoneDto;
