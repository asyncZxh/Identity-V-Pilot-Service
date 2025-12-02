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

export const currencySelectionHunterSelect = window.document.querySelector(
  ".select-hunter .currency-container .currency.convert"
);

export const currencySelectionHunterIcon = window.document.querySelector(
  ".select-hunter .currency-container .chevron-down"
);

const ranks = [
  "Spider",
  "Cobra",
  "Crocodile",
  "Sabertooth",
  "Manticore",
  "Cyclops",
  "Evil Dragon",
  "Hydra",
];

getTierFromHunter.addEventListener("change", () => {
  updateTierOptionsTo(parseInt(getTierFromHunter.value));
  updateSubTierOptionsFrom(parseInt(getTierFromHunter.value));
  updateStarOptionsFrom(parseInt(getTierFromHunter.value));
  clearPrice();
  window.console.log("configure tier(from)");
});

function updateTierOptionsTo(tier) {
  getTierToHunter.innerHTML = "";
  let elements = "";
  const hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
  elements += hiddenValue;

  for (let i = tier; i <= ranks.length; i++) {
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

  getTierToHunter.innerHTML = elements;
  clearTo();
}

function updateTierOptionsToIfBeforePromote(tier) {
  getTierToHunter.innerHTML = "";
  let elements = "";
  const hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
  elements += hiddenValue;

  for (let i = tier; i <= ranks.length; i++) {
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

  getTierToHunter.innerHTML = elements;
  clearTo();
}

function updateSubTierOptionsFrom(tier) {
  if (tier === 7 || tier === 8) {
    getSubTierFromHunter.disabled = true;
    getSubTierFromHunter.style.cursor = "not-allowed";
    getSubTierFromHunter.value = "";
    clearTo();
  } else if (tier === 1) {
    getSubTierFromHunter.innerHTML = "";
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;

    for (let i = 3; i >= 1; i--) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    getSubTierFromHunter.innerHTML = elements;
    getSubTierFromHunter.removeAttribute("disabled");
    getSubTierFromHunter.style.cursor = "auto";
    getSubTierFromHunter.value = "";
    clearTo();
  } else if (tier === 2) {
    getSubTierFromHunter.innerHTML = "";
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;

    for (let i = 4; i >= 1; i--) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    getSubTierFromHunter.innerHTML = elements;
    getSubTierFromHunter.removeAttribute("disabled");
    getSubTierFromHunter.style.cursor = "auto";
    getSubTierFromHunter.value = "";
    clearTo();
  } else {
    getSubTierFromHunter.innerHTML = "";
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;

    for (let i = 5; i >= 1; i--) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    getSubTierFromHunter.innerHTML = elements;
    getSubTierFromHunter.removeAttribute("disabled");
    getSubTierFromHunter.style.cursor = "auto";
    getSubTierFromHunter.value = "";
    clearTo();
  }
}

getSubTierFromHunter.addEventListener("change", () => {
  getStarsFromHunter.value = "";
  clearTo();
  clearPrice();
});

function updateStarOptionsFrom(tier) {
  if (tier === 1) {
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;

    for (let i = 0; i <= 2; i++) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    const createSelectElement = window.document.createElement("select");
    createSelectElement.setAttribute("id", "hunter-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";
    getStarsFromHunter.replaceWith(createSelectElement);
    getStarsFromHunter = window.document.querySelector(
      ".select-hunter .star-container .select-from"
    );

    getStarsFromHunter.addEventListener("change", function clearAndCheckStar() {
      if (
        getTierFromHunter.value === "1" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "2"
      )
        updateTierOptionsToIfBeforePromote(2);
      else if (
        getTierFromHunter.value === "2" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "3"
      )
        updateTierOptionsToIfBeforePromote(3);
      else if (
        getTierFromHunter.value === "3" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(4);
      else if (
        getTierFromHunter.value === "4" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(5);
      else if (
        getTierFromHunter.value === "5" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(6);
      else if (
        getTierFromHunter.value === "6" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(7);
      else if (
        getTierFromHunter.value === "7" &&
        getStarsFromHunter.value === "24"
      )
        updateTierOptionsToIfBeforePromote(8);
      clearTo();
      clearPrice();
    });
    clearTo();
    clearPrice();
  } else if (tier === 2) {
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;

    for (let i = 0; i <= 3; i++) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    const createSelectElement = window.document.createElement("select");
    createSelectElement.setAttribute("id", "hunter-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";
    getStarsFromHunter.replaceWith(createSelectElement);
    getStarsFromHunter = window.document.querySelector(
      ".select-hunter .star-container .select-from"
    );

    getStarsFromHunter.addEventListener("change", function clearAndCheckStar() {
      if (
        getTierFroHunter.value === "1" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "2"
      )
        updateTierOptionsToIfBeforePromote(2);
      else if (
        getTierFroHunter.value === "2" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "3"
      )
        updateTierOptionsToIfBeforePromote(3);
      else if (
        getTierFroHunter.value === "3" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(4);
      else if (
        getTierFroHunter.value === "4" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(5);
      else if (
        getTierFroHunter.value === "5" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(6);
      else if (
        getTierFroHunter.value === "6" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(7);
      else if (
        getTierFromHunter.value === "7" &&
        getStarsFromHunter.value === "24"
      )
        updateTierOptionsToIfBeforePromote(8);
      clearTo();
      clearPrice();
    });
    clearTo();
    clearPrice();
  } else if (tier === 7) {
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;

    for (let i = 0; i <= 24; i++) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    const createSelectElement = window.document.createElement("select");
    createSelectElement.setAttribute("id", "hunter-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";
    getStarsFromHunter.replaceWith(createSelectElement);
    getStarsFromHunter = window.document.querySelector(
      ".select-hunter .star-container .select-from"
    );

    getStarsFromHunter.addEventListener("change", function clearAndCheckStar() {
      if (
        getTierFromHunter.value === "1" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "2"
      )
        updateTierOptionsToIfBeforePromote(2);
      else if (
        getTierFromHunter.value === "2" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "3"
      )
        updateTierOptionsToIfBeforePromote(3);
      else if (
        getTierFromHunter.value === "3" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(4);
      else if (
        getTierFromHunter.value === "4" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(5);
      else if (
        getTierFromHunter.value === "5" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(6);
      else if (
        getTierFromHunter.value === "6" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(7);
      else if (
        getTierFromHunter.value === "7" &&
        getStarsFromHunter.value === "24"
      )
        updateTierOptionsToIfBeforePromote(8);
      clearTo();
      clearPrice();
    });
    clearTo();
    clearPrice();
  } else if (tier === 8) {
    {
      const createInputElement = window.document.createElement("input");
      createInputElement.setAttribute("id", "hunter-from-star");
      createInputElement.setAttribute("type", "number");
      createInputElement.setAttribute("min", "25");
      createInputElement.value = "25";
      createInputElement.placeholder = "enter star";
      createInputElement.classList.add("select-from");
      getStarsFromHunter.replaceWith(createInputElement);
      getStarsFromHunter = window.document.querySelector(
        ".select-hunter .star-container .select-from"
      );

      getStarsFromHunter.addEventListener(
        "change",
        function clearAndCheckStar() {
          if (
            getTierFromHunter.value === "1" &&
            getSubTierFromHunter.value === "1" &&
            getStarsFromHunter.value === "2"
          ) {
            checkStarFrom();
          } else if (
            getTierFromHunter.value === "2" &&
            getSubTierFromHunter.value === "1" &&
            getStarsFromHunter.value === "3"
          ) {
            checkStarFrom();
          } else if (
            (getTierFromHunter.value === "3" ||
              getTierFromHunter.value === "4" ||
              getTierFromHunter.value === "5" ||
              getTierFromHunter.value === "6") &&
            getSubTierFromHunter.value === "1" &&
            getStarsFromHunter.value === "4"
          ) {
            checkStarFrom();
          } else if (
            getTierFromHunter.value === "7" &&
            getStarsFromHunter.value === "24"
          ) {
            checkStarFrom();
          }
          clearTo();
          clearPrice();
        }
      );
      clearTo();
      clearPrice();
    }
  } else {
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;

    for (let i = 0; i <= 4; i++) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    const createSelectElement = window.document.createElement("select");
    createSelectElement.setAttribute("id", "hunter-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";
    getStarsFromHunter.replaceWith(createSelectElement);
    getStarsFromHunter = window.document.querySelector(
      ".select-hunter .star-container .select-from"
    );
    getStarsFromHunter.addEventListener("change", function clearAndCheckStar() {
      if (
        getTierFroHunter.value === "1" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "2"
      )
        updateTierOptionsToIfBeforePromote(2);
      else if (
        getTierFroHunter.value === "2" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "3"
      )
        updateTierOptionsToIfBeforePromote(3);
      else if (
        getTierFroHunter.value === "3" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFroHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(4);
      else if (
        getTierFroHunter.value === "4" &&
        getSubTierFroHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(5);
      else if (
        getTierFromHunter.value === "5" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(6);
      else if (
        getTierFromHunter.value === "6" &&
        getSubTierFromHunter.value === "1" &&
        getStarsFromHunter.value === "4"
      )
        updateTierOptionsToIfBeforePromote(7);
      else if (
        getTierFromHunter.value === "7" &&
        getStarsFromHunter.value === "24"
      )
        updateTierOptionsToIfBeforePromote(8);
      clearTo();
      clearPrice();
    });
    clearTo();
    clearPrice();
  }
}

getStarsFromHunter.addEventListener("change", function clearAndCheckStar() {
  if (
    getTierFromHunter.value === "1" &&
    getSubTierFromHunter.value === "1" &&
    getStarsFromHunter.value === "2"
  )
    updateTierOptionsToIfBeforePromote(2);
  else if (
    getTierFromHunter.value === "2" &&
    getSubTierFromHunter.value === "1" &&
    getStarsFromHunter.value === "3"
  )
    updateTierOptionsToIfBeforePromote(3);
  else if (
    getTierFromHunter.value === "3" &&
    getSubTierFromHunter.value === "1" &&
    getStarsFromHunter.value === "4"
  )
    updateTierOptionsToIfBeforePromote(4);
  else if (
    getTierFromHunter.value === "4" &&
    getSubTierFromHunter.value === "1" &&
    getStarsFromHunter.value === "4"
  )
    updateTierOptionsToIfBeforePromote(5);
  else if (
    getTierFromHunter.value === "5" &&
    getSubTierFromHunter.value === "1" &&
    getStarsFromHunter.value === "4"
  )
    updateTierOptionsToIfBeforePromote(6);
  else if (
    getTierFromHunter.value === "6" &&
    getSubTierFromHunter.value === "1" &&
    getStarsFromHunter.value === "4"
  )
    updateTierOptionsToIfBeforePromote(7);
  else if (getTierFromHunter.value === "7" && getStarsFromHunter.value === "24")
    updateTierOptionsToIfBeforePromote(8);
  clearTo();
  clearPrice();
});

getTierToHunter.addEventListener("change", () => {
  updateTierTo();
  checkSubTierFrom();
  clearPrice();
  if (
    getTierToHunter.value === "1" &&
    (getSubTierFromHunter.value !== "1" || getStarsFromHunter.value !== "2")
  )
    checkStarFrom();
  else if (
    getTierToHunter.value === "2" &&
    (getSubTierFromHunter.value !== "1" || getStarsFromHunter.value !== "2")
  )
    checkStarFrom();
  else if (
    (getTierToHunter.value === "3" ||
      getTierToHunter.value === "4" ||
      getTierToHunter.value === "5" ||
      getTierToHunter.value === "6") &&
    (getSubTierFromHunter.value !== "1" || getStarsFromHunter.value !== "2")
  )
    checkStarFrom();
  else if (getTierToHunter.value === "7") checkStarFrom();
  else if (getTierToHunter.value === "8") checkStarFrom();

  window.console.log("configure tier(to)");

  if (getTierToHunter.value === "1") {
    if (getStarsFromHunter.value === "2") {
      if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "3"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 2; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 2);
      } else if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "2"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 1; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 2);
      }
    }
  } else if (getTierFromHunter.value === "2") {
    if (getStarsFromHunter.value === "3") {
      if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "4"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 3; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 3);
      } else if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "3"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 2; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 3);
      } else if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "2"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 1; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 3);
      }
    }
  } else if (
    getTierToHunter.value === "3" ||
    getTierToHunter.value === "4" ||
    getTierToHunter.value === "5" ||
    getTierToHunter.value === "6"
  ) {
    if (getStarsFromHunter.value === "4") {
      if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "5"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 4; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 4);
      } else if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "4"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 3; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 4);
      } else if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "3"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 2; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 4);
      } else if (
        getTierFromHunter.value === getTierToHunter.value &&
        getSubTierFromHunter.value === "2"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 1; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToHunter.innerHTML = elements;
        updateStarFromCheck(0, 4);
      }
    }
  }
});

getSubTierToHunter.addEventListener("change", () => {
  checkStarFrom();
  getStarsToHunter.value = "";
  clearPrice();
});

function updateTierTo() {
  switch (getTierToHunter.value) {
    case "1":
      updateSubTierOptionsTo(3);
      updateStarOptionsTo(2);
      break;

    case "2":
      updateSubTierOptionsTo(4);
      updateStarOptionsTo(3);
      break;

    case "3":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      break;

    case "4":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      break;

    case "5":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      break;

    case "6":
      updateSubTierOptionsTo(5);
      updateStarOptionsTo(4);
      break;

    case "7":
      updateSubTierOptionsTo("dragon");
      updateStarOptionsTo(24);
      break;

    case "8":
      updateSubTierOptionsTo("peak");
      updateStarOptionsTo("peak");
      break;
  }
}

function checkSubTierFrom() {
  if (getTierToHunter.value !== "7" && getTierToHunter.value !== "8") {
    if (getTierFromHunter.value === "1" && getTierToHunter.value === "2") {
      switch (getSubTierFromHunter.value) {
        case "3":
          if (getTierFromHunter.value === getTierToHunter.value) {
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
          if (getTierFromHunter.value === getTierToHunter.value) {
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
          if (getTierFromHunter.value === getTierToHunter.value) {
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
      getTierToHunter.value !== "1" &&
      getTierToHunter.value !== "7" &&
      getTierToHunter.value !== "8"
    ) {
      switch (getSubTierFromHunter.value) {
        case "5":
          if (getTierFromHunter.value === getTierToHunter.value) {
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
          if (getTierFromHunter.value === getTierToHunter.value) {
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
          if (getTierFromHunter.value === getTierToHunter.value) {
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
          if (getTierFromHunter.value === getTierToHunter.value) {
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
          if (getTierFromHunter.value === getTierToHunter.value) {
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
    } else if (getTierFromHunter.value === "1") {
      switch (getSubTierFromHunter.value) {
        case "3":
          if (getTierFromHunter.value === getTierToHunter.value) {
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
          if (getTierFromHunter.value === getTierToHunter.value) {
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
          if (getTierFromHunter.value === getTierToHunter.value) {
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
  } else if (getTierToHunter.value === "7") {
    updateSubTierOptionsTo("dragon");
  } else if (getTierToHunter.value === "8") {
    updateSubTierOptionsTo("peak");
  }
}

function updateSubTierOptionsTo(subTier) {
  if (subTier === "dragon" || subTier === "peak") {
    getSubTierToHunter.style.cursor = "not-allowed";
    getSubTierToHunter.disabled = true;
    getSubTierToHunter.value = "";
  } else {
    getSubTierToHunter.innerHTML = "";
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
    elements += hiddenValue;

    for (let i = subTier; i >= 1; i--) {
      const createOptionElement = `<option value="${i}">${i}</option>`;
      elements += createOptionElement;
    }

    getSubTierToHunter.innerHTML = elements;
    getSubTierToHunter.removeAttribute("disabled");
    getSubTierToHunter.style.cursor = "auto";
    getSubTierToHunter.value = "";
  }
}

function checkStarFrom() {
  if (getTierToHunter.value === "1") {
    switch (getStarsFromHunter.value) {
      case "0":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsFromHunter.value !== "2"
        )
          updateStarFromCheck(1, 2);
        else updateStarFromCheck(0, 2);
        break;
      case "1":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsFromHunter.value !== "2"
        )
          updateStarFromCheck(2, 2);
        else updateStarFromCheck(0, 2);
        break;
    }
  } else if (getTierToHunter.value === "2") {
    switch (getStarsFromHunter.value) {
      case "0":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsToHunter.value !== "3"
        )
          updateStarFromCheck(1, 3);
        else updateStarFromCheck(0, 3);
        break;
      case "1":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsToHunter.value !== "3"
        )
          updateStarFromCheck(2, 3);
        else updateStarFromCheck(0, 3);
        break;
      case "2":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsToHunter.value !== "3"
        )
          updateStarFromCheck(3, 3);
        else updateStarFromCheck(0, 3);
        break;
    }
  } else if (getTierToHunter.value === "7") {
    if (getTierFromHunter.value === getTierToHunter.value) {
      const loop = (star) => {
        let elements = "";
        const hiddenValue =
          "<option hidden disabled selected value>&mdash;</option>";
        elements += hiddenValue;

        for (let i = star + 1; i <= 24; i++) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getStarsToHunter.innerHTML = elements;
      };
      loop(parseInt(getStarsFromHunter.value));
    }
    if (getStarsFromHunter.value === "") updateStarOptionsTo(24);
  } else if (getTierToHunter.value === "8") {
    if (getTierFromHunter.value === getTierToHunter.value) {
      const starToPeak = parseInt(getStarsFromHunter.value) + 1;
      getStarsToHunter.value = starToPeak;
    }
  } else {
    switch (getStarsFromHunter.value) {
      case "0":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsToHunter.value !== "4"
        )
          updateStarFromCheck(1, 4);
        else updateStarFromCheck(0, 4);
        break;
      case "1":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsToHunter.value !== "4"
        )
          updateStarFromCheck(2, 4);
        else updateStarFromCheck(0, 4);
        break;
      case "2":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsToHunter.value !== "4"
        )
          updateStarFromCheck(3, 4);
        else updateStarFromCheck(0, 4);
        break;
      case "3":
        if (
          getSubTierFromHunter.value === getSubTierToHunter.value &&
          getTierFromHunter.value === getTierToHunter.value &&
          getStarsToHunter.value !== "4"
        )
          updateStarFromCheck(4, 4);
        else updateStarFromCheck(0, 4);
        break;
    }
  }
}

function updateStarFromCheck(start, end) {
  let elements = "";
  const hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
  elements += hiddenValue;

  for (let i = start; i <= end; i++) {
    const createOptionElement = `<option value="${i}">${i}</option>`;
    elements += createOptionElement;
  }

  const createSelectElement = window.document.createElement("select");
  createSelectElement.setAttribute("id", "hunter-to-star");
  createSelectElement.classList.add("select-to");
  createSelectElement.innerHTML = elements;
  createSelectElement.value = "";
  getStarsToHunter.replaceWith(createSelectElement);
  getStarsToHunter = window.document.querySelector(
    ".select-hunter .star-container .select-to"
  );
  getStarsToHunter.addEventListener("change", function extraListener() {
    clearPrice();
  });
}

function updateStarOptionsTo(star) {
  if (star !== "peak") {
    let elements = "";
    const hiddenValue =
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
    getStarsToSurvivor.replaceWith(createSelectElement);
    getStarsToSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-to"
    );
  } else {
    const createInputElement = window.document.createElement("input");
    createInputElement.setAttribute("id", "survivor-to-star");
    createInputElement.setAttribute("type", "number");
    if (getTierFromSurvivor.value === getTierToSurvivor.value) {
      createInputElement.setAttribute("min", "26");
      createInputElement.value = "26";
    } else {
      createInputElement.value = "25";
      createInputElement.setAttribute("min", "25");
    }
    createInputElement.placeholder = "enter star";
    createInputElement.classList.add("select-to");
    getStarsToSurvivor.replaceWith(createInputElement);
    getStarsToSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-to"
    );
    getStarsToSurvivor.addEventListener("change", function extraListener() {
      clearPrice();
    });
  }
}

function clearTo() {
  getSubTierToSurvivor.removeAttribute("disabled");
  getSubTierToSurvivor.style.cursor = "auto";
  getSubTierToSurvivor.value = "";

  let elements = "";
  const hiddenValue = "<option hidden disabled selected value>&mdash;</option>";
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
  getStarsToSurvivor.replaceWith(createSelectElement);
  getStarsToSurvivor = window.document.querySelector(
    ".select-survivor .star-container .select-to"
  );
  getTierToSurvivor.value = "";
  getSubTierToSurvivor.value = "";
  getStarsToSurvivor.value = "";
}

function clearPrice() {
  const totalPriceContainer = window.document.querySelector(
    ".total-price-survivor"
  );
  totalPriceContainer.innerHTML = "";
}
