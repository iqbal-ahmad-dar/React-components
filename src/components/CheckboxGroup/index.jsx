import React, { useEffect, useState } from 'react';
import Checkbox from '../CheckBox';
import PropTypes from 'prop-types';
const propTypes = {
	type: PropTypes.oneOf(['vertical', 'horizontal']),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			checked: PropTypes.bool,
			disabled: PropTypes.bool
		})
	).isRequired,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
	iconClass: PropTypes.string,
	groupName: PropTypes.string 
};

const CheckboxGroup = ({
	type = 'vertical',
	options,
	onChange,
	className,
	iconClass,
	groupName, 
}) => {
	const [checkedItems, setCheckedItems] = useState({});

	useEffect(() => {
		options.forEach((option) => {
			if (option.checked === true) {
				setCheckedItems((prev) => ({
					...prev,
					[option.value]: option.checked
				}));
			}
		});
	}, [options]);

	const handleChange = (value) => {
		setCheckedItems((prev) => {
			const newCheckedItems = { ...prev, [value]: !prev[value] };
			onChange(newCheckedItems);
			return newCheckedItems;
		});
	};
	return (
		<div className='relative mb-2.5'>
			{groupName && (
				<label className='label'>
					{groupName} 
				</label>
			)}
			<div className={`relative flex list-none  flex-wrap gap-[8px] whitespace-pre-line ${type === 'horizontal' ? '' : 'flex-col'}`}>
				{options.map((option) => (
					<Checkbox
						key={option.value}
						id={option.value}
						label={option.label}
						checked={!!checkedItems[option.value]}
						className={className}
						iconClass={iconClass}
						onChange={() => handleChange(option.value)}
						disabled={option.disabled}
					/>
				))}
			</div>
		</div>
	);
};
CheckboxGroup.propTypes = propTypes;
export default CheckboxGroup;
