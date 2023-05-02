import React from "react";

export const Scoreboard = ({ scores}) => {
    return(
        <div class="scoreboard">
            <span>X - {scores.xScore}  </span>
            <span>O - {scores.oScore}  </span>
        </div>
    )
}