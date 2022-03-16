import React from "react"

const FullTable = (props) => {
    return (
        <table className="table">
            {props.children}
        </table>
    )
}

export default FullTable