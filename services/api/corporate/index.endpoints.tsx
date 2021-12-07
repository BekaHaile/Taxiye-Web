const { NEXT_PUBLIC_TAXIYE_CORPORATE_HOST } = process.env;
const { NEXT_PUBLIC_TAXIYE_RIDES_HOST } = process.env;
const { NEXT_PUBLIC_TAXIYE_CORPORATE_LOGIN_HOST } = process.env;
const corporateEndpoint = {
  getEmployees: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/user/list`,
  addEmployee: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/add_user_to_corporate`,
  toggleEmployeeStatus: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/toggle_corporate_user_status`,
  fetchGroups: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/fetch_groups`,
  addGroup: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/add_group`,
  updateGroup: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/update_group`,
  getRequests: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/limit_update/view_logs`,
  createRequests: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/limit_update/request`,
  cancelRequests: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/limit_update/cancel`,
  getCities: `${NEXT_PUBLIC_TAXIYE_RIDES_HOST}/get_city_info_operator_wise`,
  getRides: `${NEXT_PUBLIC_TAXIYE_RIDES_HOST}/get_ride_details`,
  fetchOverview: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/info`,
  corporateGenerateLogin: `${NEXT_PUBLIC_TAXIYE_CORPORATE_LOGIN_HOST}/account/generate_login_otp`,
  corporateLogin: `${NEXT_PUBLIC_TAXIYE_CORPORATE_LOGIN_HOST}/v1/acl/operator/login`,
  updateCorporateUser: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/info/edit`,
  getCorporateUserInfo: `${NEXT_PUBLIC_TAXIYE_CORPORATE_HOST}/corporate/info`,
  checkUserExistance: `${NEXT_PUBLIC_TAXIYE_RIDES_HOST}/is_user_present`,
  
};

export default corporateEndpoint;
