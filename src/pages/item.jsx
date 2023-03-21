import React from "react";

export const Item= (props) => {
    return (
        <div>
            <p> Title: {props.title} </p>
            <p> Description: {props.description}</p>
            <img src = {props.img}/>

        </div>
    );
}