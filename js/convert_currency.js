const currencySelectionSurvivor = window.document.querySelector(
  ".select-survivor .currency-container .currency.convert"
);
const currencySelectionHunter = window.document.querySelector(
  ".select-hunter .currency-container .currency.convert"
);
const currencyTextSurvivor = window.document.querySelector(
  ".select-survivor .currency-container .currency-text"
);
const currencyTextHunter = window.document.querySelector(
  ".select-hunter .currency-container .currency-text"
);
const totalPriceContainerSurvivor = window.document.querySelector(
  ".total-price-survivor"
);
const totalPriceContainerHunter = window.document.querySelector(
  ".total-price-hunter"
);
currencySelectionSurvivor.addEventListener("change", () => {
  currencyTextSurvivor.textContent = currencySelectionSurvivor.value;
  totalPriceContainerSurvivor.innerHTML = "";
});
currencySelectionHunter.addEventListener("change", () => {
  currencyTextHunter.textContent = currencySelectionHunter.value;
  totalPriceContainerHunter.innerHTML = "";
});
