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

// Event Listener
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getSearchResults();

    setTimeout(() => {
      toggleModel();
    }, 1500);

    //console.log("searchinput", toggleModel);
  }
});

// Book Wish List

const wishlistBookTitle = document.querySelector(".wishlist__book-title");
const wishlistBookContainer = document.querySelector(
  ".wishlist__book-container"
);
const wishlistFooter = document.getElementsByClassName("wishlist")[0];
const emptyWishListDOM = () => {
  while (wishlistBookContainer.firstChild) {
    wishlistBookContainer.removeChild(wishlistBookContainer.firstChild);
  }
};

const wishListRender = () => {
  const books = wishList.getBooks();
  books.forEach((book, index) => {
    let html = renderWishlistBook(book, index);
    wishlistBookContainer.insertAdjacentHTML("beforeend", html);
  });
};

wishListRender();

// Click event listeners
document.addEventListener("click", function (e) {
  // Add book to wish list from card icon
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
      wishlistFooter.classList.toggle("show-wishlist");
      setTimeout(() => {
        wishlistFooter.classList.toggle("show-wishlist");
      }, 2000);
    }
  }
  // Delete card from wishlist
  if (e.target.id == "delete-card-wishlist") {
    let ISBN = e.target.getAttribute("data-ISBN");
    wishList.deleteBook(ISBN);
    emptyWishListDOM();
    wishListRender();
    // if (wishList.getBooks().length() == 0) {
    //   console.log("empty");
    // }
  }
  // Open wishlist toggle button
  if (e.target.id == "toggle-wishlist") {
    wishlistFooter.classList.toggle("show-wishlist");
  }
});

// Wish list update title
document.addEventListener("mouseover", function (e) {
  // console.log(e.target);
  let books = wishList.getBooks() || 0;
  if (e.target.id == "wishlist-img") {
    let index = e.target.getAttribute("data-index");

    console.log(books[index]);
    wishlistBookTitle.textContent = books[index].title;
  } else {
    if (books.length == 0) {
      wishlistBookTitle.textContent = "WishList Empty";
    }
    wishlistBookTitle.textContent = "WishList";
  }
});

const wishListBtn = document.getElementsByClassName(".add-to-wish-list");
// console.log(readListBtn);

wishList.getBooks();

//Modal
const toggleModel = () => {
  console.log("in funcß");
  const button = Array.from(document.getElementsByClassName("fa-info-circle"));
  console.log(button, "first", button.length);
  button.forEach(function (btn) {
    console.log(btn, "btn");
    btn.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      modal.style.display = "block";
    });
  });
};
window.onclick = function (event) {
  const modal = document.querySelector(".modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
const modalCloseBtn = document.querySelector(".modal__btn-close");
modalCloseBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
});
// const description = document.querySelector(".modal__description");
// console.log(description);
// book.description = book.description.substring(0, 300);
// description.innerHTML = hgfty";
// // description.innerHTML = "scdfwf";
// const description = document.querySelector(".modal__description");
// description.innerHTML = `${data.description}`;
// console.log(description);
