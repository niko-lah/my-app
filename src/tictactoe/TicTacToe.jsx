import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";

export const TicTacToe = () => {
    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board />
        </div>
    );
}