import {
  getTierFromSurvivor,
  getSubTierFromSurvivor,
  getStarsFromSurvivor,
  getTierToSurvivor,
  getSubTierToSurvivor,
  getStarsToSurvivor,
  buttonCalculateSurvivor,
  currencySelectionSurvivorSelect,
  currencySelectionSurvivorIcon,
} from "./survivor.js";

import {
  getTierFromHunter,
  getSubTierFromHunter,
  getStarsFromHunter,
  getTierToHunter,
  getSubTierToHunter,
  getStarsToHunter,
  buttonCalculateHunter,
  currencySelectionHunterSelect,
  currencySelectionHunterIcon,
} from "./hunter.js";

const inputs = [
  getTierFromSurvivor,
  getSubTierFromSurvivor,
  getStarsFromSurvivor,
  getTierToSurvivor,
  getSubTierToSurvivor,
  getStarsToSurvivor,
  buttonCalculateSurvivor,
  currencySelectionSurvivorSelect,
  currencySelectionSurvivorIcon,
  getTierFromHunter,
  getSubTierFromHunter,
  getStarsFromHunter,
  getTierToHunter,
  getSubTierToHunter,
  getStarsToHunter,
  buttonCalculateHunter,
  currencySelectionHunterSelect,
  currencySelectionHunterIcon,
];
const openNoteBtnContainer = window.document.querySelector(
  ".note-btn-container"
);
const openNoteBtn = window.document.querySelector(".note-btn");
const closeNoteBtn = window.document.querySelector(".close-btn");
const note = window.document.querySelector(".note");
const noteContent = `<li>Bee 3 - 3 star = Bee 2 - 0 star</li>
                     <li>Bee 2 - 3 star = Bee 1 - 0 star</li>
                     <li>Bee 1 - 3 star = Hound 4 - 0 star</li>
                     <li>Hound 4 - 4 star = Hound 3 - 0 star</li>
                     <li>Hound 3 - 4 star = Hound 2 - 0 star</li>
                     <li>Hound 2 - 4 star = Hound 1 - 0 star</li>
                     <li>Hound 1 - 4 star = Elk 5 - 0 star</li>
                     <li>Elk 5 - 5 star = Elk 4 - 0 star</li>
                     <li>Elk 4 - 5 star = Elk 3 - 0 star</li>
                     <li>Elk 3 - 5 star = Elk 2 - 0 star</li>
                     <li>Elk 2 - 5 star = Elk 1 - 0 star</li>
                     <li>Elk 1 - 5 star = Mammoth 5 - 0 star</li>
                     <li>Mammoth 5 - 5 star = Mammoth 4 - 0 star</li>
                     <li>Mammoth 4 - 5 star = Mammoth 3 - 0 star</li>
                     <li>Mammoth 3 - 5 star = Mammoth 2 - 0 star</li>
                     <li>Mammoth 2 - 5 star = Mammoth 1 - 0 star</li>
                     <li>Mammoth 1 - 5 star = Griffin 5 - 0 star</li>
                     <li>Griffin 5 - 5 star = Griffin 4 - 0 star</li>
                     <li>Griffin 4 - 5 star = Griffin 3 - 0 star</li>
                     <li>Griffin 3 - 5 star = Griffin 2 - 0 star</li>
                     <li>Griffin 2 - 5 star = Griffin 1 - 0 star</li>
                     <li>Griffin 1 - 5 star = Alicorn 5 - 0 star</li>
                     <li>Alicorn 5 - 5 star = Alicorn 4 - 0 star</li>
                     <li>Alicorn 4 - 5 star = Alicorn 3 - 0 star</li>
                     <li>Alicorn 3 - 5 star = Alicorn 2 - 0 star</li>
                     <li>Alicorn 2 - 5 star = Alicorn 1 - 0 star</li>
                     <li>Alicorn 1 - 5 star = Champion - 0 star</li>
                     <li>Spider 3 - 3 star = Spider 2 - 0 star</li>
                     <li>Spider 2 - 3 star = Spider 1 - 0 star</li>
                     <li>Spider 1 - 3 star = Cobra 4 - 0 star</li>
                     <li>Cobra 4 - 4 star = Cobra 3 - 0 star</li>
                     <li>Cobra 3 - 4 star = Cobra 2 - 0 star</li>
                     <li>Cobra 2 - 4 star = Cobra 1 - 0 star</li>
                     <li>Cobra 1 - 4 star = Crocodile 5 - 0 star</li>
                     <li>Crocodile 5 - 5 star = Crocodile 4 - 0 star</li>
                     <li>Crocodile 4 - 5 star = Crocodile 3 - 0 star</li>
                     <li>Crocodile 3 - 5 star = Crocodile 2 - 0 star</li>
                     <li>Crocodile 2 - 5 star = Crocodile 1 - 0 star</li>
                     <li>Crocodile 1 - 5 star = Sabertooth 5 - 0 star</li>
                     <li>Sabertooth 5 - 5 star = Sabertooth 4 - 0 star</li>
                     <li>Sabertooth 4 - 5 star = Sabertooth 3 - 0 star</li>
                     <li>Sabertooth 3 - 5 star = Sabertooth 2 - 0 star</li>
                     <li>Sabertooth 2 - 5 star = Sabertooth 1 - 0 star</li>
                     <li>Sabertooth 1 - 5 star = Manticore 5 - 0 star</li>
                     <li>Manticore 5 - 5 star = Manticore 4 - 0 star</li>
                     <li>Manticore 4 - 5 star = Manticore 3 - 0 star</li>
                     <li>Manticore 3 - 5 star = Manticore 2 - 0 star</li>
                     <li>Manticore 2 - 5 star = Manticore 1 - 0 star</li>
                     <li>Manticore 1 - 5 star = Cyclops 5 - 0 star</li>
                     <li>Cyclops 5 - 5 star = Cyclops 4 - 0 star</li>
                     <li>Cyclops 4 - 5 star = Cyclops 3 - 0 star</li>
                     <li>Cyclops 3 - 5 star = Cyclops 2 - 0 star</li>
                     <li>Cyclops 2 - 5 star = Cyclops 1 - 0 star</li>
                     <li>Cyclops 1 - 5 star = Evil Dragon - 0 star</li>`;
const noteList = window.document.querySelector(".note-list");

noteList.innerHTML = noteContent;
let isOpen = false;
openNoteBtn.addEventListener("click", () => {
  inputs[2] = window.document.querySelector(
    ".select-survivor .star-container .select-from"
  );
  inputs[5] = window.document.querySelector(
    ".select-survivor .star-container .select-to"
  );
  inputs[11] = window.document.querySelector(
    ".select-hunter .star-container .select-from"
  );
  inputs[14] = window.document.querySelector(
    ".select-hunter .star-container .select-to"
  );
  if (!isOpen) {
    const reQueryGetStarsFromSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-from"
    );
    const reQueryGetStarsToSurvivor = window.document.querySelector(
      ".select-survivor .star-container .select-to"
    );
    const reQuerygetStarsFromHunter = window.document.querySelector(
      ".select-hunter .star-container .select-from"
    );
    const reQuerygetStarsToHunter = window.document.querySelector(
      ".select-hunter .star-container .select-to"
    );
    isOpen = true;
    note.classList.add("open-note");
    openNoteBtnContainer.style.zIndex = 0;
    note.style.zIndex = 1;
    inputs.forEach((e, i) => {
      if (i !== inputs.length / 2 - 1 && i !== inputs.length - 1) {
        e.tabindex = "-1";
        e.style.pointerEvents = "none";
        e.setAttribute("disabled", "true");
        if (i === inputs.length / 2 - 3 || i === inputs.length - 3)
          e.style.backgroundColor = "#acabb0";
      } else {
        e.style.color = "#818083ff";
        e.style.backgroundColor = "#acabb0";
      }
    });
    setTimeout(() => (isOpen = false), 300);
  }
});

closeNoteBtn.addEventListener("click", () => {
  if (!isOpen) {
    isOpen = true;
    note.classList.remove("open-note");
    inputs.forEach((e, i) => {
      if (i !== inputs.length / 2 - 1 && i !== inputs.length - 1) {
        e.tabindex = "0";
        e.style.pointerEvents = "auto";
        e.removeAttribute("disabled");
        if (i === inputs.length / 2 - 3 || i === inputs.length - 3)
          e.style.backgroundColor = "#fff";
      } else {
        e.style.color = "#000";
        e.style.backgroundColor = "#fff";
      }
    });
    setTimeout(() => {
      openNoteBtnContainer.style.zIndex = 2;
      note.style.zIndex = -1;
      isOpen = false;
    }, 300);
  }
});
