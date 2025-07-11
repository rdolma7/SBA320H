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
  return (
    <div className="currency">
      <table className="table">
        <thead>
          <tr>
          <th>Currency</th>
          <th>Rate </th>
        </tr>
        </thead>
      {currencies.map((currency) => (
        <tr>
          <td>{currency[0]}</td>
          <td>{Number(currency[1]).toFixed(2)} </td>
        </tr>
      ))}
      </table>
    </div>
  );
}

export default CurrenciesPage;
