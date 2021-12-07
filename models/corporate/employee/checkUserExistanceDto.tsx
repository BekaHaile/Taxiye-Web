const checkUserExistanceDto = (phone_no, corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
    phone_no: `${phone_no}`,
    panel_locale: "en",
  };
};

export default checkUserExistanceDto;
