import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/PhoneSelector/index.css';

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

  const PhoneInput = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      const { MuiTelInput } = require('mui-tel-input');
      return MuiTelInput;
    }
    return () => <div>Loading...</div>; // or return null for SSR
  }, []);

  return (
    <div className={`mb-2.5`}>
      {label && <div className="label">{label}</div>}
      <PhoneInput
        value={phone}
        onChange={handleChange}
        defaultCountry={defaultCountry}
      />
    </div>
  );
};

PhoneSelector.propTypes = {
  label: PropTypes.string,
  defaultCountry: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default PhoneSelector;
