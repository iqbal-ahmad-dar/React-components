import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import style from '../../assets/css/TextBox/index.module.css';
import useValidation from '../../hooks/useValidation';

const propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
    readOnly: PropTypes.bool,
    error: PropTypes.string,
    success: PropTypes.string,
    disable: PropTypes.bool,
    steps: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    autoFocus: PropTypes.bool,
    name: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
};

const TextBox = ({
    id,
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    readOnly = false,
    error,
    success,
    disable = false,
    steps,
    min,
    max,
    onClick,
    onFocus,
    onBlur,
    autoFocus = false,
    name,
    minLength,
    maxLength,
    ...props
}) => {
    const ref = useRef();
    const { validationError, validateInput } = useValidation(type, min, max, minLength, maxLength);

    const handleChange = (event) => {
        const newValue = event.target.value;
        validateInput(newValue);
        onChange(event);
    };

    return (
        <>
            <div className="mb-2.5">
                {label && (
                    <label htmlFor={id} className={style.inputLabel}>
                        {label}
                    </label>
                )}
                <div>
                    <input
                        spellCheck="false"
                        id={id}
                        name={name}
                        ref={ref}
                        type={type}
                        placeholder={placeholder}
                        className={style.formControl}
                        onChange={handleChange}
                        value={value}
                        readOnly={readOnly}
                        step={steps}
                        disabled={disable}
                        min={min}
                        max={max}
                        minLength={minLength}
                        maxLength={maxLength}
                        onClick={onClick}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        autoFocus={autoFocus}
                        {...props}
                    />
                    {(validationError || error) && <p className="text-danger">{validationError || error}</p>}
                    {success && !validationError && <p className="text-success">{success}</p>}
                </div>
            </div>
        </>
    );
};

TextBox.propTypes = propTypes;

export default TextBox;
