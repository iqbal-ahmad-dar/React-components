import React, { useEffect, useState } from 'react';
import Radio from '../RadioButton/index';
import PropTypes from 'prop-types';
import '../../assets/css/RadioButtons/index.css';
const propTypes = {
  type: PropTypes.oneOf(['vertical', 'horizontal']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      selected: PropTypes.bool,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  headingLabel: PropTypes.string,
};
const RadioGroup = ({
  type = 'vertical',
  options,
  name,
  onChange,
  className,
  iconClass,
  headingLabel,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    options.forEach((option) => {
      if (option.selected) {
        setSelectedOption(option.value);
      }
    });
  }, [options]);
  const handleChange = (value) => {
    setSelectedOption(value);
    onChange(value);
  };
  return (
    <div
      className={`relative mb-2.5 flex list-none flex-wrap gap-[8px] ${type === 'horizontal' ? '' : 'flex-col'}`}
    >
      {headingLabel && <label className="label">{headingLabel}</label>}
      {options.map((option) => (
        <Radio
          key={option.value}
          id={option.value}
          name={name}
          label={option.label}
          checked={selectedOption === option.value}
          className={className}
          iconClass={iconClass}
          onChange={() => handleChange(option.value)}
          disabled={option.disabled}
        />
      ))}
    </div>
  );
};

RadioGroup.propTypes = propTypes;
export default RadioGroup;
