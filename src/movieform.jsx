import React from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
    let Navigate = useNavigate();
    const btnFunc = () => {
        Navigate("/", { replace: "true" })
    }
    return (
        <div className="movie-form">
            <h2>Movies form for {props.params().index}</h2>
            <button onClick={() => btnFunc()}>Save</button>
        </div>

    )
}
export default Form