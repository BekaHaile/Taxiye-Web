const addRequestDto = (request_data, corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
    debt_limit: parseInt(request_data["debit_limit"]),
    max_user_limit: parseInt(request_data["max_user_limit"]),
    // reason: data["reason"],
  };
};

export default addRequestDto;
