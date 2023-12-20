import info from "./info";

let showed = {}

export default function counter() {
  let rowCounterSelector = document.getElementById("value-1");
  let stitchCounterSelector = document.getElementById("value-2");
  let reset1 = document.getElementById("reset-1");
  let minus1 = document.getElementById("minus-1");
  let plus1 = document.getElementById("plus-1");
  let reset2 = document.getElementById("reset-2");
  let minus2 = document.getElementById("minus-2");
  let plus2 = document.getElementById("plus-2");

  var rowCounter = 0;
  var stitchCounter = 0;

  function updateScreen() {

    let number = Math.floor(Math.random() * 2) + 1;
    number = number === 2 ? rowCounter : stitchCounter;

    if (!showed[number]) {
      info(number);
    }

    rowCounter = String(rowCounter).length == 1 ? "0" + rowCounter : rowCounter;
    stitchCounter = String(stitchCounter).length == 1 ? "0" + stitchCounter : stitchCounter;

    rowCounterSelector.textContent = rowCounter;
    stitchCounterSelector.textContent = stitchCounter;

    showed[number] = true;
  }

  reset1.addEventListener("click", () => {
    rowCounter = 0;
    updateScreen();
  });

  reset2.addEventListener("click", () => {
    stitchCounter = 0;
    updateScreen();
  });

  plus1.addEventListener("click", () => {
    rowCounter++;
    updateScreen();
  });

  plus2.addEventListener("click", () => {
    stitchCounter++;
    updateScreen();
  });

  minus1.addEventListener("click", () => {
    rowCounter--;
    updateScreen();
  });

  minus2.addEventListener("click", () => {
    stitchCounter--;
    updateScreen();
  });

}