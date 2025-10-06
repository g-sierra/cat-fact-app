const API_URL = "https://catfact.ninja/fact";
const button = document.getElementById("factBtn");
const factParagraph = document.getElementById("fact");

const getFact = () => {
  button.disabled = true;
  factParagraph.textContent = "Loading fact...";

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      showFact(data.fact);
    })
    .catch((error) => {
      showFact("**An error has occurred**");
      console.error(error);
    })
    .finally(() => {
      setTimeout(() => {
        button.disabled = false;
      }, 1000);
    });
};

const showFact = (factText) => {
  factParagraph.innerHTML = factText;
};

button.addEventListener("click", getFact);
