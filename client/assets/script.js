function displayQuote(data) {
  const quote = document.getElementById("text");
  quote.textContent = data;
}

const form = document.querySelector("form");

function loadRandomQuote(e) {
  e.preventDefault();
  const url = "http://localhost:3000/quotes/random";

  fetch(url)
    .then((res) => res.text())
    .then((data) => displayQuote(data))
    .catch((err) => {
      console.log(err);
    });
}
form.addEventListener("submit", loadRandomQuote);
