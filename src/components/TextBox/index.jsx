import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import style from "../../assets/css/TextBox/index.module.css";
import useValidation from './useValidation';
const propTypes = {
    id: PropTypes.string,
    labelName: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([
        'text', 'number', 'email', 'password'
    ]),
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
    name: PropTypes.string
};
const TextBox = (
    {
        id,
        labelName,
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
        ...props
    }
) => {
    const ref = useRef();
    const { validationError, validateInput } = useValidation(type, min, max);
    const handleChange = (event) => {
        const newValue = event.target.value;
        validateInput(newValue);
        onChange(event);
    };

    return (
        <>
            <div className={`mb-2.5`}>
                {labelName && (
                    <label htmlFor={id} className={style.inputLabel}>
                        {labelName}
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
