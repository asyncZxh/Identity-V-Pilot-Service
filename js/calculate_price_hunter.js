import {
  getTierFromHunter,
  getSubTierFromHunter,
  getStarsFromHunter,
  getTierToHunter,
  getSubTierToHunter,
  getStarsToHunter,
  buttonCalculateHunter,
} from "./hunter.js";

const hunterPrice = [
  [
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
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
    [35, 35, 35, 35, 35],
    [35, 35, 35, 35, 35],
    [35, 35, 35, 35, 35],
    [35, 35, 35, 35, 35],
    [35, 35, 35, 35, 35],
  ],
  [
    [45, 45, 45, 45, 45],
    [45, 45, 45, 45, 45],
    [45, 45, 45, 45, 45],
    [45, 45, 45, 45, 45],
    [45, 45, 45, 45, 45],
  ],
  [
    [60, 60, 60, 60, 60],
    [60, 60, 60, 60, 60],
    [60, 60, 60, 60, 60],
    [60, 60, 60, 60, 60],
    [60, 60, 60, 60, 60],
  ],
  [70],
  [80],
];
const totalPriceContainer = window.document.querySelector(
  ".total-price-hunter"
);
const currencySelectionHunter = window.document.querySelector(
  ".select-hunter .currency-container .currency.convert"
);

let isProcessing = false;
