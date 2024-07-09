
import React, { useRef,} from 'react'
import style from "../../assets/css/TextBox/index.module.css"
const TextBox = (
    {
        id,
        labelName,
        value,
        onChange,
        placeholder,
        type,
        readOnly,
        error,
        success,
        disable,
        steps,
        min,
        max,
        onClick,
        onFocus,
        onBlur,
        autoFocus,
        name,
        ...props
    }
) => {
    const ref = useRef()
    const HandleChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
            <div className={`mb-2.5`}>
                {labelName && (
                    <label htmlFor={id} className={style.inputLabel}>
                        {labelName}
                    </label>
                )}
                <div className={``}>
                    <input
                        spellCheck="false"
                        id={id}
                        name={name}
                        ref={ref}
                        type={type}
                        placeholder={placeholder}
                        className={style.formControl}
                        onChange={HandleChange}
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
                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>}
                </div>
            </div>
        </>
    )
}
export default TextBox