import GOOGLE_BOOKS_API_KEY from "./api_key";
import renderCard from "./bookCard";

// Google Books API
const API_KEY = GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

const searchResults = (data) => {
  let books = data;
  return books;
};

function getSearchResults() {
  const bookCardContainer = document.querySelector(".container");
  bookCardContainer.innerHTML = "";

  const searchValue = document
    .getElementById("search-input")
    .value.split(" ")
    .join("+");
  const searchQuery = `${GOOGLE_BOOKS_API_URL}?q=${searchValue}&key=${API_KEY}&maxResults=25`;
  let searchResults;
  fetch(searchQuery)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      searchResults = data.items;
      // console.log(searchResults);
      data.items.forEach((item) => {
        const book = item.volumeInfo;
        const html = renderCard(book);

        bookCardContainer.insertAdjacentHTML("beforeend", html);
      });
    })
    .catch((err) => {
      console.log("error h");
    });
}

console.log(searchResults());

export default getSearchResults;
