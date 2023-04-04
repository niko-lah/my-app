import { Outlet, Link } from "react-router-dom";
import React from "react";

export const Router = () => {
    return(
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    <li>
                        <Link to="/buttons">Buttons </Link>
                    </li>
                    <li>
                        <Link to="/counters">Counters </Link>
                    </li>
                    <li>
                        <Link to="/items">Items </Link>
                    </li>
                    <li>
                        <Link to="/list">List </Link>
                    </li>
                    <li>
                        <Link to="/TicTacToe">TicTacToe </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}
