import { useState } from "react";
import CurrenciesPage from "./pages/CurrenciesPage.jsx";
import Form from "./pages/Form.jsx";
import Nav from "./components/Navbar.jsx";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/currencies" element={<CurrenciesPage />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
