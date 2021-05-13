import "./styles/style.scss";
import getSearchResults from './api';

// const bookCardContainer = document.querySelector(".bookCardContainer");

// const data = [
//   {
//     title: "The Book",
//     author: "M.Clifford",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/THE_BOOK_cover_image.png/392px-THE_BOOK_cover_image.png",
//   },
//   {
//     title: "The Iron Man",
//     author: "Someone else",
//     image:
//       "https://images-na.ssl-images-amazon.com/images/I/51xcoMmkRyL._SX340_BO1,204,203,200_.jpg",
//   },
//   {
//     title: "Post Office",
//     author: "C Bukowski",
//     image:
//       "https://images-eu.ssl-images-amazon.com/images/I/51QQlmIw8fL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
//   },
// ];

const searchInput = document.getElementById("search-input");

// Event Listener
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    return getSearchResults(); 
  }
});


// data.forEach((book) => {
//   const html = bookCardRender(book);
//   bookCardContainer.insertAdjacentHTML("beforeend", html);
// });