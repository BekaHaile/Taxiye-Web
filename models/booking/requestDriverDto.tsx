const requestDriverDto = (data, access_token) => {
  return {
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    app_version: "6007",
    current_longitude: data["origin"]["location"]["lng"],
    login_type: "0",
    latitude: data["origin"]["location"]["lat"],
    device_type: "0",
    driver_fare_factor: "1.0",
    locale: "en",
    preferred_payment_mode: "1",
    pickup_location_address: data["origin"]["address"],
    reverse_bid: "0",
    location_accuracy: "3.075",
    duplicate_flag: "0",
    op_drop_longitude: data["destination"]["location"]["lng"],
    longitude: data["origin"]["location"]["lng"],
    drop_location_address: data["destination"]["address"],
    coupon_to_apply: "-1",
    region_id: data["vehicle"]["region_id"],
    is_bluetooth_tracker: "0",
    vehicle_type: data["vehicle"]["vehicle_type"],
    op_drop_latitude: data["destination"]["location"]["lat"],
    access_token: access_token,
    customer_package_name: "com.taxiye",
    customer_fare_factor: "1.0",
    current_latitude: data["origin"]["location"]["lat"],
    master_coupon: "0",
    multiple_destinations: "[]",
  };
};

export default requestDriverDto;
