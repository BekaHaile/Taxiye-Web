const cancelRideByCustomerDto = (data, access_token) => {
  return {
    access_token: access_token,
    reasons: "Driver+denied+duty",
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    login_type: 0,
    device_type: 0,
    addn_reason: data["reason"],
    locale: "en",
  };
};

export default cancelRideByCustomerDto;
