import convert from "./convert";
import info from "./info";

let showed = {}

export default function counter() {
  let value = document.getElementById("value");
  let value2 = document.getElementById("value2");
  let reset = document.getElementById("reset");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  
  let counterRight = 0;
  let counterLeft = 0;
  
  function updateScreen() {
    let number = convert(counterLeft, counterRight);

    if (!showed[number]) {
      info(number);
    }

    showed[number] = true;
    value.textContent = counterRight;
    value2.textContent = counterLeft;
  }
  
  reset.addEventListener("click", () => {
    if (counterRight == 0 && counterLeft == 0) {
      return;
    }
    counterRight = 0;
    counterLeft = 0;
    updateScreen();
  });
  
  minus.addEventListener("click", () => {

    if (counterRight == 0 && counterLeft == 0) {
      return;
    }
  
    if (counterRight == 0 && counterLeft == 0) {
      counterRight = 0;
      counterLeft = 0;
    } else if (counterLeft > 9 && counterRight > 0) {
      counterRight--;
    }
    else if (counterRight > 0 && counterLeft <= 9) {
      counterRight--;
    } else if (counterRight <= 9 && counterLeft > 0) {
      if (counterRight == 0) {
        counterRight = 9;
      }
      counterLeft--;
    } else if (counterRight > 0 && counterLeft > 0) {
      counterRight--;
    } else if (counterRight <= 0 && counterLeft <= 0) {
      counterLeft--;
    }
  
    updateScreen();
  });
  
  plus.addEventListener("click", () => {
  
    if (counterLeft >= 0 && counterRight < 9) {
      counterRight++;
    } else if (counterRight >= 0 && counterLeft < 9) {
      if (counterRight == 9) {
        counterRight = 0;
      }
      counterLeft++;
    } else if (counterRight < 9 && counterLeft < 9) {
      counterRight++;
    } else if (counterRight >= 9 && counterLeft >= 9) {
      counterLeft++;
      if (counterLeft > 9) {
        counterRight = 0;
      }
    }
  
    updateScreen();
  });
}