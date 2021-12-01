const fetchGroupsDto = (corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
  };
};

export default fetchGroupsDto;
