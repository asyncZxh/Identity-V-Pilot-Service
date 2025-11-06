const getTierFromSurvivor = window.document.querySelector(
  ".select-survivor .tier-container .select-from"
);
const getSubTierFromSurvivor = window.document.querySelector(
  ".select-survivor .sub-tier-container .select-from"
);
let getStarsFromSurvivor = window.document.querySelector(
  ".select-survivor .star-container .select-from"
);
const getTierToSurvivor = window.document.querySelector(
  ".select-survivor .tier-container .select-to"
);
const getSubTierToSurvivor = window.document.querySelector(
  ".select-survivor .sub-tier-container .select-to"
);
let getStarsToSurvivor = window.document.querySelector(
  ".select-survivor .star-container .select-to"
);
const buttonCalculateSurvivor = window.document.querySelector(
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

getTierFromSurvivor.addEventListener("change", () => {
  updateTierFrom(); //Tier on To included
  window.console.log("configure tier(from)");
});

function updateTierFrom() {
  switch (getTierFromSurvivor.value) {
    case "tier-1":
      updateTierOptionsFrom(1);
      updateSubTierOptionsFrom(3);
      updateStarOptionsFrom(2);
      break;
    case "tier-2":
      updateTierOptionsFrom(2);
      updateSubTierOptionsFrom(4);
      updateStarOptionsFrom(3);
      break;
    case "tier-3":
      updateTierOptionsFrom(3);
      updateSubTierOptionsFrom(5);
      updateStarOptionsFrom(4);
      break;
    case "tier-4":
      updateTierOptionsFrom(4);
      updateSubTierOptionsFrom(5);
      updateStarOptionsFrom(4);
      break;
    case "tier-5":
      updateTierOptionsFrom(5);
      updateSubTierOptionsFrom(5);
      updateStarOptionsFrom(4);
      break;
    case "tier-6":
      updateTierOptionsFrom(6);
      updateSubTierOptionsFrom(5);
      updateStarOptionsFrom(4);
      break;
    case "tier-7":
      updateTierOptionsFrom(7);
      updateSubTierOptionsFrom("champion");
      updateStarOptionsFrom(24);
      break;
    case "peak-tier":
      updateTierOptionsFrom(8);
      updateSubTierOptionsFrom("peak");
      updateStarOptionsFrom("peak");
      break;
  }
}

function updateTierOptionsFrom(tier) {
  getTierToSurvivor.innerHTML = "";
  let elements = "";
  let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
  elements += hiddenValue;
  for (let i = tier; i <= 8; i++) {
    if (i === 8) {
      const createOptionElement = `<option value="peak-tier">Peak Tier - ${
        ranks[ranks.length - 1]
      }</option>`;
      elements += createOptionElement;
    } else {
      const createOptionElement = `<option value="tier-${i}">Tier ${i} - ${
        ranks[i - 1]
      }</option>`;
      elements += createOptionElement;
    }
  }
  getTierToSurvivor.innerHTML = elements;
  clearTo();
}

function updateSubTierOptionsFrom(subTier) {
  if (subTier === "champion" || subTier === "peak") {
    getSubTierFromSurvivor.setAttribute("disabled", "true");
    getSubTierFromSurvivor.style.cursor = "not-allowed";
    getSubTierFromSurvivor.value = "";
  } else {
    const getSubTier = () => {
      getSubTierFromSurvivor.innerHTML = "";
      let elements = "";
      let hiddenValue =
        "<option hidden disabled selected value>&mdash;</option>";
      elements += hiddenValue;
      for (let i = subTier; i >= 1; i--) {
        const createOptionElement = `<option value="${i}">${i}</option>`;
        elements += createOptionElement;
      }
      getSubTierFromSurvivor.innerHTML = elements;
      getSubTierFromSurvivor.removeAttribute("disabled");
      getSubTierFromSurvivor.style.cursor = "auto";
      clearTo();
    };
    getSubTier();
  }
}

function updateStarOptionsFrom(star) {
  if (star !== "peak") {
    const getStar = () => {
      let elements = "";
      let hiddenValue =
        "<option hidden disabled selected value>&mdash;</option>";
      elements += hiddenValue;
      for (let i = 0; i <= star; i++) {
        const createOptionElement = `<option value="${i}">${i}</option>`;
        elements += createOptionElement;
      }

      const createSelectElement = window.document.createElement("select");
      createSelectElement.setAttribute("id", "survivor-from-star");
      createSelectElement.classList.add("select-from");
      createSelectElement.innerHTML = elements;
      createSelectElement.value = "";
      getStarsFromSurvivor = window.document.querySelector(
        ".select-survivor .star-container .select-from"
      );
      getStarsFromSurvivor.replaceWith(createSelectElement);
      clearTo();
    };
    getStar();
  } else {
    {
      const createInputElement = window.document.createElement("input");
      createInputElement.setAttribute("id", "survivor-from-star");
      createInputElement.setAttribute("type", "number");
      createInputElement.setAttribute("min", "25");
      createInputElement.value = "25";
      createInputElement.placeholder = "enter star";
      createInputElement.classList.add("select-from");
      getStarsFromSurvivor = window.document.querySelector(
        ".select-survivor .star-container .select-from"
      );
      getStarsFromSurvivor.replaceWith(createInputElement);
      clearTo();
    }
  }
}

getSubTierFromSurvivor.addEventListener("change", () => clearTo());

// function checkStarsTo() {
//   console.log("1");
//   if (getTierFromSurvivor.value === "tier-1") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         updateStarOptionsTo(0);
//         break;
//       case "1":
//         updateStarOptionsTo(1);
//         break;
//       case "2":
//         updateStarOptionsTo(2);
//         break;
//     }
//   } else if (getTierFromSurvivor.value === "tier-2") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         updateStarOptionsTo(0);
//         break;
//       case "1":
//         updateStarOptionsTo(1);
//         break;
//       case "2":
//         updateStarOptionsTo(2);
//         break;
//       case "3":
//         updateStarOptionsTo(3);
//         break;
//     }
//   } else if (getTierFromSurvivor.value === "tier-3") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         updateStarOptionsTo(0);
//         break;
//       case "1":
//         updateStarOptionsTo(1);
//         break;
//       case "2":
//         updateStarOptionsTo(2);
//         break;
//       case "3":
//         updateStarOptionsTo(3);
//         break;
//       case "4":
//         updateStarOptionsTo(4);
//         break;
//     }
//   } else if (getTierFromSurvivor.value === "tier-4") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         updateStarOptionsTo(0);
//         break;
//       case "1":
//         updateStarOptionsTo(1);
//         break;
//       case "2":
//         updateStarOptionsTo(2);
//         break;
//       case "3":
//         updateStarOptionsTo(3);
//         break;
//       case "4":
//         updateStarOptionsTo(4);
//         break;
//     }
//   } else if (getTierFromSurvivor.value === "tier-5") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         updateStarOptionsTo(0);
//         break;
//       case "1":
//         updateStarOptionsTo(1);
//         break;
//       case "2":
//         updateStarOptionsTo(2);
//         break;
//       case "3":
//         updateStarOptionsTo(3);
//         break;
//       case "4":
//         updateStarOptionsTo(4);
//         break;
//     }
//   } else if (getTierFromSurvivor.value === "tier-6") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         updateStarOptionsTo(0);
//         break;
//       case "1":
//         updateStarOptionsTo(1);
//         break;
//       case "2":
//         updateStarOptionsTo(2);
//         break;
//       case "3":
//         updateStarOptionsTo(3);
//         break;
//       case "4":
//         updateStarOptionsTo(4);
//         break;
//     }
//   } else if (getTierFromSurvivor.value === "tier-7") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         updateStarOptionsTo(0);
//         break;
//       case "1":
//         updateStarOptionsTo(1);
//         break;
//       case "2":
//         updateStarOptionsTo(2);
//         break;
//       case "3":
//         updateStarOptionsTo(3);
//         break;
//       case "4":
//         updateStarOptionsTo(4);
//         break;
//       case "5":
//         updateStarOptionsTo(5);
//         break;
//       case "6":
//         updateStarOptionsTo(6);
//         break;
//       case "7":
//         updateStarOptionsTo(7);
//         break;
//       case "8":
//         updateStarOptionsTo(8);
//         break;
//       case "9":
//         updateStarOptionsTo(9);
//         break;
//       case "10":
//         updateStarOptionsTo(10);
//         break;
//       case "11":
//         updateStarOptionsTo(11);
//         break;
//       case "12":
//         updateStarOptionsTo(12);
//         break;
//       case "13":
//         updateStarOptionsTo(13);
//         break;
//       case "14":
//         updateStarOptionsTo(14);
//         break;
//       case "15":
//         updateStarOptionsTo(15);
//         break;
//       case "16":
//         updateStarOptionsTo(16);
//         break;
//       case "17":
//         updateStarOptionsTo(17);
//         break;
//       case "18":
//         updateStarOptionsTo(18);
//         break;
//       case "19":
//         updateStarOptionsTo(19);
//         break;
//       case "20":
//         updateStarOptionsTo(20);
//         break;
//       case "21":
//         updateStarOptionsTo(21);
//         break;
//       case "22":
//         updateStarOptionsTo(22);
//         break;
//       case "23":
//         updateStarOptionsTo(23);
//         break;
//       case "24":
//         updateStarOptionsTo(24);
//         break;
//     }
//   }
// }

// function updateStarOptionsTo(star) {
//   getStarsFromSurvivor.innerHTML = "";
//   let elements = "";
//   const hiddenValue = `<option disabled hidden selected value>&mdash;</option>`;
//   elements += hiddenValue;
//   for (let i = star; i <= 24; i++) {
//     const createOptionElement = `<option value="${i}">${i}</option>`;
//     elements += createOptionElement;
//   }
//   getStarsFromSurvivor.innerHTML = elements;
//   getStarsFromSurvivor.value = "";
// }

// function checkSubTierTo() {
//   switch (getTierToSurvivor.value) {
//     case "tier-1":
//       updateSubTierOptionsTo(1);
//       break;
//     case "tier-2":
//       break;
//     case "tier-3":
//       break;
//     case "tier-4":
//       break;
//     case "tier-5":
//       break;
//     case "tier-6":
//       break;
//     case "tier-7":
//       break;
//     case "peak-tier":
//       break;
//   }
//   if (getTierFromSurvivor.value === getTierToSurvivor.value) {
//   } else {
//   }
// }

getTierToSurvivor.addEventListener("change", () => {
  updateTierTo();
  checkSubTierTo();
  window.console.log("configure tier(to)");
});

function updateTierTo() {
  switch (getTierToSurvivor.value) {
    case "tier-1":
      updateSubTierOptionsTo(3);
      updateStarOptionsTo(2);
      break;
    case "tier-2":
      updateSubTierOptionsTo(4);
      updateStarOptionsTo(3);
      break;
    case "tier-3":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      break;
    case "tier-4":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      break;
    case "tier-5":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      break;
    case "tier-6":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      break;
    case "tier-7":
      updateSubTierOptionsTo("champion");
      updateStarOptionsTo(24);
      break;
    case "peak-tier":
      updateSubTierOptionsTo("peak");
      updateStarOptionsTo("peak");
      break;
  }
}

function checkSubTierTo() {
  switch (getSubTierFromSurvivor.value) {
    case "5":
      if (getTierFromSurvivor.value === getTierToSurvivor.value)
        updateSubTierOptionsTo(parseInt(getSubTierFromSurvivor.value));
      else updateSubTierOptionsTo(5);
      break;
    case "4":
      if (getTierFromSurvivor.value === getTierToSurvivor.value)
        updateSubTierOptionsTo(parseInt(getSubTierFromSurvivor.value));
      else updateSubTierOptionsTo(4);
      break;
    case "3":
      if (getTierFromSurvivor.value === getTierToSurvivor.value)
        updateSubTierOptionsTo(parseInt(getSubTierFromSurvivor.value));
      else updateSubTierOptionsTo(3);
      break;
    case "2":
      if (getTierFromSurvivor.value === getTierToSurvivor.value)
        updateSubTierOptionsTo(parseInt(getSubTierFromSurvivor.value));
      else updateSubTierOptionsTo(2);
      break;
    case "1":
      if (getTierFromSurvivor.value === getTierToSurvivor.value)
        updateSubTierOptionsTo(parseInt(getSubTierFromSurvivor.value));
      else updateSubTierOptionsTo(1);
      break;
  }
}

function updateSubTierOptionsTo(subTier) {
  if (subTier === "champion" || subTier === "peak") {
    getSubTierToSurvivor.style.cursor = "not-allowed";
    getSubTierToSurvivor.setAttribute("disabled", "true");
    getSubTierToSurvivor.value = "";
  } else {
    const getSubTier = () => {
      getSubTierToSurvivor.innerHTML = "";
      let elements = "";
      let hiddenValue =
        "<option hidden disabled selected value>&mdash;</option>";
      elements += hiddenValue;
      for (let i = subTier; i >= 1; i--) {
        const createOptionElement = `<option value="${i}">${i}</option>`;
        elements += createOptionElement;
      }
      getSubTierToSurvivor.innerHTML = elements;
      getSubTierToSurvivor.removeAttribute("disabled");
      getSubTierToSurvivor.style.cursor = "auto";
    };
    getSubTier();
  }
}

function updateStarOptionsTo(star) {
  if (star !== "peak") {
    const getStar = () => {
      let elements = "";
      let hiddenValue =
        "<option hidden disabled selected value>&mdash;</option>";
      elements += hiddenValue;
      for (let i = 0; i <= star; i++) {
        const createOptionElement = `<option value="${i}">${i}</option>`;
        elements += createOptionElement;
      }

      const createSelectElement = window.document.createElement("select");
      createSelectElement.setAttribute("id", "survivor-to-star");
      createSelectElement.classList.add("select-to");
      createSelectElement.innerHTML = elements;
      createSelectElement.value = "";
      getStarsToSurvivor = window.document.querySelector(
        ".select-survivor .star-container .select-to"
      );
      getStarsToSurvivor.replaceWith(createSelectElement);
    };
    getStar();
  } else {
    {
      const createInputElement = window.document.createElement("input");
      createInputElement.setAttribute("id", "survivor-to-star");
      createInputElement.setAttribute("type", "number");
      createInputElement.setAttribute("min", "26");
      createInputElement.value = "26";
      createInputElement.placeholder = "enter star";
      createInputElement.classList.add("select-to");
      getStarsToSurvivor = window.document.querySelector(
        ".select-survivor .star-container .select-to"
      );
      getStarsToSurvivor.replaceWith(createInputElement);
    }
  }
}

function clearTo() {
  getTierToSurvivor.value = "";
  getSubTierToSurvivor.value = "";
  getStarsToSurvivor.value = "";
}
