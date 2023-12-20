import counter from "./modules/counter.js"
import JSConfetti from 'js-confetti'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

counter();

Toastify({
  text: "Welcome to Row Counter App, GF! ^^",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top",
  position: "center",
  stopOnFocus: true,
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    padding: "1.1rem"
  },
  onClick: () => {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }
}).showToast();