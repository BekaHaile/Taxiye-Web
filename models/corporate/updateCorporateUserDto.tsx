const updateCorporateUserDto = (corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
  };
};

export default updateCorporateUserDto;
