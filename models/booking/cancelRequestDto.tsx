const cancelRequestDto = (data, access_token) => {
  return {
    access_token: access_token,
    customer_package_name: "com.taxiye",
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    app_version: "6007",
    login_type: "0",
    session_id: data["request_info"]["session_id"],
    device_type: "0",
    locale: "en",
  };
};

export default cancelRequestDto; 
