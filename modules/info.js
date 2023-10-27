import Toastify from 'toastify-js'

export default async function info(number) {

  let url = `http://numbersapi.com/${number}?json`
  let response = await fetch(url);
  let result = await response.json();
  
  return Toastify({
    text: result.text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3)",
      padding: "1.1rem"
    }
  }).showToast();

}