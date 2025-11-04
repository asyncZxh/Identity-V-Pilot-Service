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
getSubTierFromSurvivor.addEventListener("change", () => {
  checkSubTier();
});
getStarsFromSurvivor.addEventListener("change", () => {
  checkStars();
});

// getTierToSurvivor.addEventListener("change", () => {});

function checkTier() {
  switch (getTierFromSurvivor.value) {
    case "tier-1":
      updateTierOptions(1);
      updateSubTierOptions(3);
      updateStarOptions(2);
      break;
    case "tier-2":
      updateTierOptions(2);
      updateSubTierOptions(4);
      updateStarOptions(3);
      break;
    case "tier-3":
      updateTierOptions(3);
      updateSubTierOptions(5);
      updateStarOptions(4);
      break;
    case "tier-4":
      updateTierOptions(4);
      updateSubTierOptions(5);
      updateStarOptions(4);
      break;
    case "tier-5":
      updateTierOptions(5);
      updateSubTierOptions(5);
      updateStarOptions(4);
      break;
    case "tier-6":
      updateTierOptions(6);
      updateSubTierOptions(5);
      updateStarOptions(4);
      break;
    case "tier-7":
      updateTierOptions(7);
      updateSubTierOptions("champion");
      updateStarOptions(24);
      break;
    case "peak-tier":
      updateTierOptions(8);
      updateSubTierOptions("peak");
      updateStarOptions("peak");
      break;
  }
}

function updateTierOptions(tier) {
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
}

function updateSubTierOptions(subTier) {
  if (subTier === "champion" || subTier === "peak") {
    getSubTierFromSurvivor.setAttribute("disabled", "true");
    getSubTierFromSurvivor.style.cursor = "not-allowed";
    getSubTierFromSurvivor.value = "";

    getSubTierToSurvivor.setAttribute("disabled", "true");
    getSubTierToSurvivor.style.cursor = "not-allowed";
    getSubTierToSurvivor.value = "";
  } else {
    const getSubTier = () => {
      {
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
      }
      {
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
      }
    };
    getSubTier();
  }
}

function updateStarOptions(star) {
  if (star !== "peak") {
    const getStar = () => {
      {
        getStarsFromSurvivor.innerHTML = "";
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
        window.document
          .querySelector(".star-container .select-from")
          .replaceWith(createSelectElement);
      }
      {
        getStarsToSurvivor.innerHTML = "";
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
        window.document
          .querySelector(".star-container .select-to")
          .replaceWith(createSelectElement);
      }
    };
    getStar();
  } else {
    {
      const createInputElement = window.document.createElement("input");
      createInputElement.setAttribute("id", "survivor-from-sub-tier");
      createInputElement.setAttribute("type", "number");
      createInputElement.setAttribute("min", "25");
      createInputElement.value = "25";
      createInputElement.placeholder = "enter star";
      createInputElement.classList.add("select-from");
      window.document
        .querySelector(".star-container .select-from")
        .replaceWith(createInputElement);
    }
    {
      const createInputElement = window.document.createElement("input");
      createInputElement.setAttribute("id", "survivor-to-sub-tier");
      createInputElement.setAttribute("type", "number");
      createInputElement.setAttribute("min", "26");
      createInputElement.value = "26";
      createInputElement.placeholder = "enter star";
      createInputElement.classList.add("select-to");
      window.document
        .querySelector(".star-container .select-to")
        .replaceWith(createInputElement);
    }
  }
}

function checkSubTier() {
  switch (getSubTierFromSurvivor.value) {
    case "5":
      updateSubTierOptionsTo(5);
      break;
    case "4":
      updateSubTierOptionsTo(4);
      break;
    case "3":
      updateSubTierOptionsTo(3);
      break;
    case "2":
      updateSubTierOptionsTo(2);
      break;
    case "1":
      updateSubTierOptionsTo(1);
      break;
  }
}

function updateSubTierOptionsTo(subTier) {
  getSubTierToSurvivor.innerHTML = "";
  let elements = "";
  const hiddenValue = `<option disabled hidden selected value>&mdash;</option>`;
  elements += hiddenValue;
  for (let i = subTier; i >= 1; i--) {
    const createOptionElement = `<option value="${i}">${i}</option>`;
    elements += createOptionElement;
  }
  getSubTierToSurvivor.innerHTML = elements;
}

function checkStars() {
  if (getTierFromSurvivor.value === "1") {
    switch (getStarsFromSurvivor.value) {
    }
  } else if (getTierFromSurvivor.value === "2") {
    switch (getStarsFromSurvivor.value) {
    }
  } else if (getTierFromSurvivor.value === "3") {
    switch (getStarsFromSurvivor.value) {
    }
  } else if (getTierFromSurvivor.value === "4") {
    switch (getStarsFromSurvivor.value) {
    }
  } else if (getTierFromSurvivor.value === "5") {
    switch (getStarsFromSurvivor.value) {
    }
  } else if (getTierFromSurvivor.value === "6") {
    switch (getStarsFromSurvivor.value) {
    }
  } else if (getTierFromSurvivor.value === "7") {
    switch (getStarsFromSurvivor.value) {
    }
  }
}
