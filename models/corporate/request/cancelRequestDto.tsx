const cancelRequestDto = (request_data, corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
    request_id: parseInt(request_data["request_id"]),
  };
};

export default cancelRequestDto;
