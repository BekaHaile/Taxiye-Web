import { validatePhone } from "../validation";
const et = { country_code: "+251", name: "Ethiopia" }; // Country Code for Ethiopia
const ss = { country_code: "+252", name: "Sounth Sudan" }; // South Sudan
const kn = { country_code: "+253", name: "Kenya" }; // Kenya country code

export function parsePhoneNumber(phone_no) {
  switch (phone_no) {
    case phone_no.includes(et.country_code):
      return parsePhone(phone_no, et);
    case phone_no.includes(ss.country_code):
      return parsePhone(phone_no, ss);
    case phone_no.includes(kn.country_code):
      return parsePhone(phone_no, kn);
    default:
      return parsePhone(phone_no, et);
  }
}

function parsePhone(phone_no, country_data) {
  var phone = phone_no.replace(country_data.country_code, "");
  var res = {
    phone_no: phone,
    country_code: country_data.country_code,
    country: country_data.name,
    isValid: validatePhone(phone, country_data.country_code),
  };
  return res;
}
