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
const noteList = window.document.querySelector(".note-list");
const selectFaction = window.document.querySelector(".select-faction");

let isOpen = false;
openNoteBtn.addEventListener("click", () => {
  if (!isOpen) {
    renderNoteList();
    refreshStarsEl(
      getStarsFromSurvivor,
      getStarsToSurvivor,
      getStarsFromHunter,
      getStarsToHunter
    );
    refreshSubTierEl(
      getSubTierFromSurvivor,
      getSubTierToSurvivor,
      getSubTierFromHunter,
      getSubTierToHunter
    );
    isOpen = true;
    note.classList.add("open-note");
    openNoteBtnContainer.style.zIndex = 0;
    note.style.zIndex = 1;
    selectFaction.classList.add("disabled");
    window.document
      .querySelector(".survivor-header-select")
      .classList.add("disabled");
    window.document
      .querySelector(".hunter-header-select")
      .classList.add("disabled");
    window.document
      .querySelector(".total-price-survivor")
      .classList.add("disabled");
    window.document
      .querySelector(".total-price-hunter")
      .classList.add("disabled");
    window.document.querySelector(".select-survivor .arrow").style.fill =
      "#949494ff";
    window.document.querySelector(".select-hunter .arrow").style.fill =
      "#949494ff";
    inputs.forEach((e, i) => {
      if (i === 1) {
      }
      if (i !== inputs.length / 2 - 1 && i !== inputs.length - 1) {
        e.tabindex = "-1";
        e.style.pointerEvents = "none";
        e.style.cursor = "auto";
        e.style.backgroundColor = "#949494ff";
        if (i === inputs.length / 2 - 3 || i === inputs.length - 3)
          e.style.backgroundColor = "#949494ff";
        if (i === 1 || i === 4 || i === 10 || i === 13) {
          if ((e.disabled = true)) return;
        }
        e.disabled = true;
      } else {
        e.style.color = "#818083ff";
        e.style.backgroundColor = "#949494ff";
      }
    });
    setTimeout(() => (isOpen = false), 300);
  }
});

closeNoteBtn.addEventListener("click", () => {
  if (!isOpen) {
    selectFaction.classList.remove("disabled");
    window.document
      .querySelector(".survivor-header-select")
      .classList.remove("disabled");
    window.document
      .querySelector(".hunter-header-select")
      .classList.remove("disabled");
    window.document
      .querySelector(".total-price-survivor")
      .classList.remove("disabled");
    window.document
      .querySelector(".total-price-hunter")
      .classList.remove("disabled");
    window.document.querySelector(".select-survivor .arrow").style.fill =
      "#fff";
    window.document.querySelector(".select-hunter .arrow").style.fill = "#fff";
    isOpen = true;
    note.classList.remove("open-note");
    inputs.forEach((e, i) => {
      if (i !== inputs.length / 2 - 1 && i !== inputs.length - 1) {
        e.tabindex = "0";
        e.style.pointerEvents = "auto";
        e.removeAttribute("disabled");
        e.style.backgroundColor = "#fff";
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

function refreshStarsEl(el1, el2, el3, el4) {
  inputs[2] = el1;
  inputs[5] = el2;
  inputs[11] = el3;
  inputs[14] = el4;
}

function refreshSubTierEl(el1, el2, el3, el4) {
  inputs[1] = el1;
  inputs[4] = el2;
  inputs[10] = el3;
  inputs[13] = el4;
}

function renderNoteList() {
  let noteContent = "";
  function renderTier(tier, nextTier, subTier, nextSubTier, star) {
    {
      for (subTier; subTier >= 1; subTier--) {
        if (subTier === 1) {
          noteContent += `<li>${tier} ${subTier} - ${star} <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="star"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg> &nbsp; &#61; &nbsp; ${nextTier} ${nextSubTier} - 0 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="star"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>`;
          break;
        }
        noteContent += `<li>${tier} ${subTier} - ${star} <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="star"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg> &nbsp; &#61; &nbsp; ${tier} ${subTier - 1} - 0 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="star"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                    </svg>`;
      }
    }
  }

  //render tier(survivor)
  renderTier("Bee", "Hound", 3, 4, 3);
  renderTier("Hound", "Elk", 4, 5, 4);
  renderTier("Elk", "Mammoth", 5, 5, 5);
  renderTier("Mammoth", "Griffin", 5, 5, 5);
  renderTier("Griffin", "Alicorn", 5, 5, 5);
  renderTier("Alicorn", "Champion", 5, "", 5);

  //render tier(hunter)
  renderTier("Spider", "Cobra", 3, 4, 3);
  renderTier("Cobra", "Crocodile", 4, 5, 4);
  renderTier("Crocodile", "Sabertooth", 5, 5, 5);
  renderTier("Sabertooth", "Manticore", 5, 5, 5);
  renderTier("Manticore", "Cyclops", 5, 5, 5);
  renderTier("Cyclops", "Evil Dragon", 5, "", 5);

  noteList.innerHTML = noteContent;
}
