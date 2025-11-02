const getTierFromSurvivor = window.document.querySelector(
  ".select-survivor .tier-container .select-from"
);
const getSubTierFromSurvivor = window.document.querySelector(
  ".select-survivor .sub-tier-container .select-from"
);
const getStarsFromSurvivor = window.document.querySelector(
  ".select-survivor .star-container .select-from"
);
const getTierToSurvivor = window.document.querySelector(
  ".select-survivor .tier-container .select-to"
);
const getSubTierToSurvivor = window.document.querySelector(
  ".select-survivor .sub-tier-container .select-to"
);
const getStarsToSurvivor = window.document.querySelector(
  ".select-survivor .star-container .select-to"
);
const buttonCalculate = window.document.querySelector(
  ".select-survivor .calculate-currency-container .total-button"
);

const prices = [
  { tier: "tier 1", price: 14 },
  { tier: "tier 2", price: 20 },
  { tier: "tier 3", price: 45 },
  { tier: "tier 4", price: 60 },
  { tier: "tier 5", price: 70 },
  { tier: "tier 6", price: 80 },
  { tier: "tier 7", price: 90 },
  { tier: "tier 8", price: 100 },
];

getTierFromSurvivor.addEventListener("change", () => {
  switch (getTierFromSurvivor.value) {
    case "tier-1":
      if (getSubTierFromSurvivor.value === "3") {
        const createElement = `<option value="2">2</option><option value="3">3</option>`;
        getSubTierToSurvivor.innerHTML = createElement;
      }
      break;
    case "tier-2":
      break;
    case "tier-3":
      break;
    case "tier-4":
      break;
    case "tier-5":
      break;
    case "tier-6":
      break;
    case "tier-7":
      break;
    case "peak-tier":
      break;
  }
});
