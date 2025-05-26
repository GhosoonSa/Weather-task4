import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Guest from "./pages/Guest";
import Navbar from "./component/Navbar";
import LoadingSpinner from "./component/LoadingSpinner";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Guest />} />
        <Route path="/LoadingSpinner" element={<LoadingSpinner />} />
      </Routes>
    </>
  );
}

export default App;
