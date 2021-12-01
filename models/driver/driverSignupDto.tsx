const driverSignupDto = (access_token) => {
  return {
    access_token: `${access_token}`,
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    app_version: 6010,
    login_type: 1,
    device_type: 0,
  };
};

export default driverSignupDto;
