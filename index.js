const amountEl = document.querySelector("input");
const fromCurrencyEl = document.querySelector(".from select");
const toCurrencyEl = document.querySelector(".to select");
const convertedAmountEl = document.querySelector(".convertedAmount");
const convertBtnEl = document.querySelector(".convertBtn");

async function convertCurrencyFun() {
  convertedAmountEl.innerHTML = "Currency Converting..";
  const url =
    `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency` +
    `?have=${fromCurrencyEl.value}&want=${toCurrencyEl.value}&amount=${amountEl.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5c6f7d32d5mshfca274198509177p10e723jsn0df7c85c9fb9",
      "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    convertedAmountEl.innerText = data.new_amount;
  } catch (e) {
    convertedAmountEl.innerText = "Oops.. Error..!";
  }
}
convertBtnEl.addEventListener("click", () => {
  convertCurrencyFun();
});
