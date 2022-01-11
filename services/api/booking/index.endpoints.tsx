const { NEXT_PUBLIC_TAXIYE_HOST } = process.env;
const bookingEndpoint = {
  findADriver: `${NEXT_PUBLIC_TAXIYE_HOST}/v2/customer/find_a_driver`,
  getFareEstimate: `${NEXT_PUBLIC_TAXIYE_HOST}/get_fare_estimate`,
  requestRide: `${process.env.NEXT_PUBLIC_TAXIYE_HOST}/request_ride`,
  cancelRideByCustomer: `${NEXT_PUBLIC_TAXIYE_HOST}/cancel_ride_by_customer`,
  cancelRequest: `${NEXT_PUBLIC_TAXIYE_HOST}/cancel_the_request`,
};

export default bookingEndpoint;
