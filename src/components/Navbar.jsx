import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CurrenciesPage from "../pages/CurrenciesPage";

function Navbar() {
  return (
    <>
      <ul>
        <Link to="/currenciespage">Currencies Page</Link>
      </ul>
    </>
  );
}

export default Navbar;
