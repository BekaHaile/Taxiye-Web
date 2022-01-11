const fetchFareDto = (data, access_token) => {
  return {
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    ride_distance: data["vehicle"]["distance"],
    region_id: data["vehicle"]["region_id"],
    vehicle_type: data["vehicle"]["vehicle_type"],
    access_token: access_token,
    start_longitude: data["origin"]["location"]["lng"],
    start_latitude: data["origin"]["location"]["lat"],
    drop_latitude: data["destination"]["location"]["lat"],
    ride_time: data["time"],
    drop_longitude: data["destination"]["location"]["lng"],
    app_version: "6007",
    login_type: "0",
    is_pooled: "0",
    device_type: "0",
    locale: "en",
    ride_type: "0",
    customer_package_name: "com.taxiye",
  };
};

export default fetchFareDto;
