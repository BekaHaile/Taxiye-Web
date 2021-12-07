const submitPhoneDto = (corporate_data) => {
  return {
    phone_no: `${corporate_data["country_code"]}${corporate_data["phone_no"]}`,
    country: `${corporate_data["country"]}`,
  };
};

export default submitPhoneDto;
