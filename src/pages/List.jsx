import React from "react";
import { useState } from "react";

export const List = () =>{
    const [content, setContent] = useState([]);
    const [InputValue, setInputValue] = useState("");
    return (
        <div>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Type here..."
                        value={InputValue}
                        required
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )

}