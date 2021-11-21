import phone from "phone";
export function validateInput(input) {
  return input != "" && input != null;
}
export function validatePhone(phone_no, country_code) {
  if (phone_no == "" || phone_no == null) return false;
  const { isValid } = phone(country_code + phone_no);
  return isValid;
}
export function validateEmail(email) {
  if (email == "" || email == null) return false;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
