import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react";
import { useEffect } from "react";

export const TicTacToe = () => {
    const initialBoard=['','','','','','','','',''];
    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXturn] = useState(true);
    const [status, setStatus] = useState('');

    const onSquareClick = (index) => {
        let strings = Array.from(gameState)
        if (strings[index] !== ''){
            return;
        }
        strings[index] = isXTurn ? 'x' : 'o';
        setGameState(strings);
        setIsXturn(!isXTurn)
    }
    useEffect(() => {
        const winner = checkWinner();
        if (winner){
            setStatus(`Winner: ${winner}`)
        }
    })

    const checkWinner = () => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i=0; i<lines.length; i++) {
            const [a,b,c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]
            }
        }
        return null;
    }

    return (
        <div>
            <div className="game">
                <h1>Tic-Tac-Toe</h1>
                <Board gameState={gameState} onSquareClick={onSquareClick}/>

            </div>
            {status}
        </div>
    );
}