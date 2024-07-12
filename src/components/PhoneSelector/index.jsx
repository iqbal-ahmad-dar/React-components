import React from 'react';
import PropTypes from 'prop-types';
import { MuiTelInput } from 'mui-tel-input';
import "../../assets/css/PhoneSelector/index.css";
const propTypes = {
  label: PropTypes.string,
  defaultCountry: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const PhoneSelector = ({
  label,
  defaultCountry = 'IN',
  value = '91',
  onChange,
}) => {
  const [phone, setPhone] = React.useState(value || '');

  const handleChange = (newPhone) => {
    setPhone(newPhone);
    if (onChange) {
      onChange(newPhone);
    }
  };

  return (
    <div className={`mb-2.5`}>
      {label && <div className="mb-1">{label}</div>}
      <MuiTelInput 
        value={phone}
        onChange={handleChange}
        defaultCountry={defaultCountry}
      />
    </div>
  );
};

PhoneSelector.propTypes = propTypes;
export default PhoneSelector;
