import React from "react";
import Joi from "joi-browser"
import Input from "./input";
import Select from "./select";


class FormComponent extends React.Component {
    state = {
        data: {},
        errors: {}
    }
    validate = () => {
        let { data } = this.state
        const result = Joi.validate(data, this.schema, { abortEarly: false });
        if (!result.error) return null;
        const error = {};
        for (let item of result.error.details)
            error[item.path[0]] = item.message;
        if (Object.entries(error).length === 1) return null;
        return error;
    }
    validateProperty = ({ target }) => {
        if (!target.name) target.name = "genreId"
        const obj = { [target.name]: target.value };
        const schema = { [target.name]: this.schema[target.name] }
        const result = Joi.validate(obj, schema);
        return result.error ? result.error.details[0].message : null;
    }
    handleSubmit = e => {
        e.preventDefault();
        let errors = this.validate();
        this.setState({ errors: errors || {} })
        if (errors) return
        this.doSubmit()
    }
    handleChange = e => {
        let errors = { ...this.state.errors };
        let errorMessage = this.validateProperty(e)
        if (errorMessage) errors[e.target.name] = errorMessage;
        else delete errors[e.target.name];

        const data = { ...this.state.data }
        data[e.target.name] = e.target.value;
        this.setState({ data, errors })
    }
    renderBtn = name => {
        return <button type="submit" disabled={this.validate()} className="btn btn-primary">{name}</button>
    }
    renderInput = (title, name, type, value) => {
        const { errors } = this.state
        return (
            <Input
                title={title}
                name={name}
                type={type}
                value={value}
                handleChange={this.handleChange}
                errors={errors}
            />

        )
    }
    renderSelect = (title, name, options) => {
        const { error, data } = this.state
        return (
            <Select
                title={title}
                value={data[name]}
                options={options}
                error={error}
                handleChange={this.handleChange}
            />
        )
    }

}

export default FormComponent;