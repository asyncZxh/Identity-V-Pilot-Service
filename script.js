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
