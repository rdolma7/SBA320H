let url =
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=d39a9be0c13741d28839052a910cb9b7";

async function getCurrencies() {

    let result = await fetch(url);
    let currencies = await result.json();

    console.log(currencies);
    let currenciesArray = Object.entries(currencies.rates);
    
    currenciesArray = currenciesArray.slice(0, 100);
    return currenciesArray;
  
}

export default getCurrencies;
