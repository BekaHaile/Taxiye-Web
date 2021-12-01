const toggleEmployeeStatusDto = (employee_data, corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
    user_id: employee_data["selected_user"]["user_id"],
    is_active: employee_data["selected_user"]["is_active"] == 1 ? 2 : 1,
  };
};

export default toggleEmployeeStatusDto;
