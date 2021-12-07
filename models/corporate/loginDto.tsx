const loginDto = (corporate_data) => {
  return {
    email: corporate_data["login_email"],
    password: corporate_data["login_password"],
  };
};

export default loginDto;
