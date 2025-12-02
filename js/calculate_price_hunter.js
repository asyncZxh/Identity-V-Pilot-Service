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
buttonCalculateHunter.addEventListener("click", () => {
  if (!isProcessing) {
    isProcessing = true;
    totalPriceContainer.innerHTML = "";
    const loading = window.document.createElement("img");
    loading.src = "svgs/idv_loading.svg";
    loading.alt = "loading";
    loading.classList.add("loading");
    totalPriceContainer.appendChild(loading);
    setTimeout(() => {
      const priceRange = getPrice();
      window.console.log(priceRange);
      if (
        priceRange &&
        priceRange.From["Sub-tier"] !== undefined &&
        priceRange.To["Sub-tier"] !== undefined
      ) {
        let price = 0;
        let stars = 0;
        if (
          priceRange.From.Tier === priceRange.To.Tier &&
          priceRange.From["Sub-tier"] === priceRange.To["Sub-tier"]
        ) {
          const start = hunterPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1, priceRange.To.Star + 1);
          window.console.log(start);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);

          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        } else if (
          priceRange.From.Tier === priceRange.To.Tier &&
          priceRange.isOneSubtierAhead()
        ) {
          const start = hunterPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1);
          window.console.log(start);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          const end = hunterPrice[priceRange.To.Tier][
            priceRange.To["Sub-tier"]
          ].slice(0, priceRange.To.Star + 1);
          window.console.log(end);
          end.forEach((e) => {
            stars++;
            price += e;
          });

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        } else if (
          priceRange.From.Tier === priceRange.To.Tier &&
          !priceRange.isOneSubtierAhead()
        ) {
          const start = hunterPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1);
          window.console.log(start);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          const getMid = () => {
            const array = [];
            for (
              let st = priceRange.From["Sub-tier"] + 1;
              st < priceRange.To["Sub-tier"];
              st++
            ) {
              array.push(hunterPrice[priceRange.From.Tier][st].slice());
            }
            return array;
          };
          const mid = getMid();
          window.console.log(mid);
          mid.forEach((e) =>
            e.forEach((c) => {
              stars++;
              price += c;
            })
          );

          const end = hunterPrice[priceRange.To.Tier][
            priceRange.To["Sub-tier"]
          ].slice(0, priceRange.To.Star + 1);
          window.console.log(end);
          end.forEach((e) => {
            stars++;
            price += e;
          });

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        } else if (
          priceRange.From.Tier !== priceRange.To.Tier &&
          priceRange.isOneTierAhead()
        ) {
          const start = hunterPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1);
          window.console.log(start);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          const firstMid = hunterPrice[priceRange.From.Tier].slice(
            priceRange.From["Sub-tier"] + 1
          );
          window.console.log(firstMid);
          firstMid.forEach((e) => {
            e.forEach((c) => {
              stars++;
              price += c;
            });
          });

          const secondMid = hunterPrice[priceRange.To.Tier].slice(
            0,
            priceRange.To["Sub-tier"]
          );
          window.console.log(secondMid);
          secondMid.forEach((e) => {
            e.forEach((c) => {
              stars++;
              price += c;
            });
          });

          const end = hunterPrice[priceRange.To.Tier][
            priceRange.To["Sub-tier"]
          ].slice(0, priceRange.To.Star + 1);
          window.console.log(end);
          end.forEach((e) => {
            stars++;
            price += e;
          });

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        } else if (
          priceRange.From.Tier !== priceRange.To.Tier &&
          !priceRange.isOneTierAhead()
        ) {
          const start = hunterPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1);
          window.console.log(start);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          const firstMid = hunterPrice[priceRange.From.Tier].slice(
            priceRange.From["Sub-tier"] + 1
          );
          window.console.log(firstMid);
          firstMid.forEach((e) => {
            e.forEach((c) => {
              stars++;
              price += c;
            });
          });

          const getMid = () => {
            const array = [];
            for (
              let t = priceRange.From.Tier + 1;
              t < priceRange.To.Tier;
              t++
            ) {
              for (let st = 0; st < hunterPrice[t].length; st++) {
                array.push(hunterPrice[t][st].slice());
              }
            }
            return array;
          };
          const mid = getMid();
          window.console.log(mid);
          mid.forEach((e) =>
            e.forEach((j) => {
              stars++;
              price += j;
            })
          );

          const lastMid = hunterPrice[priceRange.To.Tier].slice(
            0,
            priceRange.To["Sub-tier"]
          );
          window.console.log(lastMid);
          lastMid.forEach((e) => {
            e.forEach((c) => {
              stars++;
              price += c;
            });
          });

          const end = hunterPrice[priceRange.To.Tier][
            priceRange.To["Sub-tier"]
          ].slice(0, priceRange.To.Star + 1);
          window.console.log(end);
          end.forEach((e) => {
            stars++;
            price += e;
          });
          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        }
      } else if (
        priceRange &&
        priceRange.From["Sub-tier"] !== undefined &&
        priceRange.To["Sub-tier"] === undefined
      ) {
        let price = 0;
        let stars = 0;
        if (priceRange.To.Tier === 6) {
          const start = hunterPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1);
          window.console.log(start);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          const firstMid = hunterPrice[priceRange.From.Tier].slice(
            priceRange.From["Sub-tier"] + 1
          );
          window.console.log(firstMid);
          firstMid.forEach((e) => {
            e.forEach((c) => {
              stars++;
              price += c;
            });
          });

          const getLastMid = () => {
            const array = [];
            for (
              let t = priceRange.From.Tier + 1;
              t < priceRange.To.Tier;
              t++
            ) {
              for (let st = 0; st < hunterPrice[t].length; st++) {
                array.push(hunterPrice[t][st].slice());
              }
            }
            return array;
          };
          const lastMid = getLastMid();
          window.console.log(lastMid);
          lastMid.forEach((e) =>
            e.forEach((j) => {
              stars++;
              price += j;
            })
          );

          const end = hunterPrice[priceRange.To.Tier].slice(
            0,
            priceRange.To.Star + 1
          );
          window.console.log(end);
          end.forEach((e) => {
            stars++;
            price += e;
          });

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        } else if (priceRange.To.Tier === 7) {
          const start = hunterPrice[priceRange.From.Tier][
            priceRange.From["Sub-tier"]
          ].slice(priceRange.From.Star + 1);
          window.console.log(start);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          const firstMid = hunterPrice[priceRange.From.Tier].slice(
            priceRange.From["Sub-tier"] + 1
          );
          window.console.log(firstMid);
          firstMid.forEach((e) => {
            e.forEach((c) => {
              stars++;
              price += c;
            });
          });

          const getMid = () => {
            const array = [];
            for (
              let t = priceRange.From.Tier + 1;
              t < priceRange.To.Tier - 1;
              t++
            ) {
              for (let st = 0; st < hunterPrice[t].length; st++) {
                array.push(hunterPrice[t][st].slice());
              }
            }
            return array;
          };
          const mid = getMid();
          window.console.log(mid);
          mid.forEach((e) =>
            e.forEach((j) => {
              stars++;
              price += j;
            })
          );

          const lastMid = hunterPrice[priceRange.To.Tier - 1].slice();
          window.console.log(lastMid);
          lastMid.forEach((e) => {
            stars++;
            price += e;
          });

          const end =
            (priceRange.To.Star - 24) * hunterPrice[priceRange.To.Tier];
          window.console.log(end);
          stars += priceRange.To.Star - 24;
          price += end;

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        }
      } else if (
        priceRange &&
        priceRange.From["Sub-tier"] === undefined &&
        priceRange.To["Sub-tier"] === undefined
      ) {
        let price = 0;
        let stars = 0;
        if (priceRange.From.Tier === 6 && priceRange.To.Tier === 6) {
          const start = hunterPrice[priceRange.From.Tier].slice(
            priceRange.From.Star + 1,
            priceRange.To.Star + 1
          );
          window.console.log(array);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        } else if (priceRange.From.Tier === 6 && priceRange.To.Tier === 7) {
          const start = hunterPrice[priceRange.From.Tier].slice(
            priceRange.From.Star + 1
          );
          window.console.log(start);
          start.forEach((e) => {
            stars++;
            price += e;
          });

          const end =
            (priceRange.To.Star - 24) * hunterPrice[priceRange.To.Tier];
          window.console.log(end);
          stars += priceRange.To.Star - 24;
          price += end;

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        } else if (priceRange.From.Tier === 7 && priceRange.To.Tier === 7) {
          const start =
            (priceRange.From.Star -
              priceRange.From.Star +
              (priceRange.To.Star - priceRange.From.Star)) *
            hunterPrice[priceRange.To.Tier];
          window.console.log(start);
          stars +=
            priceRange.From.Star -
            priceRange.From.Star +
            (priceRange.To.Star - priceRange.From.Star);
          price += start;

          window.console.log(`Stars: ${stars}`);
          window.console.log(`Price: ${price}`);
          if (currencySelectionHunter.value === "PHP")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-php">&#8369; ${price.toLocaleString()}</p>`;
          else if (currencySelectionHunter.value === "USD")
            totalPriceContainer.innerHTML = `<p style="color: #fff; font-weight: 700" id="price-usd">&#36; ${(
              price * 0.017
            ).toLocaleString("en-US", { maximumFractionDigits: 2 })}</p>`;
        }
      }
      setTimeout(() => (isProcessing = false), 50);
    }, 2300);
  }
});

function getPrice() {
  let tierFrom = parseInt(getTierFromHunter.value) || undefined;
  let subTierFrom = parseInt(getSubTierFromHunter.value) || undefined;
  let starFrom = getStarsFromHunter.value || undefined;
  let tierTo = parseInt(getTierToHunter.value) || undefined;
  let subTierTo = parseInt(getSubTierToHunter.value) || undefined;
  let starTo = getStarsToHunter.value || undefined;

  if (getTierFromHunter.value !== "8" && getTierToHunter.value === "8") {
    if (parseInt(getStarsToHunter.value) < 25) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Invalid star input");
      }, 50);
      return undefined;
    }
  } else if (
    getTierFromHunter.value !== "7" &&
    getTierFromHunter.value !== "8" &&
    getTierToHunter.value !== "7" &&
    getTierToHunter.value !== "8"
  ) {
    if (
      !tierFrom ||
      !subTierFrom ||
      !starFrom ||
      !tierTo ||
      !subTierTo ||
      !starTo
    ) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Missing required fields");
      }, 50);
      return undefined;
    }
  } else if (
    getTierFromHunter.value !== "7" &&
    getTierFromHunter.value !== "8" &&
    (getTierToHunter.value === "7" || getTierToHunter.value === "8")
  ) {
    if (!tierFrom || !subTierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Missing required fields");
      }, 50);
      return undefined;
    }
  } else if (getTierFromHunter.value === "8" && getTierToHunter.value === "8") {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Missing required fields");
      }, 50);
      return undefined;
    } else if (parseInt(getStarsFromHunter.value) < 25) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Invalid star input");
      }, 50);
      return undefined;
    } else if (
      parseInt(getStarsToHunter.value) < parseInt(getStarsFromHunter.value)
    ) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Tier: TITAN\nFROM must be less than TO");
      }, 50);
      return undefined;
    } else if (
      parseInt(getStarsToHunter.value) == parseInt(getStarsFromHunter.value)
    ) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Tier: TITAN\nFROM must not be equal to TO");
      }, 50);
      return undefined;
    }
  } else if (
    getTierFromHunter.value === "7" ||
    getTierFromHunter.value === "8"
  ) {
    if (!tierFrom || !starFrom || !tierTo || !starTo) {
      totalPriceContainer.innerHTML = "";
      setTimeout(() => {
        window.alert("Missing required fields");
      }, 50);
      return undefined;
    }
  }

  const modifySubTier = () => {
    if (tierFrom === 1) {
      switch (subTierFrom) {
        case 3:
          subTierFrom = 0;
          break;
        case 2:
          subTierFrom = 1;
          break;
        case 1:
          subTierFrom = 2;
          break;
      }
    } else if (tierFrom === 2) {
      switch (subTierFrom) {
        case 4:
          subTierFrom = 0;
          break;
        case 3:
          subTierFrom = 1;
          break;
        case 2:
          subTierFrom = 2;
          break;
        case 1:
          subTierFrom = 3;
          break;
      }
    } else if (tierFrom !== 7 && tierFrom !== 8) {
      switch (subTierFrom) {
        case 5:
          subTierFrom = 0;
          break;
        case 4:
          subTierFrom = 1;
          break;
        case 3:
          subTierFrom = 2;
          break;
        case 2:
          subTierFrom = 3;
          break;
        case 1:
          subTierFrom = 4;
          break;
      }
    }

    if (tierTo === 1) {
      switch (subTierTo) {
        case 3:
          subTierTo = 0;
          break;
        case 2:
          subTierTo = 1;
          break;
        case 1:
          subTierTo = 2;
          break;
      }
    } else if (tierTo === 2) {
      switch (subTierTo) {
        case 4:
          subTierTo = 0;
          break;
        case 3:
          subTierTo = 1;
          break;
        case 2:
          subTierTo = 2;
          break;
        case 1:
          subTierTo = 3;
          break;
      }
    } else if (tierTo !== 7 && tierTo !== 8) {
      switch (subTierTo) {
        case 5:
          subTierTo = 0;
          break;
        case 4:
          subTierTo = 1;
          break;
        case 3:
          subTierTo = 2;
          break;
        case 2:
          subTierTo = 3;
          break;
        case 1:
          subTierTo = 4;
          break;
      }
    }
  };
  modifySubTier();
  tierFrom--;
  tierTo--;
  starFrom = parseInt(starFrom);
  starTo = parseInt(starTo);

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
    isOneTierAhead() {
      return this.From.Tier + 1 === this.To.Tier;
    },
    isOneSubtierAhead() {
      if (getTierFromHunter.value === getTierToHunter.value)
        return this.From["Sub-tier"] + 1 === this.To["Sub-tier"];
      return 0;
    },
  };
}
