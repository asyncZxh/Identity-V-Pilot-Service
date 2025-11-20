export const getTierFromSurvivor = window.document.querySelector(
  ".select-survivor .tier-container .select-from"
);

export const getSubTierFromSurvivor = window.document.querySelector(
  ".select-survivor .sub-tier-container .select-from"
);

export let getStarsFromSurvivor = window.document.querySelector(
  ".select-survivor .star-container .select-from"
);

export const getTierToSurvivor = window.document.querySelector(
  ".select-survivor .tier-container .select-to"
);

export const getSubTierToSurvivor = window.document.querySelector(
  ".select-survivor .sub-tier-container .select-to"
);

export let getStarsToSurvivor = window.document.querySelector(
  ".select-survivor .star-container .select-to"
);

export const buttonCalculateSurvivor = window.document.querySelector(
  ".select-survivor .calculate-currency-container .total-button"
);

export const currencySelectionSurvivorSelect = window.document.querySelector(
  ".select-survivor .currency-container .currency.convert"
);

export const currencySelectionSurvivorIcon = window.document.querySelector(
  ".select-survivor .currency-container .chevron-down"
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

getTierFromSurvivor.addEventListener("change", () => {
  updateTierOptionsTo(parseInt(getTierFromSurvivor.value));
  updateSubTierOptionsFrom(parseInt(getTierFromSurvivor.value));
  updateStarOptionsFrom(parseInt(getTierFromSurvivor.value));
  window.console.log("configure tier(from)");
});

function updateTierOptionsTo(tier) {
  getTierToSurvivor.innerHTML = "";
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

  getTierToSurvivor.innerHTML = elements;
  clearTo();
}

function updateTierOptionsToIfBeforePromote(tier) {
  getTierToSurvivor.innerHTML = "";
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

  getTierToSurvivor.innerHTML = elements;
  clearTo();
}

function updateSubTierOptionsFrom(tier) {
  if (tier === 7 || tier === 8) {
    getSubTierFromSurvivor.disabled = true;
    getSubTierFromSurvivor.style.cursor = "not-allowed";
    getSubTierFromSurvivor.value = "";
    clearTo();
  } else if (tier === 1) {
    getSubTierFromSurvivor.innerHTML = "";
    let elements = "";
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
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
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
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
    const hiddenValue =
      "<option hidden disabled selected value>&mdash;</option>";
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

getSubTierFromSurvivor.addEventListener("change", () => {
  getStarsFromSurvivor.value = "";
  clearTo();
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
    createSelectElement.setAttribute("id", "survivor-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";

    getStarsFromSurvivor.removeEventListener(
      "change",
      function clearAndCheckStar() {
        if (
          getTierFromSurvivor.value === "1" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "2"
        )
          updateTierOptionsToIfBeforePromote(2);
        else if (
          getTierFromSurvivor.value === "2" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "3"
        )
          updateTierOptionsToIfBeforePromote(3);
        else if (
          getTierFromSurvivor.value === "3" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(4);
        else if (
          getTierFromSurvivor.value === "4" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(5);
        else if (
          getTierFromSurvivor.value === "5" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(6);
        else if (
          getTierFromSurvivor.value === "6" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(7);
        else if (
          getTierFromSurvivor.value === "7" &&
          getStarsFromSurvivor.value === "24"
        )
          updateTierOptionsToIfBeforePromote(8);
        clearTo();
      }
    );
    getStarsFromSurvivor.replaceWith(createSelectElement);
    getStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );

    getStarsFromSurvivor.addEventListener(
      "change",
      function clearAndCheckStar() {
        if (
          getTierFromSurvivor.value === "1" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "2"
        )
          updateTierOptionsToIfBeforePromote(2);
        else if (
          getTierFromSurvivor.value === "2" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "3"
        )
          updateTierOptionsToIfBeforePromote(3);
        else if (
          getTierFromSurvivor.value === "3" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(4);
        else if (
          getTierFromSurvivor.value === "4" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(5);
        else if (
          getTierFromSurvivor.value === "5" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(6);
        else if (
          getTierFromSurvivor.value === "6" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(7);
        else if (
          getTierFromSurvivor.value === "7" &&
          getStarsFromSurvivor.value === "24"
        )
          updateTierOptionsToIfBeforePromote(8);
        clearTo();
      }
    );
    clearTo();
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
    createSelectElement.setAttribute("id", "survivor-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";

    getStarsFromSurvivor.removeEventListener(
      "change",
      function clearAndCheckStar() {
        if (
          getTierFromSurvivor.value === "1" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "2"
        )
          updateTierOptionsToIfBeforePromote(2);
        else if (
          getTierFromSurvivor.value === "2" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "3"
        )
          updateTierOptionsToIfBeforePromote(3);
        else if (
          getTierFromSurvivor.value === "3" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(4);
        else if (
          getTierFromSurvivor.value === "4" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(5);
        else if (
          getTierFromSurvivor.value === "5" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(6);
        else if (
          getTierFromSurvivor.value === "6" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(7);
        else if (
          getTierFromSurvivor.value === "7" &&
          getStarsFromSurvivor.value === "24"
        )
          updateTierOptionsToIfBeforePromote(8);
        clearTo();
      }
    );
    getStarsFromSurvivor.replaceWith(createSelectElement);
    getStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );

    getStarsFromSurvivor.addEventListener(
      "change",
      function clearAndCheckStar() {
        if (
          getTierFromSurvivor.value === "1" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "2"
        )
          updateTierOptionsToIfBeforePromote(2);
        else if (
          getTierFromSurvivor.value === "2" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "3"
        )
          updateTierOptionsToIfBeforePromote(3);
        else if (
          getTierFromSurvivor.value === "3" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(4);
        else if (
          getTierFromSurvivor.value === "4" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(5);
        else if (
          getTierFromSurvivor.value === "5" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(6);
        else if (
          getTierFromSurvivor.value === "6" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(7);
        else if (
          getTierFromSurvivor.value === "7" &&
          getStarsFromSurvivor.value === "24"
        )
          updateTierOptionsToIfBeforePromote(8);
        clearTo();
      }
    );
    clearTo();
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
    createSelectElement.setAttribute("id", "survivor-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";

    getStarsFromSurvivor.removeEventListener(
      "change",
      function clearAndCheckStar() {
        if (
          getTierFromSurvivor.value === "1" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "2"
        )
          updateTierOptionsToIfBeforePromote(2);
        else if (
          getTierFromSurvivor.value === "2" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "3"
        )
          updateTierOptionsToIfBeforePromote(3);
        else if (
          getTierFromSurvivor.value === "3" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(4);
        else if (
          getTierFromSurvivor.value === "4" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(5);
        else if (
          getTierFromSurvivor.value === "5" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(6);
        else if (
          getTierFromSurvivor.value === "6" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(7);
        else if (
          getTierFromSurvivor.value === "7" &&
          getStarsFromSurvivor.value === "24"
        )
          updateTierOptionsToIfBeforePromote(8);
        clearTo();
      }
    );
    getStarsFromSurvivor.replaceWith(createSelectElement);
    getStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );

    getStarsFromSurvivor.addEventListener(
      "change",
      function clearAndCheckStar() {
        if (
          getTierFromSurvivor.value === "1" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "2"
        )
          updateTierOptionsToIfBeforePromote(2);
        else if (
          getTierFromSurvivor.value === "2" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "3"
        )
          updateTierOptionsToIfBeforePromote(3);
        else if (
          getTierFromSurvivor.value === "3" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(4);
        else if (
          getTierFromSurvivor.value === "4" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(5);
        else if (
          getTierFromSurvivor.value === "5" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(6);
        else if (
          getTierFromSurvivor.value === "6" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(7);
        else if (
          getTierFromSurvivor.value === "7" &&
          getStarsFromSurvivor.value === "24"
        )
          updateTierOptionsToIfBeforePromote(8);
        clearTo();
      }
    );
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

      getStarsFromSurvivor.removeEventListener(
        "change",
        function clearAndCheckStar() {
          if (
            getTierFromSurvivor.value === "1" &&
            getSubTierFromSurvivor.value === "1" &&
            getStarsFromSurvivor.value === "2"
          ) {
            checkStarFrom();
          } else if (
            getTierFromSurvivor.value === "2" &&
            getSubTierFromSurvivor.value === "1" &&
            getStarsFromSurvivor.value === "3"
          ) {
            checkStarFrom();
          } else if (
            (getTierFromSurvivor.value === "3" ||
              getTierFromSurvivor.value === "4" ||
              getTierFromSurvivor.value === "5" ||
              getTierFromSurvivor.value === "6") &&
            getSubTierFromSurvivor.value === "1" &&
            getStarsFromSurvivor.value === "4"
          ) {
            checkStarFrom();
          } else if (
            getTierFromSurvivor.value === "7" &&
            getStarsFromSurvivor.value === "24"
          ) {
            checkStarFrom();
          }
          clearTo();
        }
      );
      getStarsFromSurvivor.replaceWith(createInputElement);
      getStarsFromSurvivor = window.document.querySelector(
        ".select-survivor .star-container .select-from"
      );

      getStarsFromSurvivor.addEventListener(
        "change",
        function clearAndCheckStar() {
          if (
            getTierFromSurvivor.value === "1" &&
            getSubTierFromSurvivor.value === "1" &&
            getStarsFromSurvivor.value === "2"
          ) {
            checkStarFrom();
          } else if (
            getTierFromSurvivor.value === "2" &&
            getSubTierFromSurvivor.value === "1" &&
            getStarsFromSurvivor.value === "3"
          ) {
            checkStarFrom();
          } else if (
            (getTierFromSurvivor.value === "3" ||
              getTierFromSurvivor.value === "4" ||
              getTierFromSurvivor.value === "5" ||
              getTierFromSurvivor.value === "6") &&
            getSubTierFromSurvivor.value === "1" &&
            getStarsFromSurvivor.value === "4"
          ) {
            checkStarFrom();
          } else if (
            getTierFromSurvivor.value === "7" &&
            getStarsFromSurvivor.value === "24"
          ) {
            checkStarFrom();
          }
          clearTo();
        }
      );
      clearTo();
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
    createSelectElement.setAttribute("id", "survivor-from-star");
    createSelectElement.classList.add("select-from");
    createSelectElement.innerHTML = elements;
    createSelectElement.value = "";

    getStarsFromSurvivor.removeEventListener(
      "change",
      function clearAndCheckStar() {
        if (
          getTierFromSurvivor.value === "1" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "2"
        )
          updateTierOptionsToIfBeforePromote(2);
        else if (
          getTierFromSurvivor.value === "2" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "3"
        )
          updateTierOptionsToIfBeforePromote(3);
        else if (
          getTierFromSurvivor.value === "3" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(4);
        else if (
          getTierFromSurvivor.value === "4" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(5);
        else if (
          getTierFromSurvivor.value === "5" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(6);
        else if (
          getTierFromSurvivor.value === "6" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(7);
        else if (
          getTierFromSurvivor.value === "7" &&
          getStarsFromSurvivor.value === "24"
        )
          updateTierOptionsToIfBeforePromote(8);
        clearTo();
      }
    );
    getStarsFromSurvivor.replaceWith(createSelectElement);
    getStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );
    getStarsFromSurvivor.addEventListener(
      "change",
      function clearAndCheckStar() {
        if (
          getTierFromSurvivor.value === "1" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "2"
        )
          updateTierOptionsToIfBeforePromote(2);
        else if (
          getTierFromSurvivor.value === "2" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "3"
        )
          updateTierOptionsToIfBeforePromote(3);
        else if (
          getTierFromSurvivor.value === "3" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(4);
        else if (
          getTierFromSurvivor.value === "4" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(5);
        else if (
          getTierFromSurvivor.value === "5" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(6);
        else if (
          getTierFromSurvivor.value === "6" &&
          getSubTierFromSurvivor.value === "1" &&
          getStarsFromSurvivor.value === "4"
        )
          updateTierOptionsToIfBeforePromote(7);
        else if (
          getTierFromSurvivor.value === "7" &&
          getStarsFromSurvivor.value === "24"
        )
          updateTierOptionsToIfBeforePromote(8);
        clearTo();
      }
    );
    clearTo();
  }
}

getStarsFromSurvivor.addEventListener("change", function clearAndCheckStar() {
  if (
    getTierFromSurvivor.value === "1" &&
    getSubTierFromSurvivor.value === "1" &&
    getStarsFromSurvivor.value === "2"
  )
    updateTierOptionsToIfBeforePromote(2);
  else if (
    getTierFromSurvivor.value === "2" &&
    getSubTierFromSurvivor.value === "1" &&
    getStarsFromSurvivor.value === "3"
  )
    updateTierOptionsToIfBeforePromote(3);
  else if (
    getTierFromSurvivor.value === "3" &&
    getSubTierFromSurvivor.value === "1" &&
    getStarsFromSurvivor.value === "4"
  )
    updateTierOptionsToIfBeforePromote(4);
  else if (
    getTierFromSurvivor.value === "4" &&
    getSubTierFromSurvivor.value === "1" &&
    getStarsFromSurvivor.value === "4"
  )
    updateTierOptionsToIfBeforePromote(5);
  else if (
    getTierFromSurvivor.value === "5" &&
    getSubTierFromSurvivor.value === "1" &&
    getStarsFromSurvivor.value === "4"
  )
    updateTierOptionsToIfBeforePromote(6);
  else if (
    getTierFromSurvivor.value === "6" &&
    getSubTierFromSurvivor.value === "1" &&
    getStarsFromSurvivor.value === "4"
  )
    updateTierOptionsToIfBeforePromote(7);
  else if (
    getTierFromSurvivor.value === "7" &&
    getStarsFromSurvivor.value === "24"
  )
    updateTierOptionsToIfBeforePromote(8);
  clearTo();
});

getTierToSurvivor.addEventListener("change", () => {
  updateTierTo();
  checkSubTierFrom();
  if (
    getTierToSurvivor.value === "1" &&
    (getSubTierFromSurvivor.value !== "1" || getStarsFromSurvivor.value !== "2")
  )
    checkStarFrom();
  else if (
    getTierToSurvivor.value === "2" &&
    (getSubTierFromSurvivor.value !== "1" || getStarsFromSurvivor.value !== "2")
  )
    checkStarFrom();
  else if (
    (getTierToSurvivor.value === "3" ||
      getTierToSurvivor.value === "4" ||
      getTierToSurvivor.value === "5" ||
      getTierToSurvivor.value === "6") &&
    (getSubTierFromSurvivor.value !== "1" || getStarsFromSurvivor.value !== "2")
  )
    checkStarFrom();
  else if (getTierToSurvivor.value === "7") checkStarFrom();
  else if (getTierToSurvivor.value === "8") checkStarFrom();

  window.console.log("configure tier(to)");

  if (getTierToSurvivor.value === "1") {
    if (getStarsFromSurvivor.value === "2") {
      if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "3"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 2; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 2);
      } else if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "2"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 1; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 2);
      }
    }
  } else if (getTierFromSurvivor.value === "2") {
    if (getStarsFromSurvivor.value === "3") {
      if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "4"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 3; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 3);
      } else if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "3"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 2; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 3);
      } else if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "2"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 1; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 3);
      }
    }
  } else if (
    getTierToSurvivor.value === "3" ||
    getTierToSurvivor.value === "4" ||
    getTierToSurvivor.value === "5" ||
    getTierToSurvivor.value === "6"
  ) {
    if (getStarsFromSurvivor.value === "4") {
      if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "5"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 4; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 4);
      } else if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "4"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 3; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 4);
      } else if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "3"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 2; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 4);
      } else if (
        getTierFromSurvivor.value === getTierToSurvivor.value &&
        getSubTierFromSurvivor.value === "2"
      ) {
        let elements = "";
        const hiddenValue =
          "<option disabled hidden selected value=''>&mdash;</option>";
        elements += hiddenValue;

        for (let i = 1; i >= 1; i--) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getSubTierToSurvivor.innerHTML = elements;
        updateStarFromCheck(0, 4);
      }
    }
  }
});

getSubTierToSurvivor.addEventListener("change", () => {
  checkStarFrom();
  getStarsToSurvivor.value = "";
});

function updateTierTo() {
  switch (getTierToSurvivor.value) {
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
      updateSubTierOptionsTo("champion");
      updateStarOptionsTo(24);
      break;

    case "8":
      updateSubTierOptionsTo("peak");
      updateStarOptionsTo("peak");
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
    getSubTierToSurvivor.disabled = true;
    getSubTierToSurvivor.value = "";
  } else {
    getSubTierToSurvivor.innerHTML = "";
    let elements = "";
    const hiddenValue =
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
  }
}

function checkStarFrom() {
  if (getTierToSurvivor.value === "1") {
    switch (getStarsFromSurvivor.value) {
      case "0":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsFromSurvivor.value !== "3"
        )
          updateStarFromCheck(1, 2);
        else updateStarFromCheck(0, 2);
        break;
      case "1":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsFromSurvivor.value !== "3"
        )
          updateStarFromCheck(2, 2);
        else updateStarFromCheck(0, 2);
        break;
    }
  } else if (getTierToSurvivor.value === "2") {
    switch (getStarsFromSurvivor.value) {
      case "0":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsToSurvivor.value !== "4"
        )
          updateStarFromCheck(1, 3);
        else updateStarFromCheck(0, 3);
        break;
      case "1":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsToSurvivor.value !== "4"
        )
          updateStarFromCheck(2, 3);
        else updateStarFromCheck(0, 3);
        break;
      case "2":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsToSurvivor.value !== "4"
        )
          updateStarFromCheck(3, 3);
        else updateStarFromCheck(0, 3);
        break;
    }
  } else if (getTierToSurvivor.value === "7") {
    if (getTierFromSurvivor.value === getTierToSurvivor.value) {
      const loop = (star) => {
        let elements = "";
        const hiddenValue =
          "<option hidden disabled selected value>&mdash;</option>";
        elements += hiddenValue;

        for (let i = star + 1; i <= 24; i++) {
          const createOptionElement = `<option value="${i}">${i}</option>`;
          elements += createOptionElement;
        }

        getStarsToSurvivor.innerHTML = elements;
      };
      loop(parseInt(getStarsFromSurvivor.value));
    }
    if (getStarsFromSurvivor.value === "") updateStarOptionsTo(24);
  } else if (getTierToSurvivor.value === "8") {
    if (getTierFromSurvivor.value === getTierToSurvivor.value) {
      const starToPeak = parseInt(getStarsFromSurvivor.value) + 1;
      getStarsToSurvivor.value = starToPeak;
    }
  } else {
    switch (getStarsFromSurvivor.value) {
      case "0":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsToSurvivor.value !== "4"
        )
          updateStarFromCheck(1, 4);
        else updateStarFromCheck(0, 4);
        break;
      case "1":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsToSurvivor.value !== "4"
        )
          updateStarFromCheck(2, 4);
        else updateStarFromCheck(0, 4);
        break;
      case "2":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsToSurvivor.value !== "4"
        )
          updateStarFromCheck(3, 4);
        else updateStarFromCheck(0, 4);
        break;
      case "3":
        if (
          getSubTierFromSurvivor.value === getSubTierToSurvivor.value &&
          getStarsToSurvivor.value !== "4"
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
  createSelectElement.setAttribute("id", "survivor-to-star");
  createSelectElement.classList.add("select-to");
  createSelectElement.innerHTML = elements;
  createSelectElement.value = "";
  getStarsToSurvivor.replaceWith(createSelectElement);
  getStarsToSurvivor = window.document.querySelector(
    ".select-survivor .star-container .select-to"
  );
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

let priceRange = {};
buttonCalculateSurvivor.addEventListener("click", () => {});

function getPrice() {
  const tierFrom = parseInt(getTierFromSurvivor.value) || undefined;
  const subTierFrom = parseInt(getSubTierFromSurvivor.value) || undefined;
  const starFrom = parseInt(getStarsFromSurvivor.value) || undefined;
  const tierTo = parseInt(getTierToSurvivor.value) || undefined;
  const subTierTo = parseInt(getSubTierToSurvivor.value) || undefined;
  const starTo = parseInt(getStarsToSurvivor.value) || undefined;

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
