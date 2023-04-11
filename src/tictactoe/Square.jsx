import React from "react";

export const Square = (props) => {
    const classes = props.className?`${props.className} square`:'square';
    return(
        <div className={classes}>
            <h1>X</h1>
        </div>
    )
}