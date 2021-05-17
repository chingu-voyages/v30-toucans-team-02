import "./styles/style.scss";
import getSearchResults from "./api";
import Logo from "./assets/images/logo.png";
import wishList from "./wishList";
import searchedBooks from "./searchedBooks";

const mainLogo = document.querySelector(".search__logo");
mainLogo.src = Logo;

const searchInput = document.getElementById("search-input");

// Event Listener
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getSearchResults();
  }
});

// Book Wish List

document.addEventListener("click", function (e) {
  if (e.target.id == "wishlist") {
    let index = e.target.getAttribute("data-index");
    let book = searchedBooks.getBooks();
    wishList.addBook(book[index].volumeInfo);
    // console.log(wishList.getBooks());
  }
});
const readListBtn = document.getElementsByClassName(".add-to-wish-list");
// console.log(readListBtn);

wishList.getBooks();

// let cardElement = document.querySelector(".container");
// console.log(cardElement);
// for (let index = 0; index < 9; index++) {
//   cardElement.innerHTML += `<article><div class="card">
//   <img
//     src="https://assets.whsmith.co.uk/product-image/extra-large/9781787461482_1.jpg"
//     alt="Avatar"
//     class="card__img"
//   />
//     <h4 class='card__title'><b>Title</b></h4>
//   <div class='card__content'>
//     <p>Read More</p>
//     <i class="fa fa-arrow-right"></i>
//     <div>
// </div> </article>`;
// }
