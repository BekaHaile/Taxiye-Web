const getCorporateUserDto = (login_data) => {
  return {
    token: `${login_data["token"]}`,
  };
};

export default getCorporateUserDto;
