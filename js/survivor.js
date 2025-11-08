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
  "Titan",
];

// const prices = [];
// let priceRange = [];

getTierFromSurvivor.addEventListener("change", () => {
  updateTierOptionsTo(parseInt(getTierFromSurvivor.value));
  updateSubTierOptionsFrom(parseInt(getTierFromSurvivor.value));
  updateStarOptionsFrom(parseInt(getTierFromSurvivor.value));
  window.console.log("configure tier(from)");
});

function updateTierOptionsTo(tier) {
  getTierToSurvivor.innerHTML = "";
  let elements = "";
  let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
  elements += hiddenValue;
  for (let i = tier; i <= 8; i++) {
    if (i === 8) {
      const createOptionElement = `<option value="${i}">Peak Tier - ${
        ranks[ranks.length - 1]
      }</option>`;
      elements += createOptionElement;
    } else {
      const createOptionElement = `<option value="${i}">Tier ${i} - ${
        ranks[i - 1]
      }</option>`;
      elements += createOptionElement;
    }
  }
  getTierToSurvivor.innerHTML = elements;
  clearTo();
}

function updateSubTierOptionsFrom(tier) {
  if (tier === 7 || tier === 8) {
    getSubTierFromSurvivor.setAttribute("disabled", "true");
    getSubTierFromSurvivor.style.cursor = "not-allowed";
    getSubTierFromSurvivor.value = "";
    // clearTo();
  } else if (tier === 1) {
    getSubTierFromSurvivor.innerHTML = "";
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;
    for (let i = 3; i >= 1; i--) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }
    getSubTierFromSurvivor.innerHTML = elements;
    getSubTierFromSurvivor.removeAttribute("disabled");
    getSubTierFromSurvivor.style.cursor = "auto";
    getSubTierFromSurvivor.value = "";
    clearTo();
  } else if (tier === 2) {
    getSubTierFromSurvivor.innerHTML = "";
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;
    for (let i = 4; i >= 1; i--) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }
    getSubTierFromSurvivor.innerHTML = elements;
    getSubTierFromSurvivor.removeAttribute("disabled");
    getSubTierFromSurvivor.style.cursor = "auto";
    getSubTierFromSurvivor.value = "";
    clearTo();
  } else {
    getSubTierFromSurvivor.innerHTML = "";
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;
    for (let i = 5; i >= 1; i--) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }
    getSubTierFromSurvivor.innerHTML = elements;
    getSubTierFromSurvivor.removeAttribute("disabled");
    getSubTierFromSurvivor.style.cursor = "auto";
    getSubTierFromSurvivor.value = "";
    clearTo();
  }
}

function updateStarOptionsFrom(tier) {
  if (tier === 1) {
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;
    for (let i = 0; i <= 2; i++) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    const createSelectElement = window.document.createElement("select");
    createSelectElement.setAttribute("id", "survivor-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";
    getStarsFromSurvivor.removeEventListener("change", function clear() {
      clearTo();
    });
    getStarsFromSurvivor.replaceWith(createSelectElement);
    getStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );
    getStarsFromSurvivor.addEventListener("change", function clear() {
      clearTo();
    });
    clearTo();
  } else if (tier === 2) {
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;
    for (let i = 0; i <= 3; i++) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    const createSelectElement = window.document.createElement("select");
    createSelectElement.setAttribute("id", "survivor-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";
    getStarsFromSurvivor.removeEventListener("change", function clear() {
      clearTo();
    });
    getStarsFromSurvivor.replaceWith(createSelectElement);
    getStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );
    getStarsFromSurvivor.addEventListener("change", function clear() {
      clearTo();
    });
    clearTo();
  } else if (tier === 7) {
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;
    for (let i = 0; i <= 24; i++) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    const createSelectElement = window.document.createElement("select");
    createSelectElement.setAttribute("id", "survivor-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";
    getStarsFromSurvivor.removeEventListener("change", function clear() {
      clearTo();
    });
    getStarsFromSurvivor.replaceWith(createSelectElement);
    getStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );
    getStarsFromSurvivor.addEventListener("change", function clear() {
      clearTo();
    });
    clearTo();
  } else if (tier === 8) {
    {
      const createInputElement = window.document.createElement("input");
      createInputElement.setAttribute("id", "survivor-from-star");
      createInputElement.setAttribute("type", "number");
      createInputElement.setAttribute("min", "25");
      createInputElement.setAttribute("max", "99");
      createInputElement.value = "25";
      createInputElement.placeholder = "enter star";
      createInputElement.classList.add("select-from");
      getStarsFromSurvivor.removeEventListener("change", function clear() {
        clearTo();
      });
      getStarsFromSurvivor.replaceWith(createInputElement);
      getStarsFromSurvivor = window.document.querySelector(
        ".select-survivor .star-container .select-from"
      );
      getStarsFromSurvivor.addEventListener("change", function clear() {
        clearTo();
      });
      clearTo();
    }
  } else {
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;
    for (let i = 0; i <= 4; i++) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    const createSelectElement = window.document.createElement("select");
    createSelectElement.setAttribute("id", "survivor-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";
    getStarsFromSurvivor.removeEventListener("change", function clear() {
      clearTo();
    });
    getStarsFromSurvivor.replaceWith(createSelectElement);
    getStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );
    getStarsFromSurvivor.addEventListener("change", function clear() {
      clearTo();
    });
    clearTo();
  }
}

getSubTierFromSurvivor.addEventListener("change", () => clearTo());
getStarsFromSurvivor.addEventListener("change", function clear() {
  clearTo();
});

getTierToSurvivor.addEventListener("change", () => {
  updateTierTo();
  // checkSubTierFrom(parseInt(getTierToSurvivor.value));
  // checkSubTierFrom(getTierToSurvivor.value);
  // checkStarFrom(parseInt(getTierToSurvivor.value));
  window.console.log("configure tier(to)");
});

function updateTierTo() {
  switch (getTierToSurvivor.value) {
    case "1":
      updateSubTierOptionsTo(3);
      updateStarOptionsTo(2);
      checkSubTierFrom();
      checkStarFrom();
      break;
    case "2":
      updateSubTierOptionsTo(4);
      updateStarOptionsTo(3);
      checkSubTierFrom();
      checkStarFrom();
      break;
    case "3":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      checkSubTierFrom();
      checkStarFrom();
      break;
    case "4":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      checkSubTierFrom();
      checkStarFrom();
      break;
    case "5":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      checkSubTierFrom();
      checkStarFrom();
      break;
    case "6":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      checkSubTierFrom();
      checkStarFrom();
      break;
    case "7":
      updateStarOptionsTo("champion");
      updateStarOptionsTo(24);
      checkSubTierFrom();
      checkStarFrom();
      break;
    case "8":
      updateStarOptionsTo("peak");
      checkSubTierFrom();
      checkStarFrom();
      break;
  }
}

function checkSubTierFrom() {
  if (getTierToSurvivor.value !== "7" && getTierToSurvivor.value !== "8") {
    if (getTierFromSurvivor.value === "1" && getTierToSurvivor.value === "2") {
      switch (getSubTierFromSurvivor.value) {
        case "3":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='3']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(4);
          break;
        case "2":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='2']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(4);
          break;
        case "1":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='1']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(4);
          break;
      }
    } else if (
      getTierToSurvivor.value !== "1" &&
      getTierToSurvivor.value !== "7" &&
      getTierToSurvivor.value !== "8"
    ) {
      switch (getSubTierFromSurvivor.value) {
        case "5":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='5']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(5);
          break;
        case "4":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='4']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(5);
          break;
        case "3":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='3']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(5);
          break;
        case "2":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='2']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(5);
          break;
        case "1":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='1']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(5);
          break;
      }
    } else if (getTierFromSurvivor.value === "1") {
      switch (getSubTierFromSurvivor.value) {
        case "3":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='3']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(5);
          break;
        case "2":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='2']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(5);
          break;
        case "1":
          if (getTierFromSurvivor.value === getTierToSurvivor.value) {
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='1']"
                ).textContent
              )
            );
          } else updateSubTierOptionsTo(5);
          break;
      }
    }
  } else if (getTierToSurvivor.value === "7") {
    updateSubTierOptionsTo("champion");
  } else if (getTierToSurvivor.value === "8") {
    updateSubTierOptionsTo("peak");
  }
}

function updateSubTierOptionsTo(subTier) {
  if (subTier === "champion" || subTier === "peak") {
    getSubTierToSurvivor.style.cursor = "not-allowed";
    getSubTierToSurvivor.setAttribute("disabled", "true");
    getSubTierToSurvivor.value = "";
  } else {
    getSubTierToSurvivor.innerHTML = "";
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;
    for (let i = subTier; i >= 1; i--) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }
    getSubTierToSurvivor.innerHTML = elements;
    getSubTierToSurvivor.removeAttribute("disabled");
    getSubTierToSurvivor.style.cursor = "auto";
    getSubTierToSurvivor.value = "";
  }
}

// function checkStarFrom() {
//   if (getTierFromSurvivor.value === "1") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         break;
//       case "1":
//         break;
//       case "2":
//         break;
//     }
//   } else if (getTierFromSurvivor.value === "2") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         break;
//       case "1":
//         break;
//       case "2":
//         break;
//       case "4":
//         break;
//     }
//   } else if (getTierFromSurvivor.value === "7") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         break;
//       case "1":
//         break;
//       case "2":
//         break;
//       case "4":
//         break;
//       case "5":
//         break;
//       case "6":
//         break;
//       case "7":
//         break;
//       case "8":
//         break;
//       case "9":
//         break;
//       case "10":
//         break;
//       case "11":
//         break;
//       case "12":
//         break;
//       case "13":
//         break;
//       case "14":
//         break;
//       case "15":
//         break;
//       case "16":
//         break;
//       case "17":
//         break;
//       case "18":
//         break;
//       case "19":
//         break;
//       case "20":
//         break;
//       case "21":
//         break;
//       case "22":
//         break;
//       case "24":
//         break;
//     }
//   } else if (getTierFromSurvivor.value !== "8") {
//     switch (getStarsFromSurvivor.value) {
//       case "0":
//         break;
//       case "1":
//         break;
//       case "2":
//         break;
//       case "4":
//         break;
//     }
//   } else {
//   }
// }

// function renderStarTo() {}

function updateStarOptionsTo(star) {
  if (star !== "peak") {
    let elements = "";
    let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
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
  } else {
    {
      const createInputElement = window.document.createElement("input");
      createInputElement.setAttribute("id", "survivor-to-star");
      createInputElement.setAttribute("type", "number");
      createInputElement.setAttribute("min", "26");
      createInputElement.setAttribute("max", "100");
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
  getSubTierToSurvivor.removeAttribute("disabled");
  getSubTierToSurvivor.style.cursor = "auto";
  getSubTierToSurvivor.value = "";

  let elements = "";
  let hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
  elements += hiddenValue;
  for (let i = 0; i <= 4; i++) {
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
  getTierToSurvivor.value = "";
  getSubTierToSurvivor.value = "";
  getStarsToSurvivor.value = "";
}
