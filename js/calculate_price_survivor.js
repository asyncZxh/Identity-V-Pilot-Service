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

let isProcessing = false;
buttonCalculateSurvivor.addEventListener("click", () => {
  if (!isProcessing) {
    isProcessing = true;
    setTimeout(() => {
      const priceRange = getPrice();

      //   if (priceRange) {
      //       for(){
      //         for(){
      //             for(){
      //             }
      //         }
      //       }
      //   }
      window.console.log(priceRange);
      isProcessing = false;
    }, 2000);
  }
});

function getPrice() {
  const tierFrom = parseInt(getTierFromSurvivor.value) || undefined;
  const subTierFrom = parseInt(getSubTierFromSurvivor.value) || undefined;
  if (getTierFromSurvivor.value === "8") {
  }
  const starFrom = parseInt(getStarsFromSurvivor.value);
  const tierTo = parseInt(getTierToSurvivor.value) | undefined;
  const subTierTo = parseInt(getSubTierToSurvivor.value) || undefined;
  const starTo = parseInt(getStarsToSurvivor.value);

  if (getTierFromSurvivor.value !== "8" && getTierToSurvivor.value === "8") {
    if (parseInt(getStarsToSurvivor.value) < 25) {
      window.alert("Invalid star input");
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
      window.alert("Missing required fields");
      return undefined;
    }
  } else if (
    getTierFromSurvivor.value !== "7" &&
    getTierFromSurvivor.value !== "8" &&
    (getTierToSurvivor.value === "7" || getTierToSurvivor.value === "8")
  ) {
    if (!tierFrom || !subTierFrom || !starFrom || !tierTo || !starTo) {
      window.alert("Missing required fields");
      return undefined;
    }
  } else if (
    getTierFromSurvivor.value === "8" &&
    getTierToSurvivor.value === "8"
  ) {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
      window.alert("Missing required fields");
      return undefined;
    } else if (parseInt(getStarsFromSurvivor.value) < 25) {
      window.alert("Invalid star input");
      return undefined;
    } else if (
      parseInt(getStarsToSurvivor.value) < parseInt(getStarsFromSurvivor.value)
    ) {
      alert("Tier: TITAN\nFROM must be less than TO");
      return undefined;
    } else if (
      parseInt(getStarsToSurvivor.value) == parseInt(getStarsFromSurvivor.value)
    ) {
      alert("Tier: TITAN\nFROM must not be equal to TO");
      return undefined;
    }
    window.console.log("eee");
  } else if (
    getTierFromSurvivor.value === "7" ||
    getTierFromSurvivor.value === "8"
  ) {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
      window.alert("Missing required fields");
      return undefined;
    }
  }

  return {
    From: {
      Tier: tierFrom - 1,
      "Sub-tier": subTierFrom - 1,
      Star: starFrom,
    },
    To: {
      Tier: tierTo - 1,
      "Sub-tier": subTierTo - 1,
      Star: starTo,
    },
  };
}
