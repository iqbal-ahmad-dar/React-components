import { useState } from 'react';
const useValidation = (type, min, max,minLength,maxLength) => {
    const [validationError, setValidationError] = useState('');
    const validateInput = (value) => {
        if (type === 'number') {
            const numericValue = Number(value);
            if (min !== undefined && numericValue < min) {
                setValidationError(`Value must be greater than or equal to ${min}`);
            } else if (max !== undefined && numericValue > max) {
                setValidationError(`Value must be less than or equal to ${max}`);
            } else {
                setValidationError('');
            }
        } else if (type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                setValidationError('Please enter a valid email address');
            } else {
                setValidationError('');
            }
        } else if (type === 'password') {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
            if (!passwordRegex.test(value)) {
                setValidationError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            } else {
                setValidationError('');
            }
        } else if (type === 'text') {
            if (minLength !== undefined && value.length < minLength) {
                setValidationError(`Text must be at least ${minLength} characters long`);
            } else if (maxLength !== undefined && value.length > maxLength) {
                setValidationError(`Text must be less than or equal to ${maxLength} characters`);
            } else {
                setValidationError('');
            }
        }else {
            setValidationError('');
        }
    };
    return { validationError, validateInput };
};
export default useValidation;
