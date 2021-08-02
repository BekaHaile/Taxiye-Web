export function validateInput(input) {
  return input != "" && input != null;
}
export function validatePhone(phone_no, country_code) {
  if (phone_no == "" || phone_no == null) return false;
  var re;
  if (country_code == "+251") re = /^[9]{1,}[0-9]{8}$/;
  else if (country_code == "+252") re = /^[9]{1,}[0-9]{8}$/;
  else if (country_code == "+253") re = /^[9]{1,}[0-9]{8}$/;
  else return false;
  return re.test(String(phone_no).toLowerCase());
}
export function validateEmail(email) {
  if (email == "" || email == null) return false;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
