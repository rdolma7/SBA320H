import getCurrencies from "../helpers/currencies.js";
import { useEffect, useState } from "react";

function CurrenciesPage() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await getCurrencies();
      setCurrencies(data);
    };
    getData();
  }, []);
  return <>{currencies.map((currency)=>
  <div>
    Currency: {currency[0]} rate: {currency[1]}
  </div>
  )}</>;
}

export default CurrenciesPage;
