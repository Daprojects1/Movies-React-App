import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Likes = ({ click, liked }) => {
    let classes = ""
    if (liked === true) classes += "bgColor"
    return (
        <div>
            <FontAwesomeIcon icon={faHeart} className={`icons ${classes} clickable`} onClick={click}></FontAwesomeIcon>
        </div>
    )
}

export default Likes;



