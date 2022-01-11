const findADriverDto = (data, access_token) => {
  return {
    access_token:
      access_token !== ""
        ? access_token
        : `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    latitude: data["origin"]["location"]["lat"],
    longitude: data["origin"]["location"]["lng"],
    op_drop_latitude: data["destination"]["location"]["lat"],
    op_drop_longitude: data["destination"]["location"]["lat"],
    show_all: 0,
    show_region_specific_fare: 1,
    operator_token: `${process.env.NEXT_PUBLIC_APP_KEY}`,
    ride_type: 1,
  };
};

export default findADriverDto;
