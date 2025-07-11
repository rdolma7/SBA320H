import { useState } from "react";
import Currencies from "./pages/Currencies.jsx";
import Form from "./pages/Form.jsx";
import Nav from "./components/Navbar.jsx";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
