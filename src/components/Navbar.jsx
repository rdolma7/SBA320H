import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CurrenciesPage from "../pages/currenciespage";

function Navbar() {
  return (
    <>
      
        <ul>
          <li>
            <Link to='/currenciespage'>Currencies Page</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/currenciespage" element={<CurrenciesPage />} />
        </Routes>
      
    </>
  );
}

export default Navbar;
