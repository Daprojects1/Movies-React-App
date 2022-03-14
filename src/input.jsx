import React from "react";

const Input = ({ title, name, type, value, handleChange, errors }) => {
    let errorCheck = (errors) => {
        if (Object.keys(errors) === 0) return;
        if (errors.username && name === "username") return <p className="red">{errors.username}</p>
        if (errors.password && name === "password") return <p className="red">{errors.password}</p>
        if (errors.name && name === "name") return <p className="red">{errors.name}</p>
        if (errors.title && name === "title") return <p className="red">{errors.title}</p>
        if (errors.genre && name === "genre") return <p className="red">{errors.genre}</p>
        if (errors.numberInStock && name === "numberInStock") return <p className="red">{errors.numberInStock}</p>
        if (errors.dailyRentalRate && name === "dailyRentalRate") return <p className="red">{errors.dailyRentalRate}</p>
    }
    return (
        <div className="form-group">
            <label htmlFor={name}>{title}</label>
            <input type={type} name={name} value={value} onChange={handleChange} className="form-control" id={name} aria-describedby="emailHelp" placeholder={title + ` Here`} />
            {errorCheck(errors)}
        </div>
    )
}

export default Input;