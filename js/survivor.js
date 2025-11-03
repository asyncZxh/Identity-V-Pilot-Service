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
    case "tier-1":
      reCreateFromElementsForTier(1);
      reCreateFromElementsForSubTier(3);
      reCreateFromElementsForStar(2);
      break;
    case "tier-2":
      reCreateFromElementsForTier(2);
      reCreateFromElementsForSubTier(4);
      reCreateFromElementsForStar(4);
      break;
    case "tier-3":
      reCreateFromElementsForTier(3);
      reCreateFromElementsForSubTier(5);
      reCreateFromElementsForStar(4);
      break;
    case "tier-4":
      reCreateFromElementsForTier(4);
      reCreateFromElementsForSubTier(5);
      reCreateFromElementsForStar(4);
      break;
    case "tier-5":
      reCreateFromElementsForTier(5);
      reCreateFromElementsForSubTier(5);
      reCreateFromElementsForStar(4);
      break;
    case "tier-6":
      reCreateFromElementsForTier(6);
      reCreateFromElementsForSubTier(5);
      reCreateFromElementsForStar(4);
      break;
    case "tier-7":
      reCreateFromElementsForTier(7);
      reCreateFromElementsForSubTier("champion");
      reCreateFromElementsForStar(24);
      break;
    case "peak-tier":
      reCreateFromElementsForTier(8);
      reCreateFromElementsForSubTier("peak");
      reCreateFromElementsForStar("peak");
      break;
  }
}

function reCreateFromElementsForTier(tier) {
  getTierToSurvivor.innerHTML = "";
  let elements;
  let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
  elements += hiddenValue;
  for (tier; tier <= 8; tier++) {
    if (tier === 8) {
      const createElement = `<option value="peak-tier">Peak Tier - ${
        ranks[ranks.length - 1]
      }</option>`;
      elements += createElement;
    } else {
      const createElement = `<option value="tier-${tier}">Tier ${tier} - ${
        ranks[tier - 1]
      }</option>`;
      elements += createElement;
    }
  }
  getTierToSurvivor.innerHTML = elements;
}

function reCreateFromElementsForSubTier(subTier) {
  if (subTier === "champion" || subTier === "peak") {
    getSubTierFromSurvivor.setAttribute("disabled", "true");
    getSubTierFromSurvivor.style.cursor = "not-allowed";
  } else {
    const getSubTier = () => {
      getSubTierFromSurvivor.innerHTML = "";
      let elements;
      let hiddenValue =
        "<option hidden disabled selected value>&mdash;</option>";
      elements += hiddenValue;
      for (subTier; subTier >= 1; subTier--) {
        const createElement = `<option value="${subTier}">${subTier}</option>`;
        elements += createElement;
      }
      getSubTierFromSurvivor.innerHTML = elements;
      getSubTierFromSurvivor.removeAttribute("disabled");
      getSubTierFromSurvivor.style.cursor = "auto";
    };
    getSubTier();
  }
}

function reCreateFromElementsForStar(star) {
  if (star !== "peak") {
    const getStar = () => {
      getStarsFromSurvivor.innerHTML = "";
      let elements;
      let hiddenValue =
        "<option hidden disabled selected value>&mdash;</option>";
      elements += hiddenValue;

      for (let i = 0; i <= star; i++) {
        const createElement = `<option value="${i}">${i}</option>`;
        elements += createElement;
      }

      const createSelectElement = window.document.createElement("select");
      createSelectElement.setAttribute("id", "survivor-from-star");
      createSelectElement.classList.add("select-from");
      createSelectElement.innerHTML = elements;
      window.document
        .querySelector(".star-container .select-from")
        .replaceWith(createSelectElement);
    };
    getStar();
    return;
  }
  const createInputElement = window.document.createElement("input");
  createInputElement.setAttribute("id", "survivor-from-sub-tier");
  createInputElement.setAttribute("type", "number");
  createInputElement.setAttribute("min", "25");
  createInputElement.value = "25";
  createInputElement.placeholder = "enter star";
  createInputElement.style.height = "2.86rem";
  createInputElement.classList.add("select-from");
  window.document
    .querySelector(".star-container .select-from")
    .replaceWith(createInputElement);
}
