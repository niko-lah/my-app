import React from "react";
import { useState } from "react";

export const List = () =>{
    const [content, setContent] = useState([])
    const [InputValue, setInputValue] = useState("");

    const removeHandler = (removeIndex) => {
        const removeItem = content.filter((item,index) => {
            return removeIndex!== index;
        });
        setContent(removeItem);
    }
    function clearList(){
        setContent([]);
    }

    return (
        <div>
            <div>
                <form onSubmit={(event)=> {
                    event.preventDefault()
                    const temp = [InputValue, ...content];
                    setContent(temp);
                    setInputValue('')
                }}>
                    <input
                        type="text"
                        placeholder="Type here..."
                        value={InputValue}
                        onChange={e=> setInputValue(e.target.value)}
                        required
                    />
                    <input type="submit" value="Submit"/>
                {
                    content.map((item, index) => (
                        <u1>
                            <li>
                                <h2 key={index}>{item}</h2>
                                <button onClick={() => removeHandler(index)} type="button">Remove</button>
                            </li>
                        </u1>

                    ) 
                )}
                </form>
                <button onClick={clearList}>Clear List</button>
            </div>
        </div>
    )

}