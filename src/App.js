import React from "react";
import { Message } from "./pages/Messages";
import { Buttons } from "./pages/Buttons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./pages/Router";
import { Counter } from "./pages/Counters";
import { Items } from "./pages/items";
import { List } from "./pages/List";
import { TicTacToe } from "./tictactoe/TicTacToe"

function App() {
  return (
    <div>
      <style>
        {`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 50px;
        }
        .navigation {
          background-color: pink;
          padding: 10px;
          margin-bottom: 20px;
        }
        .navigation ul {
          list-style: none;
          padding: 0px;
          margin-bottom: 0px;
        }
        .navigation li {
          display: inline-block;
          margin-right: 10px;
        }
        .content {
          background-color: #fff;
          padding: 20px;
          border: 1px solid #ccc;
        }
        `}
      </style>
      <div className="container">
        <div className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Buttons">Buttons</a></li>
            <li><a href="/Counters">Counters</a></li>
            <li><a href="/Items">Items</a></li>
            <li><a href="/List">List</a></li>
            <li><a href="/TicTacToe">TicTacToe</a></li>
          </ul>
        </div>
      </div>
      <div className="content">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Router />}>
                <Route index element={<Message />} />
                <Route path="Buttons" element={<Buttons />} />
                <Route path="Counters" element={<Counter />} />
                <Route path="Items" element={<Items />} />
                <Route path="List" element={<List />} />
                <Route path="TicTacToe" element={<TicTacToe />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
