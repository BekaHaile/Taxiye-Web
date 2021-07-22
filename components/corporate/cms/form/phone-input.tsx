import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import countries from '../../../../assets/Data/countries.json';

// Usually you only need to import ConfigProvider & CSS once in App.js/App.tsx
// CSS order is important!
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';

const PhoneInput = ({action, code, phone_no}) => {
  return (
    <ConfigProvider locale={countries}>
      <CountryPhoneInput value= {{ code: code, phone: phone_no}} style={{height:"33px"}} onChange={action}/>
    </ConfigProvider>
  );
};

export default PhoneInput;