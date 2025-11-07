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
    // clearTo();
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
      getSubTierFromSurvivor.value = "";
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
  }
}

getSubTierFromSurvivor.addEventListener("change", () => clearTo());

getStarsFromSurvivor.addEventListener("change", function clear() {
  clearTo();
});

getTierToSurvivor.addEventListener("change", () => {
  updateTierTo();
  checkSubTierFrom();
  window.console.log("configure tier(to)");
});

function updateTierTo() {
  switch (getTierToSurvivor.value) {
    case "tier-1":
      updateSubTierOptionsTo(3);
      updateStarOptionsTo(parseInt(getStarsFromSurvivor.value), 2);
      break;
    case "tier-2":
      updateSubTierOptionsTo(4);
      updateStarOptionsTo(parseInt(getStarsFromSurvivor.value), 3);
      break;
    case "tier-3":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(parseInt(getStarsFromSurvivor.value), 4);
      break;
    case "tier-4":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(parseInt(getStarsFromSurvivor.value), 4);
      break;
    case "tier-5":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(parseInt(getStarsFromSurvivor.value), 4);
      break;
    case "tier-6":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(parseInt(getStarsFromSurvivor.value), 4);
      break;
    case "tier-7":
      updateSubTierOptionsTo("champion");
      updateStarOptionsTo(parseInt(getStarsFromSurvivor.value), 24);
      break;
    case "peak-tier":
      updateSubTierOptionsTo("peak");
      updateStarOptionsTo("peak");
      break;
  }
}

function checkSubTierFrom() {
  if (
    getTierToSurvivor.value !== "tier-7" &&
    getTierToSurvivor.value !== "peak-tier"
  ) {
    if (getTierFromSurvivor.value !== "tier-1") {
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
          } else {
            updateSubTierOptionsTo(5);
          }
          break;
        case "4":
          if (getTierFromSurvivor.value === getTierToSurvivor.value)
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='4']"
                ).textContent
              )
            );
          else updateSubTierOptionsTo(5);
          break;
        case "3":
          if (getTierFromSurvivor.value === getTierToSurvivor.value)
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='3']"
                ).textContent
              )
            );
          else updateSubTierOptionsTo(5);
          break;
        case "2":
          if (getTierFromSurvivor.value === getTierToSurvivor.value)
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='2']"
                ).textContent
              )
            );
          else updateSubTierOptionsTo(5);
          break;
        case "1":
          if (getTierFromSurvivor.value === getTierToSurvivor.value)
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='1']"
                ).textContent
              )
            );
          else updateSubTierOptionsTo(5);
          break;
      }
    } else if (getTierFromSurvivor.value === "tier-1") {
      if (getTierFromSurvivor.value === getTierToSurvivor.value) {
        switch (getSubTierFromSurvivor.value) {
          case "3":
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='3']"
                ).textContent
              )
            );
            break;
          case "2":
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='2']"
                ).textContent
              )
            );
            break;
          case "1":
            updateSubTierOptionsTo(
              parseInt(
                window.document.querySelector(
                  ".select-survivor .sub-tier-container .select-from option[value='1']"
                ).textContent
              )
            );
            break;
        }
      } else if (
        getTierFromSurvivor.value !== getTierToSurvivor.value &&
        getTierToSurvivor.value === "tier-2"
      ) {
        updateSubTierOptionsTo(4);
      }
    }
  } else if (getTierToSurvivor.value === "tier-7")
    updateSubTierOptionsTo("champion");
  else if (getTierToSurvivor.value === "peak-tier")
    updateSubTierOptionsTo("peak");
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
      getSubTierToSurvivor.value = "";
    };
    getSubTier();
  }
}

function updateStarOptionsTo(start, end) {
  if (start !== "peak") {
    const getStar = () => {
      let elements = "";
      let hiddenValue =
        "<option hidden disabled selected value>&mdash;</option>";
      elements += hiddenValue;
      for (let i = start + 1; i <= end; i++) {
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

function checkStarTo() {
  if (getTierFromSurvivor.value === "tier-1") {
    switch (getStarsFromSurvivor.value) {
      case "0":
        break;
      case "1":
        break;
      case "2":
        break;
    }
  } else if (getTierFromSurvivor.value === "tier-2") {
    switch (getStarsFromSurvivor.value) {
      case "0":
        break;
      case "1":
        break;
      case "2":
        break;
      case "4":
        break;
    }
  } else if (getTierFromSurvivor.value === "champion") {
    switch (getStarsFromSurvivor.value) {
      case "0":
        break;
      case "1":
        break;
      case "2":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      case "8":
        break;
      case "9":
        break;
      case "10":
        break;
      case "11":
        break;
      case "12":
        break;
      case "13":
        break;
      case "14":
        break;
      case "15":
        break;
      case "16":
        break;
      case "17":
        break;
      case "18":
        break;
      case "19":
        break;
      case "20":
        break;
      case "21":
        break;
      case "22":
        break;
      case "24":
        break;
    }
  } else if (getTierFromSurvivor.value !== "peak") {
    switch (getStarsFromSurvivor.value) {
      case "0":
        break;
      case "1":
        break;
      case "2":
        break;
      case "4":
        break;
    }
  } else {
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
