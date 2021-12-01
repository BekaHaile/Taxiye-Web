const request_status = {
  "on-going": 1,
  completed: 2,
};

const fetchRidesDto = (ride_data, corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
    business_id: `${corporate_data["corporate_detail"]["business_details"]["business_id"]}`,
    status: request_status[`${ride_data["type"]}`],
    city_id: ride_data["city"],
    start_date: getValidDate(ride_data["date"]),
  };
};

function getValidDate(date) {
  return (
    date
      ?.toISOString()
      ?.replace("Z", " ")
      ?.replace("T", " ")
      ?.substring(0, 19) ?? ""
  );
}

export default fetchRidesDto;
