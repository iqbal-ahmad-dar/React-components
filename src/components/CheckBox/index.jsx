import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/Checkboxes/index.css';

const propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	className: PropTypes.string,
	iconClass: PropTypes.string
};

const Checkbox = ({
	id,
	label,
	checked,
	onChange,
	disabled=false,
	name,
	onBlur,
	onFocus,
	className = 'cursor-pointer simple-check-square ',
	iconClass = 'simple-checkmark',
	...props
}) => {
	const disabledClass = '!cursor-not-allowed !text-[grey]';
	const disabledInputClass = '!cursor-not-allowed !border-gray-400 !bg-gray-100';

	return (
		<div className={`chk relative flex flex-row gap-[10px] overflow-hidden  whitespace-pre-line ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
			<input
				onBlur={onBlur}
				onFocus={onFocus}
				type="checkbox"
				id={id}
				name={name}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				className={`${className} ${disabled ? disabledInputClass : ''}`}
				{...props}
			/>
			{label && (
				<label
					htmlFor={id}
					className={`cursor-pointer select-none !text-[14px] ${disabled ? disabledClass : ''}`}
				>
					{label}
					<span
						className={`${checked && !disabled ? iconClass : ''}`}
					></span>
				</label>
			)}
		</div>
	);
};

Checkbox.propTypes = propTypes;

export default Checkbox;
