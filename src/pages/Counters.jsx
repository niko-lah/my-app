import React from "react";
import { useState, useEffect } from "react";

export const Counter = () => {
   const [count, setCount] = useState(0)
   const [count2, setCount2] = useState(0)

   useEffect(() => {
      setTimeout(function (){
        setCount(count +1)
      }, 1000)
   });

   useEffect(() => {
        setCount2(count2 +1)
      }, [count]);

   return(
    <div>
        <h1>I've rendered {count} times!</h1>
        <h1>I've rendered {count2} times!</h1>
    </div>
   ) 
}