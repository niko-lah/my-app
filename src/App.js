import React from "react";
import { Message } from "./pages/Messages";
import { Buttons } from "./pages/Buttons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./pages/Router";
import { Counter } from "./pages/Counters";
import { Items } from "./pages/items";
import { List } from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Router />}>
            <Route index element={<Message />} />
            <Route path="Buttons" element={<Buttons />} />
            <Route path="Counters" element={<Counter />} />
            <Route path="Items" element={<Items />} />
            <Route path="List" element={<List />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
