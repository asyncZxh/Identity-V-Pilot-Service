const introduction = window.document.querySelector(".introduction");
const introductionText =
  "Hi I'm PHOENIX, an Identity V pro player from Philippines, welcome to my piloting service!";

let count = 0;
setTimeout(function typing() {
  if (count < introductionText.length) {
    if (count >= 7 && count <= 13) {
      const span = window.document.createElement("span");
      span.textContent = introductionText[count];
      span.style.color = "#ff6b00";
      introduction.append(span);
      count++;
      if (introductionText[count] === ",") setTimeout(typing, 700);
      else setTimeout(typing, 80);
    } else {
      const span = `<span>${introductionText[count]}</span>`;
      introduction.innerHTML += span;
      count++;
      if (introductionText[count] === ",") setTimeout(typing, 700);
      else setTimeout(typing, 80);
    }
  }
}, 80);
