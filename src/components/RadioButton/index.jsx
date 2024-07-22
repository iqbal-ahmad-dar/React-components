import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/RadioButtons/index.css';
const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string,
};

const Radio = ({
  id,
  label,
  checked,
  onChange,
  disabled,
  className,
  iconClass,
  onBlur,
  onFocus,
  name,
  ...props
}) => {
  const disabledClass = '!cursor-not-allowed !text-[grey]';
  const disabledInputClass =
    '!cursor-not-allowed !border-gray-400 !bg-gray-100';
  const handleChange = (e) => {
    e.preventDefault();
    if (!checked) {
      onChange(e);
    }
  };

  return (
    <div
      className={`radio-label relative flex flex-row gap-[10px] ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <input
        type="radio"
        id={id}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`${className} radio-circle ${disabled ? disabledInputClass : ''}`}
        {...props}
      />
      {checked && <span className="!left-[10px] !top-[10px]"></span>}
      {label && (
        <label
          onClick={handleChange}
          htmlFor={id}
          className={`cursor-pointer select-none !text-[14px] ${disabled ? disabledClass : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Radio.propTypes = propTypes;
export default Radio;
