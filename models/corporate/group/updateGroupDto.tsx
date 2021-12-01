const updateGroupDto = (corporate_group, corporate_data) => {
  return {
    token: `${corporate_data["corporate_detail"]["token"]}`,
    group_id: corporate_group["group_id"],
    group_name: corporate_group["group_name"],
    monthly_budget_limit: corporate_group["monthly_budget"],
    monthly_ride_limit: corporate_group["monthly_ride"],
    max_members: corporate_group["max_members"],
    vehicle_type: `${corporate_group["selected_vehicle"]}`,
    corporate_id: parseInt(
      `${corporate_data["corporate_detail"]["business_details"]["business_id"]}`
    ),
  };
};

export default updateGroupDto;
