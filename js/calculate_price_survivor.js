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
    [0, 14, 14],
    [14, 14, 14],
    [14, 14, 14],
  ],
  [
    [14, 20, 20, 20],
    [20, 20, 20, 20],
    [20, 20, 20, 20],
    [20, 20, 20, 20],
  ],
  [
    [20, 30, 30, 30, 30],
    [30, 30, 30, 30, 30],
    [30, 30, 30, 30, 30],
    [30, 30, 30, 30, 30],
    [30, 30, 30, 30, 30],
  ],
  [
    [30, 40, 40, 40, 40],
    [40, 40, 40, 40, 40],
    [40, 40, 40, 40, 40],
    [40, 40, 40, 40, 40],
    [40, 40, 40, 40, 40],
  ],
  [
    [40, 50, 50, 50, 50],
    [50, 50, 50, 50, 50],
    [50, 50, 50, 50, 50],
    [50, 50, 50, 50, 50],
    [50, 50, 50, 50, 50],
  ],
  [
    [50, 65, 65, 65, 65],
    [65, 65, 65, 65, 65],
    [65, 65, 65, 65, 65],
    [65, 65, 65, 65, 65],
    [65, 65, 65, 65, 65],
  ],
  [
    65, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
    80, 80, 80, 80, 80,
  ],
  [85],
];
const totalPriceContainer = window.document.querySelector(
  ".total-price-survivor"
);

let isProcessing = false;
buttonCalculateSurvivor.addEventListener("click", () => {
  if (!isProcessing) {
    isProcessing = true;
    totalPriceContainer.innerHTML = "";
    const loading = window.document.createElement("img");
    loading.src = "svgs/idv_loading.svg";
    loading.alt = "loading";
    loading.classList.add("loading");
    totalPriceContainer.appendChild(loading);
    setTimeout(() => {
      const priceRange = getPrice();
      window.console.log(priceRange);
      if (
        priceRange &&
        priceRange.From["Sub-tier"] !== undefined &&
        priceRange.To["Sub-tier"] !== undefined
      ) {
        let price = 0;
        if (
          priceRange.From.Tier === priceRange.To.Tier &&
          priceRange.From["Sub-tier"] === priceRange.To["Sub-tier"]
        ) {
          const start = survivorPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1, priceRange.To.Star + 1);
          start.forEach((e) => (price += e));
        } else if (
          priceRange.From.Tier === priceRange.To.Tier &&
          priceRange.isOneSubtierAhead()
        ) {
          const start = survivorPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1);
          start.forEach((e) => (price += e));
          const end = survivorPrice[priceRange.To.Tier][
            priceRange.To["Sub-tier"]
          ].slice(0, priceRange.To.Star + 1);
          end.forEach((e) => (price += e));
        } else if (
          priceRange.From.Tier === priceRange.To.Tier &&
          (priceRange.isOneSubtierAhead() === false || 0)
        ) {
          const start = survivorPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1);
          start.forEach((e) => (price += e));
          const getMid = () => {
            const array = [];
            for (
              let st = priceRange.From["Sub-tier"] + 1;
              st <= priceRange.To["Sub-tier"] - 1;
              st++
            ) {
              array.push(survivorPrice[priceRange.From.Tier][st].slice());
            }
            return array;
          };
          const mid = getMid();
          mid.forEach((e) => e.forEach((c) => (price += c)));
          const end = survivorPrice[priceRange.To.Tier][
            priceRange.To["Sub-tier"]
          ].slice(0, priceRange.To.Star + 1);
          end.forEach((e) => (price += e));

          console.log(price);
        }
        for (let t = priceRange.From.Tier; t <= priceRange.To.Tier; t++) {
          for (
            let st = priceRange.From["Sub-tier"];
            st <= priceRange.To["Sub-tier"];
            st++
          ) {}
        }
      } else if (
        priceRange &&
        priceRange.From["Sub-tier"] !== undefined &&
        priceRange.To["Sub-tier"] === undefined
      ) {
      } else if (
        priceRange &&
        priceRange.From["Sub-tier"] === undefined &&
        priceRange.To["Sub-tier"] === undefined
      ) {
      }
      isProcessing = false;
    }, 2300);
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
      setTimeout(() => {
        window.alert("Invalid star input");
        return undefined;
      }, 50);
    }
  } else if (
    getTierFromSurvivor.value !== "7" &&
    getTierFromSurvivor.value !== "8" &&
    getTierToSurvivor.value !== "7" &&
    getTierToSurvivor.value !== "8"
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
      setTimeout(() => {
        window.alert("Missing required fields");
        return undefined;
      }, 50);
    }
  } else if (
    getTierFromSurvivor.value !== "7" &&
    getTierFromSurvivor.value !== "8" &&
    (getTierToSurvivor.value === "7" || getTierToSurvivor.value === "8")
  ) {
    if (!tierFrom || !subTierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Missing required fields");
        return undefined;
      }, 50);
    }
  } else if (
    getTierFromSurvivor.value === "8" &&
    getTierToSurvivor.value === "8"
  ) {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Missing required fields");
        return undefined;
      }, 50);
    } else if (parseInt(getStarsFromSurvivor.value) < 25) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Invalid star input");
        return undefined;
      }, 50);
    } else if (
      parseInt(getStarsToSurvivor.value) < parseInt(getStarsFromSurvivor.value)
    ) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Tier: TITAN\nFROM must be less than TO");
        return undefined;
      }, 50);
    } else if (
      parseInt(getStarsToSurvivor.value) == parseInt(getStarsFromSurvivor.value)
    ) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Tier: TITAN\nFROM must not be equal to TO");
        return undefined;
      }, 50);
    }
  } else if (
    getTierFromSurvivor.value === "7" ||
    getTierFromSurvivor.value === "8"
  ) {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Missing required fields");
        return undefined;
      }, 50);
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
    isOneSubtierAhead: () => {
      if (getTierFromSurvivor.value === getTierToSurvivor.value)
        return subTierFrom + 1 === subTierTo ? true : false;
      return 0;
    },
  };
}
