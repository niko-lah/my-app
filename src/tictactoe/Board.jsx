import React from "react";
import { Square } from "./Square";

export const Board = ({ gameState, onSquareClick }) => {
    return(
        <div>
            <div className="row">
                <Square
                    className="b-bottom-r"
                    state={gameState[0]}
                    onClick={() => onSquareClick[0]}
                />
                <Square
                    className="b-bottom-r"
                    state={gameState[1]}
                    onClick={() => onSquareClick[1]}
                />
                <Square
                    className="b-bottom"
                    state={gameState[2]}
                    onClick={() => onSquareClick[2]}
                />
            </div>
            <div className="row">
                <Square
                    className="b-bottom-r"
                    state={gameState[3]}
                    onClick={() => onSquareClick[3]}
                />
                <Square
                    className="b-bottom-r"
                    state={gameState[4]}
                    onClick={() => onSquareClick[4]}
                />
                <Square
                    className="b-bottom"
                    state={gameState[5]}
                    onClick={() => onSquareClick[5]}
                />
            </div>
            <div className="row">
                <Square
                    className="b-right"
                    state={gameState[6]}
                    onClick={() => onSquareClick[6]}
                />
                <Square
                    className="b-right"
                    state={gameState[7]}
                    onClick={() => onSquareClick[7]}
                />
                <Square
                    state={gameState[8]}
                    onClick={() => onSquareClick[8]}
                />
            </div>
        </div>
    )
}