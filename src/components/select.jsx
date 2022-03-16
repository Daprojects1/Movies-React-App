import React from "react";


const Select = ({ title, name, options, value, error, handleChange }) => {
    return (
        <div className="options-div">
            <label htmlFor={title}>{title}</label>
            <select onChange={handleChange} name={name} value={value} id={title}>
                <option value="" />
                {options.map(option => <option key={option.name} name={name} value={option._id} >{option.name}</option>)}
            </select>
            {error && <p className="red">{error}</p>}
        </div>

    )
}

export default Select