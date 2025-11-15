const openNoteBtn = window.document.querySelector(".note-btn");
const closeNoteBtn = window.document.querySelector(".close-btn");
const note = window.document.querySelector(".note");
const noteContent = `<li>Bee 3 - 3 stars = Bee 2 - 0 star</li><li>Bee 2 - 3 stars = Bee 1 - 0 star</li><li>Bee 1 - 3 stars = Hound 4 - 0 star</li>
                    <li>Hound 4 - 4 stars = Hound 3 - 0 star</li><li>Hound 3 - 4 stars = Hound 2 - 0 star</li><li>Hound 2 - 4 stars = Hound 1 - 0 star</li><li>Hound 1 - 4 stars = Elk 5 - 0 star</li>
                    <li>Elk 5 - 5 stars = Elk 4 - 0 star</li><li>Elk 4 - 5 stars = Elk 3 - 0 star</li><li>Elk 3 - 5 stars = Elk 2 - 0 star</li><li>Elk 2 - 5 stars = Elk 1 - 0 star</li><li>Elk 1 - 5 stars = Mammoth 5 - 0 star</li>
                    <li>Mammoth 5 - 5 stars = Mammoth 4 - 0 star</li><li>Mammoth 4 - 5 stars = Mammoth 3 - 0 star</li><li>Mammoth 3 - 5 stars = Mammoth 2 - 0 star</li><li>Mammoth 2 - 5 stars = Mammoth 1 - 0 star</li><li>Mammoth 1 - 5 stars = Alicorn 5 - 0 star</li>
                    <li>Alicorn 5 - 5 stars = Alicorn 4 - 0 star</li><li>Alicorn 4 - 5 stars = Alicorn 3 - 0 star</li><li>Alicorn 3 - 5 stars = Alicorn 2 - 0 star</li><li>Alicorn 2 - 5 stars = Alicorn 1 - 0 star</li><li>Alicorn 1 - 5 stars = Champion - 0 star</li>
                    <li>Spider 3 - 3 stars = Spider 2 - 0 star</li><li>Spider 2 - 3 stars = Spider 1 - 0 star</li><li>Spider 1 - 3 stars = Cobra 4 - 0 star</li>
                    <li>Cobra 4 - 4 stars = Cobra 3 - 0 star</li><li>Cobra 3 - 4 stars = Cobra 2 - 0 star</li><li>Cobra 2 - 4 stars = Cobra 1 - 0 star</li><li>Cobra 1 - 4 stars = Crocodile 5 - 0 star</li>
                    <li>Crocodile 5 - 5 stars = Crocodile 4 - 0 star</li><li>Crocodile 4 - 5 stars = Crocodile 3 - 0 star</li><li>Crocodile 3 - 5 stars = Crocodile 2 - 0 star</li><li>Crocodile 2 - 5 stars = Crocodile 1 - 0 star</li><li>Crocodile 1 - 5 stars = Sabertooth 5 - 0 star</li>
                    <li>Sabertooth 5 - 5 stars = Sabertooth 4 - 0 star</li><li>Sabertooth 4 - 5 stars = Sabertooth 3 - 0 star</li><li>Sabertooth 3 - 5 stars = Sabertooth 2 - 0 star</li><li>Sabertooth 2 - 5 stars = Sabertooth 1 - 0 star</li><li>Sabertooth 1 - 5 stars = Cyclops 5 - 0 star</li>
                    <li>Cyclops 5 - 5 stars = Cyclops 4 - 0 star</li><li>Cyclops 4 - 5 stars = Cyclops 3 - 0 star</li><li>Cyclops 3 - 5 stars = Cyclops 2 - 0 star</li><li>Cyclops 2 - 5 stars = Cyclops 1 - 0 star</li><li>Cyclops 1 - 5 stars = Evil Dragon - 0 star</li>`;
const noteList = window.document.querySelector(".note-list");

let isOpen = false;
openNoteBtn.addEventListener("click", () => {
  if (!isOpen) {
    isOpen = true;
    note.classList.add("open-note");
    openNoteBtn.style.zIndex = 0;
    setTimeout(() => (isOpen = false), 500);
  }
});

closeNoteBtn.addEventListener("click", () => {
  if (!isOpen) {
    isOpen = true;
    note.classList.remove("open-note");
    openNoteBtn.style.zIndex = 2;
    setTimeout(() => (isOpen = false), 500);
  }
});
