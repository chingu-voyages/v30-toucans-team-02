import "./styles/style.scss";
import getSearchResults from "./api";
import Logo from "./assets/images/logo.png";

const mainLogo = document.querySelector(".search__logo");
mainLogo.src = Logo;

const searchInput = document.getElementById("search-input");

// Event Listener
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    return getSearchResults();
  }
});

let cardElement = document.querySelector(".container");
console.log(cardElement);
for (let index = 0; index < 9; index++) {
  cardElement.innerHTML += `<article><div class="card">
  <img
    src="https://assets.whsmith.co.uk/product-image/extra-large/9781787461482_1.jpg"
    alt="Avatar"
    class="card__img"
  />
    <h4 class='card__title'><b>Title</b></h4>
  <div class='card__content'>
    <p>Read More</p>
    <i class="fa fa-arrow-right"></i>
    <div>
</div> </article>`;
}
