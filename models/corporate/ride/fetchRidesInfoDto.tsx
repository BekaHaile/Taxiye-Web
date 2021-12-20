const request_status = {
  "on-going": 1,
  completed: 2,
  all: 8,
};

const fetchRidesInfoDto = (corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
    corporate_id: `${corporate_data["corporate_detail"]["business_details"]["business_id"]}`,
  };
};

export default fetchRidesInfoDto;
