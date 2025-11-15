export const getTierFromHunter = window.document.querySelector(
  ".select-hunter .tier-container .select-from"
);
export const getSubTierFromHunter = window.document.querySelector(
  ".select-hunter .sub-tier-container .select-from"
);
export let getStarsFromHunter = window.document.querySelector(
  ".select-hunter .star-container .select-from"
);

export const getTierToHunter = window.document.querySelector(
  ".select-hunter .tier-container .select-to"
);
export const getSubTierToHunter = window.document.querySelector(
  ".select-hunter .sub-tier-container .select-to"
);
export let getStarsToHunter = window.document.querySelector(
  ".select-hunter .star-container .select-to"
);
export const buttonCalculateHunter = window.document.querySelector(
  ".select-hunter .calculate-currency-container .total-button"
);

const prices = [
  { tier: "tier 1", price: 10 },
  { tier: "tier 2", price: 20 },
  { tier: "tier 3", price: 30 },
  { tier: "tier 4", price: 40 },
  { tier: "tier 5", price: 60 },
  { tier: "tier 6", price: 75 },
  { tier: "tier 7", price: 85 },
  { tier: "tier 8", price: 100 },
];
