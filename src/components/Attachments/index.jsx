import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ClearIcon from '@mui/icons-material/Clear';
import style from "../../assets/css/Attachments/index.module.css";

const propTypes = {
	label: PropTypes.string,
	files: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	accept: PropTypes.string,
	capture: PropTypes.oneOf(['user', 'environment']),
	multiple: PropTypes.bool,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	name: PropTypes.string,
	buttonText: PropTypes.string,
	buttonClassName: PropTypes.string,
	fileItemClassName: PropTypes.string,
	removeButtonClassName: PropTypes.string,
	labelClassName: PropTypes.string,
};

const Attachments = ({
	label,
	files,
	onSelect,
	onRemove,
	id,
	accept,
	capture,
	multiple,
	disabled,
	required,
	name,
	buttonText,
	buttonClassName,
	fileItemClassName,
	removeButtonClassName,
	labelClassName
}) => {
	const [selectedFiles, setSelectedFiles] = useState(files);

	// selected files will be passed to the callback function(onSelect)
	const handleFileChange = (event) => {
		const files = Array.from(event.target.files);
		// setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
		onSelect(files);
	};

	// pass the file to callback function (onRemove)
	const handleRemove = (file) => {
		onRemove(file);
	};

	// remain in sync with data
	useEffect(() => {
		setSelectedFiles(files);
	}, [files]);

	return (
		<>
			<div className="mb-2.5">
				{label && <label className={labelClassName || style.attachmentLabel}>{label}</label>}
				<div className="input-outer">
					<Button
						component="label"
						variant="contained"
						startIcon={<CloudUploadIcon />}
						disabled={disabled}
						className={buttonClassName || '!bg-primary !rounded-sm !capitalize'}
					>
						{buttonText || 'Upload file'}
						<input
							id={id}
							type="file"
							onChange={handleFileChange}
							multiple={multiple}
							accept={accept}
							capture={capture}
							required={required}
							name={name}
							className={style.visuallyHidden}
						/>
					</Button>
				</div>
				{selectedFiles.length > 0 && (
					<div>
						{selectedFiles.map((file, index) => (
							<div
								key={index}
								className={fileItemClassName || 'mt-[5px] flex items-center justify-between border border-solid border-[#eee] bg-light max-w-[500px]'}
							>
								<div className="px-2 py-0.5">{file.name}</div>
								<div
									data-testid="cancelButton"
									className={removeButtonClassName || 'flex h-[28px] w-[28px] cursor-pointer items-center justify-center bg-danger text-white'}
									onClick={() => handleRemove(file)}
								>
									<ClearIcon />
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

Attachments.propTypes = propTypes;
export default Attachments;
