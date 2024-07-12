import React from 'react';
import PropTypes from 'prop-types';
import { MuiTelInput } from 'mui-tel-input';
import "../../assets/css/PhoneSelector/index.css";

const PhoneSelector = ({
    label,
    defaultCountry,
    value,
    onChange,
    className,
    inputProps,
    ...props
}) => {
    const [phone, setPhone] = React.useState(value || '');

    const handleChange = (newPhone) => {
        setPhone(newPhone);
        if (onChange) {
            onChange(newPhone);
        }
    };

    return (
        <div className={`mb-2.5 ${className}`} {...props}>
            {label && <div className='mb-1'>{label}</div>}
            <MuiTelInput 
                value={phone}
                onChange={handleChange}
                defaultCountry={defaultCountry}
                {...inputProps}
            />
        </div>
    );
};

PhoneSelector.propTypes = {
    label: PropTypes.string,
    defaultCountry: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    inputProps: PropTypes.object,
};

PhoneSelector.defaultProps = {
    defaultCountry: 'US',
    value: '',
    className: '',
    inputProps: {},
};

export default PhoneSelector;
