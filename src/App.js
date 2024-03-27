//import React, { useEffect, useState } from "react";
//import Card from "./components/button/card/Card";
//import CardTailwind from "./components/button/card/CardTailwind";
//import Card2 from "./components/button/card/Card2";
//import Headers from "./components/button/card/Headers";
import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/login/Home";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Login />
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
//<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
