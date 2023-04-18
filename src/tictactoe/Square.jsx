import React from "react";

export const Square = (props) => {
    const classes = props.className?`${props.className} square`:'square';
    return(
        <div className={classes} onClick={props.onClick}>
            {props.state}
        </div>
    )
}