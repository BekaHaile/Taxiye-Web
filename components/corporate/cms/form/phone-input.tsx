import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import countries from '../../../../assets/Data/countries.json';

import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const PhoneInput = ({action, code, phone_no, placeholder, id}) => {
  return (
    <div>Commented out phone input field</div>
    // <ConfigProvider locale={countries}>
    //   <CountryPhoneInput id={id} placeholder={placeholder} value= {{ code: code, phone: phone_no}} style={{height:"33px"}} onChange={action}/>
    // </ConfigProvider>
  );
};

export default PhoneInput;