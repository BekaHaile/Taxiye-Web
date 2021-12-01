const registerEmployeeDto = (corporate_employee, corporate_data) => {
  return {
    business_id: `${corporate_data["corporate_detail"]["business_details"]["business_id"]}`,
    token: `${corporate_data["corporate_detail"]["token"]}`,
    employees: corporate_employee["new_employees"]?.map((employee) => {
      return {
        phone_no: `${employee["code"]}${employee["phone_no"]}`,
        country_code: `${employee["code"]}`,
        group_id: `${employee["group_id"]}`,
        email: `${employee["email"]}`,
        username: `${employee["first_name"]} ${employee["last_name"]}`,
      };
    }),
  };
};

export default registerEmployeeDto;
