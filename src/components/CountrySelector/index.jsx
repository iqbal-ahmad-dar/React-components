import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { countriesList } from './countriesList';
import style from '../../assets/css/CountrySelector/index.module.css';
const propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func,
	defaultCountry: PropTypes.object,
};
const CountrySelector = ({ label, onChange, defaultCountry }) => {
	const [countries, setCountries] = useState(countriesList);
	const defaultCountryIndex = countries.findIndex(
		(country) =>
			country?.alpha2?.toLowerCase() ===
			defaultCountry?.alpha2?.toLowerCase()
	);
	const [selectedCountry, setSelectedCountry] = useState(
		defaultCountryIndex !== -1
			? countries[defaultCountryIndex]
			: countries[103]
	);
	const [filterText, setFilterText] = useState('');
	const [focus, setFocus] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const divRef = useRef(null);
	const closeRef = useRef(null);
	const handleContentChange = (event) => {
		setFilterText(event.target.innerText);
	};
	const toggleDropdown = () => {
		setShowDropdown((prev) => !prev);
	};

	const handleCountryClick = (country) => {
		let newCountry = {
			country: country.name,
			flag: country.alpha2,
			alpha2: country.alpha2,
		};
		setSelectedCountry(country);
		onChange(newCountry);
		setFocus(true);
		setFilterText('');
		setShowDropdown(false);
	};

	useEffect(() => {
		onChange(selectedCountry);
		const handleClickOutside = (event) => {
			if (closeRef.current && !closeRef.current.contains(event.target)) {
				setShowDropdown(false);
				setFocus(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="relative mb-2.5">
			{label && <div className={style.label}>{label}</div>}
			<div ref={closeRef} style={{ position: 'relative' }}>
				<div
					className={`${style.formControl} ${focus ? style.focusedBorder : ''}`}
					onClick={toggleDropdown}
					tabIndex={0}
				>
					<div className="relative flex w-full items-center gap-1.5 h-full">
						<div className={style.flagContainer}>
							<img
								src={require(`./images/${selectedCountry.alpha2}.png`)}
								alt="img"
								className={style.flagImage}
							/>
						</div>
						<div className="flex w-full items-center focus:border-none focus:outline-none">
							<div
								className="w-full focus:border-none focus:outline-none"
								contentEditable={true}
								ref={divRef}
								onInput={handleContentChange}
								suppressContentEditableWarning={true}
							>
								{selectedCountry.name}
							</div>
							<ExpandMoreIcon className={style.expandIcon} />
						</div>
					</div>
				</div>
				{showDropdown && (
					<div className={style.dropdownCard}>
						{countries
							.filter((country) =>
								country.name
									.toLowerCase()
									.includes(filterText.toLowerCase())
							)
							.map((country, index) => (
								<div
									key={index}
									onClick={() => handleCountryClick(country)}
									className={style.dropdownItem}
								>
									<div className="flex items-center gap-1.5">
										<div className={style.dropdownFlagContainer}>
											<img
												src={require(`./images/${country.alpha2}.png`)}
												alt={country.country}
												className={style.dropdownFlagImage}
											/>
										</div>
										<span className={style.dropdownCountryName}>
											{country.name}
										</span>
									</div>
								</div>
							))}
					</div>
				)}
			</div>
		</div>
	);
};

CountrySelector.propTypes = propTypes;

export default CountrySelector;
