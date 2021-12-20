const gender = {
  Male: 0,
  Female: 1,
};

const driverFormDataDto = (driver_data) => {
  return {
    country: driver_data["phone_country"],
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    app_version: 6010,
    gender: gender[`${driver_data["gender"]}`],
    city: driver_data["city"]["city_id"],
    login_type: 1,
    user_name: driver_data["full_name"],
    device_type: 0,
    locale: "en",
    client_id: "EEBUOvQq7RRJBxJm",
    vehicle_status: "Owned",
    unique_device_id: "",
    alt_phone_no: "",
    os_version: 11,
    region_id: 13,
    vehicle_type: driver_data["vehicleType"]["vehicle_type"],
    device_rooted: 1,
    access_token: driver_data["access_token"],
    offering_type: 1,
    referral_code: "",
    device_token: "",
  };
};

export default driverFormDataDto;
