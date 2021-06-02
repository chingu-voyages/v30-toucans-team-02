import controlBooks from "./js/controller";

// controlBooks();

import "./styles/style.scss";
import getSearchResults from "./api";
import Logo from "./assets/images/logo.png";
import wishList from "./wishList";
import searchedBooks from "./searchedBooks";
import renderWishlistBook from "./renderWishlistBook";
import bookCard from "./bookCard";
import api from "./api";
import renderCard from "./bookCard";
const mainLogo = document.querySelector(".search__logo");
mainLogo.src = Logo;

const searchInput = document.getElementById("search-input");

// // Event Listener
// searchInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     getSearchResults();
//   }
// });

// Book Wish List

// const wishlistBookTitle = document.querySelector(".wishlist__book-title");
// const wishlistBookContainer = document.querySelector(
//   ".wishlist__book-container"
// );
// const wishlistFooter = document.getElementsByClassName("wishlist")[0];
// const emptyWishListDOM = () => {
//   while (wishlistBookContainer.firstChild) {
//     wishlistBookContainer.removeChild(wishlistBookContainer.firstChild);
//   }
// };

// const wishListRender = () => {
//   const books = wishList.getBooks();
//   books.forEach((book, index) => {
//     let html = renderWishlistBook(book, index);
//     wishlistBookContainer.insertAdjacentHTML("beforeend", html);
//   });
// };

// wishListRender();

// // Click event listeners
// document.addEventListener("click", function (e) {
//   // Add book to wish list from card icon
//   let index = e.target.getAttribute("data-index");
//   if (e.target.id == "wishlist4") {
//     let books = searchedBooks.getBooks();
//     let book = books[index].volumeInfo;
//     let wishlist = wishList.getBooks();
//     if (wishlist.find((b) => b.title == book.title)) {
//       window.alert(`'${book.title}' is already in wish list.`);
//     } else {
//       wishList.addBook(books[index].volumeInfo);
//       emptyWishListDOM();
//       wishListRender();
//       wishlistFooter.classList.toggle("show-wishlist");
//       setTimeout(() => {
//         wishlistFooter.classList.toggle("show-wishlist");
//       }, 2000);
//     }
//   }
// Delete card from wishlist
// if (e.target.id == "delete-card-wishlist") {
//   let ISBN = e.target.getAttribute("data-ISBN");
//   wishList.deleteBook(ISBN);
//   emptyWishListDOM();
//   wishListRender();
// if (wishList.getBooks().length() == 0) {
//   console.log("empty");
// }
// }
// Open wishlist toggle button
// if (e.target.id == "toggle-wishlist") {
//   wishlistFooter.classList.toggle("show-wishlist");
// }
// });

// Wish list update title
// document.addEventListener("mouseover", function (e) {
//   // console.log(e.target);
//   let books = wishList.getBooks() || 0;
//   if (e.target.id == "wishlist-img") {
//     let index = e.target.getAttribute("data-index");

//     console.log(books[index]);
//     wishlistBookTitle.textContent = books[index].title;
//   } else {
//     if (books.length == 0) {
//       wishlistBookTitle.textContent = "WishList Empty";
//     }
//     wishlistBookTitle.textContent = "WishList";
//   }
// });
// // Wish list update title
// document.addEventListener("mouseover", function (e) {
//   // console.log(e.target);
//   if (e.target.id == "wishlist-img") {
//     let index = e.target.getAttribute("data-index");
//     let books = wishList.getBooks();
//     console.log(books[index]);
//     wishlistBookTitle.textContent = books[index].title;
//     if (books.length == 0) {
//       wishlistBookTitle.textContent = "WishList Empty";
//     }
//     wishlistBookTitle.textContent = "WishList";
//   }
// });

// const wishListBtn = document.getElementsByClassName(".add-to-wish-list");
// // console.log(readListBtn);

// wishList.getBooks();

//Modal

// let descriptionArray = [];
// export default function getDescription(description, index) {
//   if (clearDescriptionResults) {
//     descriptionArray = [];
//     clearDescriptionResults = false;
//     descriptionArray.push(description);
//   } else {
//     descriptionArray.push(description);
//   }

//   console.log(descriptionArray, index);
// }

// const toggleModel = () => {
//   const button = Array.from(document.getElementsByClassName("fa-info-circle"));

//   button.forEach(function (btn, index) {
//     // modal.setAttribute("data-key", index);
//     btn.addEventListener("click", (book) => {
//       const modal = document.querySelector(".modal");
//       modal.style.display = "block";
//       const descriptionContainer = document.querySelector(
//         ".modal__description"
//       );
//       if (`${descriptionArray[index]}` === "undefined") {
//         descriptionContainer.innerHTML =
//           "Description for this title is not available.";
//       } else {
//         descriptionContainer.innerHTML = `${descriptionArray[index]}`;
//       }
//     });
//   });
// };

// const modalCloseBtn = document.querySelector(".modal__btn-close");
// modalCloseBtn.addEventListener("click", () => {
//   console.log("i button clicked");
//   const modal = document.querySelector(".modal");
//   modal.style.display = "none";
// });
// wishList.getBooks();
