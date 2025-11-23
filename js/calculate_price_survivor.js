import {
  getTierFromSurvivor,
  getSubTierFromSurvivor,
  getStarsFromSurvivor,
  getTierToSurvivor,
  getSubTierToSurvivor,
  getStarsToSurvivor,
  buttonCalculateSurvivor,
} from "./survivor.js";

const survivorPrice = [
  [
    [14, 14, 14],
    [14, 14, 14],
    [14, 14, 14],
  ],
  [
    [20, 20, 20, 20],
    [20, 20, 20, 20],
    [20, 20, 20, 20],
    [20, 20, 20, 20],
  ],
  [
    [30, 30, 30, 30, 30],
    [30, 30, 30, 30, 30],
    [30, 30, 30, 30, 30],
    [30, 30, 30, 30, 30],
    [30, 30, 30, 30, 30],
  ],
  [
    [40, 40, 40, 40, 40],
    [40, 40, 40, 40, 40],
    [40, 40, 40, 40, 40],
    [40, 40, 40, 40, 40],
    [40, 40, 40, 40, 40],
  ],
  [
    [50, 50, 50, 50, 50],
    [50, 50, 50, 50, 50],
    [50, 50, 50, 50, 50],
    [50, 50, 50, 50, 50],
    [50, 50, 50, 50, 50],
  ],
  [
    [65, 65, 65, 65, 65],
    [65, 65, 65, 65, 65],
    [65, 65, 65, 65, 65],
    [65, 65, 65, 65, 65],
    [65, 65, 65, 65, 65],
  ],
  [
    75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,
    75, 75, 75, 75, 75,
  ],
  [80],
];
const totalPriceContainer = window.document.querySelector(
  ".total-price-survivor"
);

let isProcessing = false;
buttonCalculateSurvivor.addEventListener("click", () => {
  if (!isProcessing) {
    isProcessing = true;
    const loading = window.document.createElement("img");
    loading.src = "svgs/idv_loading.svg";
    loading.alt = "loading";
    loading.classList.add("loading");
    totalPriceContainer.appendChild(loading);
    setTimeout(() => {
      const priceRange = getPrice();

      if (
        priceRange &&
        priceRange.subTierFrom !== undefined &&
        priceRange.subTierTo !== undefined
      ) {
        for (let t = priceRange.tierFrom; t <= priceRange.tierTo; t++) {
          for (
            let st = priceRange.subTierFrom;
            st <= priceRange.subTierTo;
            st++
          ) {
            // for(let str = priceRange.starFrom; str <){
            // }
          }
        }
      }

      if (
        priceRange &&
        priceRange.subTierFrom !== undefined &&
        priceRange.subTierTo !== undefined
      ) {
      }
      isProcessing = false;
    }, 2500);
  }
});

function getPrice() {
  let tierFrom = parseInt(getTierFromSurvivor.value) || undefined;
  let subTierFrom = parseInt(getSubTierFromSurvivor.value) || undefined;
  let starFrom = getStarsFromSurvivor.value || undefined;
  let tierTo = parseInt(getTierToSurvivor.value) || undefined;
  let subTierTo = parseInt(getSubTierToSurvivor.value) || undefined;
  let starTo = getStarsToSurvivor.value || undefined;

  if (getTierFromSurvivor.value !== "8" && getTierToSurvivor.value === "8") {
    if (parseInt(getStarsToSurvivor.value) < 25) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => window.alert("Invalid star input"), 50);
      return undefined;
    }
  } else if (
    getTierFromSurvivor.value !== "7" &&
    getTierFromSurvivor.value !== "8"
  ) {
    if (
      !tierFrom ||
      !subTierFrom ||
      !starFrom ||
      !tierTo ||
      !subTierTo ||
      !starTo
    ) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => window.alert("Missing required fields"), 50);
      return undefined;
    }
  } else if (
    getTierFromSurvivor.value !== "7" &&
    getTierFromSurvivor.value !== "8" &&
    (getTierToSurvivor.value === "7" || getTierToSurvivor.value === "8")
  ) {
    if (!tierFrom || !subTierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => window.alert("Missing required fields"), 50);
      return undefined;
    }
  } else if (
    getTierFromSurvivor.value === "8" &&
    getTierToSurvivor.value === "8"
  ) {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => window.alert("Missing required fields"), 50);
      return undefined;
    } else if (parseInt(getStarsFromSurvivor.value) < 25) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => window.alert("Invalid star input"), 50);
      return undefined;
    } else if (
      parseInt(getStarsToSurvivor.value) < parseInt(getStarsFromSurvivor.value)
    ) {
      totalPriceContainer.innerHTML = "";
      setTimeout(
        () => window.alert("Tier: TITAN\nFROM must be less than TO"),
        50
      );
      return undefined;
    } else if (
      parseInt(getStarsToSurvivor.value) == parseInt(getStarsFromSurvivor.value)
    ) {
      totalPriceContainer.innerHTML = "";
      setTimeout(
        () => window.alert("Tier: TITAN\nFROM must not be equal to TO"),
        50
      );
      return undefined;
    }
  } else if (
    getTierFromSurvivor.value === "7" ||
    getTierFromSurvivor.value === "8"
  ) {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => window.alert("Missing required fields"), 50);
      return undefined;
    }
  }

  const modifySubTier = () => {
    if (tierFrom === 1) {
      switch (subTierFrom) {
        case 3:
          subTierFrom = 0;
          break;
        case 2:
          subTierFrom = 1;
          break;
        case 1:
          subTierFrom = 2;
          break;
      }
    } else if (tierFrom === 2) {
      switch (subTierFrom) {
        case 4:
          subTierFrom = 0;
          break;
        case 3:
          subTierFrom = 1;
          break;
        case 2:
          subTierFrom = 2;
          break;
        case 1:
          subTierFrom = 3;
          break;
      }
    } else if (tierFrom !== 7 && tierFrom !== 8) {
      switch (subTierFrom) {
        case 5:
          subTierFrom = 0;
          break;
        case 4:
          subTierFrom = 1;
          break;
        case 3:
          subTierFrom = 2;
          break;
        case 2:
          subTierFrom = 3;
          break;
        case 1:
          subTierFrom = 4;
          break;
      }
    }

    if (tierTo === 1) {
      switch (subTierTo) {
        case 3:
          subTierTo = 0;
          break;
        case 2:
          subTierTo = 1;
          break;
        case 1:
          subTierTo = 2;
          break;
      }
    } else if (tierTo === 2) {
      switch (subTierTo) {
        case 4:
          subTierTo = 0;
          break;
        case 3:
          subTierTo = 1;
          break;
        case 2:
          subTierTo = 2;
          break;
        case 1:
          subTierTo = 3;
          break;
      }
    } else if (tierTo !== 7 && tierTo !== 8) {
      switch (subTierTo) {
        case 5:
          subTierTo = 0;
          break;
        case 4:
          subTierTo = 1;
          break;
        case 3:
          subTierTo = 2;
          break;
        case 2:
          subTierTo = 3;
          break;
        case 1:
          subTierTo = 4;
          break;
      }
    }
  };
  modifySubTier();
  tierFrom--;
  tierTo--;
  starFrom = parseInt(starFrom);
  starTo = parseInt(starTo);

  return {
    From: {
      Tier: tierFrom,
      "Sub-tier": subTierFrom,
      Star: starFrom,
    },
    To: {
      Tier: tierTo,
      "Sub-tier": subTierTo,
      Star: starTo,
    },
  };
}
