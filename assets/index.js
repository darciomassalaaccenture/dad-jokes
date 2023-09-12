const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke-content");
const loadingEl = document.getElementById("loadingIcon");

function showLoader() {
  loadingEl.style.display = "flex";
  jokeEl.style.display = "none";
}

function hideLoader() {
  loadingEl.style.display = "none";
  jokeEl.style.display = "flex";
}

const apiKey = "xVt9+RflozUC/ItgLyL1Dg==KZywXkLKpgvESefC";

var limit = 1;

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?" + limit;

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function getJoke() {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Let me think...";
    showLoader();

    const response = await fetch(apiURL, options);
    const data = await response.json();

    console.log(data);

    btnEl.disabled = false;
    btnEl.innerText = "Make me laugh!";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "Error 404: Humor not found! 😂 Please try again.";
    btnEl.disabled = false;
    btnEl.innerText = "Make me laugh!";
    console.log(error);
  } finally {
    hideLoader();
  }
}

btnEl.addEventListener("click", getJoke);
