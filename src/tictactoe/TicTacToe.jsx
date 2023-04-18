import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react";

export const TicTacToe = () => {
    const initialBoard=['','','','','','','','',''];
    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXturn] = useState(true)

    const onSquareClick = (index) => {
        let strings = Array.from(gameState)
        if (strings[index] !== ''){
            return;
        }
        strings[index] = isXTurn ? 'x' : 'o';
        setGameState(strings);
        setIsXturn(!isXTurn)
    }

    return (
        <div>
            <div className="game">
                <h1>Tic-Tac-Toe</h1>
                <Board gameState={gameState} onSquareClick={onSquareClick}/>
            </div>
        </div>
    );
}