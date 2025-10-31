const introduction = window.document.querySelector(".introduction");
const introductionText =
  "Hi I'm Phoenix, an Identity V pro player from Philippines, welcome to my piloting service!";

let count = 0;
setTimeout(function typing() {
  if (count < introductionText.length) {
    introduction.textContent += introductionText[count];
    count++;
    if (introductionText[count] === ",") setTimeout(typing, 700);
    else setTimeout(typing, 80);
  }
}, 80);

//SURVIVOR
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

if (getTierFromSurvivor.value === "tier-2") console.log("hound");

//HUNTER
const getTierFromHunter = window.document.querySelector(
  ".select-hunter .tier-container .select-from"
);
const getSubTierFromHunter = window.document.querySelector(
  ".select-hunter .sub-tier-container .select-from"
);
const getStarsFromHunter = window.document.querySelector(
  ".select-hunter .star-container .select-from"
);

const getTierToHunter = window.document.querySelector(
  ".select-hunter .tier-container .select-to"
);
const getSubTierToHunter = window.document.querySelector(
  ".select-hunter .sub-tier-container .select-to"
);
const getStarsToHunter = window.document.querySelector(
  ".select-hunter .star-container .select-to"
);
