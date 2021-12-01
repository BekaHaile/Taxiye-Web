const submitPhoneDto = (data) => {
  return {
    phone_no: `${data["country_code"]}${data["phone_no"]}`,
    country: `${data["country"]}`,
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    country_code: `${data["country_code"]}`,
    
  };
};

export default submitPhoneDto;
