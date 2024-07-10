import React, { useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';
import style from '../../assets/css/ElasticTextBox/index.module.css';
import useValidation from '../../hooks/useValidation';
const propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text']),
    readOnly: PropTypes.bool,
    error: PropTypes.string,
    success: PropTypes.string,
    disable: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    pattern: PropTypes.string,
    autoComplete: PropTypes.string,
    name: PropTypes.string
};

const ElasticTextBox = forwardRef(
    (
        {
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
            minLength,
            maxLength,
            autoFocus = false,
            required = false,
            onBlur,
            onFocus,
            pattern,
            autoComplete,
            name,
            ...props
        },
        ref
    ) => {
        const textareaRef = useRef(null);
        const { validationError, validateInput } = useValidation('text', undefined, undefined, minLength, maxLength);
        useEffect(() => {
            if (textareaRef.current) {
                autosize(textareaRef.current);
            }
        }, []);

        useEffect(() => {
            const input = textareaRef.current;
            if (input && input.selectionStart) {
                input.setSelectionRange(input.selectionStart, input.selectionStart);
            }
        }, [value]);

        useEffect(() => {
            if (textareaRef.current) {
                textareaRef.current.value = value;
                autosize.update(textareaRef.current);
            }
        }, [value]);

        useEffect(() => {
            if (ref) {
                ref.current = textareaRef.current;
            }
        }, [ref]);

        const handleInput = (event) => {
            const newValue = event.target.value;
            validateInput(newValue);
            onChange(event);
        };

        return (
            <div className="form-group">
                {label && (
                    <label htmlFor={id} className={style.textareaLabel}>
                        {label}
                    </label>
                )}
                <div className="">
                    <textarea
                        spellCheck="false"
                        id={id}
                        name={name}
                        value={value}
                        onInput={handleInput}
                        placeholder={placeholder}
                        ref={textareaRef}
                        type={type}
                        className={style.formControl}
                        disabled={disable}
                        readOnly={readOnly}
                        minLength={minLength}
                        maxLength={maxLength}
                        autoFocus={autoFocus}
                        required={required}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        pattern={pattern}
                        autoComplete={autoComplete}
                        {...props}
                    />
                    {(validationError || error) && <p className="text-danger">{validationError || error}</p>}
                    {success && !validationError && <p className="text-success">{success}</p>}
                </div>
            </div>
        );
    }
);

ElasticTextBox.propTypes = propTypes;

export default ElasticTextBox;
