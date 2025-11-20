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
  [75],
  [80],
];

buttonCalculateSurvivor.addEventListener("click", () => {
  const priceRange = getPrice();

  //   if (priceRange) {
  //       for(){
  //         for(){
  //             for(){
  //             }
  //         }
  //       }
  //   }
});

function getPrice() {
  const tierFrom = parseInt(getTierFromSurvivor.value) - 1 || undefined;
  const subTierFrom = parseInt(getSubTierFromSurvivor.value) - 1 || undefined;
  const starFrom = parseInt(getStarsFromSurvivor.value) - 1 || undefined;
  const tierTo = parseInt(getTierToSurvivor.value) - 1 || undefined;
  const subTierTo = parseInt(getSubTierToSurvivor.value) - 1 || undefined;
  const starTo = parseInt(getStarsToSurvivor.value) - 1 || undefined;

  if (getTierFromSurvivor.value !== "7" && getTierToSurvivor.value !== "8") {
    if (
      !tierFrom ||
      !subTierFrom ||
      !starFrom ||
      !tierTo ||
      !subTierTo ||
      !starTo
    ) {
      alert("Missing required fields");
      return undefined;
    }
  } else if (
    getStarsFromSurvivor.value === "7" ||
    getTierToSurvivor.value === "7"
  ) {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
    }
  } else if (
    getTierFromSurvivor.value === "8" &&
    getTierToSurvivor.value === "8"
  ) {
    if (Number(getTierFromSurvivor.value) <= Number(getTierToSurvivor.value)) {
      alert("FROM must be less than TO");
      return undefined;
    }
  }
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
