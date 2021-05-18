import "./styles/style.scss";
import getSearchResults from "./api";
import Logo from "./assets/images/logo.png";
import wishList from "./wishList";
import searchedBooks from "./searchedBooks";
import renderWishlistBook from "./renderWishlistBook";

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

const wishListFooter = document.querySelector(".wishlist__book-container");

const emptyWishListDOM = () => {
  while (wishListFooter.firstChild) {
    wishListFooter.removeChild(wishListFooter.firstChild);
  }
};

const wishListRender = () => {
  const books = wishList.getBooks();
  books.forEach((book, index) => {
    let html = renderWishlistBook(book, index);
    wishListFooter.insertAdjacentHTML("beforeend", html);
  });
};

wishListRender();

// Click event listeners
document.addEventListener("click", function (e) {
  // Card wishlist btn icon
  let index = e.target.getAttribute("data-index");
  if (e.target.id == "wishlist") {
    let books = searchedBooks.getBooks();
    let book = books[index].volumeInfo;
    let wishlist = wishList.getBooks();
    if (wishlist.find((b) => b.title == book.title)) {
      window.alert(`'${book.title}' is already in wish list.`);
    } else {
      wishList.addBook(books[index].volumeInfo);
      emptyWishListDOM();
      wishListRender();
    }
  }
  if (e.target.id == "delete-card-wishlist") {
    let ISBN = e.target.getAttribute("data-ISBN");
    wishList.deleteBook(ISBN);
    emptyWishListDOM();
    wishListRender();
  }
});

const wishlistBookTitle = document.querySelector(".wishlist__book-title");

document.addEventListener("mouseover", function (e) {
  // console.log(e.target);
  if (e.target.id == "wishlist-img") {
    let index = e.target.getAttribute("data-index");
    let books = wishList.getBooks();
    console.log(books[index]);
    wishlistBookTitle.textContent = books[index].title;
  } else {
    wishlistBookTitle.textContent = "";
  }
});

const readListBtn = document.getElementsByClassName(".add-to-wish-list");
// console.log(readListBtn);

wishList.getBooks();
