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
const ranks = [
  "Bee",
  "Hound",
  "Elk",
  "Mammoth",
  "Griffin",
  "Alicorn",
  "Champion",
  "Titan(Hercules)",
];
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
  checkTier();
});

function checkTier() {
  switch (getTierFromSurvivor.value) {
    case "tier-2":
      getTierToSurvivor.innerHTML = "";
      let elements = "<option hidden disabled selected value>&mdash;</option>";
      for (let i = 2; i <= 8; i++) {
        if (i == 8) {
          const createElement = `<option value="peak-tier">Peak Tier - ${
            ranks[ranks.length - 1]
          }}</option>`;
          elements += createElement;
        } else {
          const createElement = `<option value="tier-${i}">Tier ${i} - ${
            ranks[i - 1]
          }</option>`;
          elements += createElement;
        }
      }
      getTierToSurvivor.innerHTML = elements;
      break;
  }
}
