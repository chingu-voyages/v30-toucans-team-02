import GOOGLE_BOOKS_API_KEY from './api_key';
import renderCard from './bookCard';

// Google Books API
const API_KEY = GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

function getSearchResults() {
  const bookCardContainer = document.querySelector(".bookCardContainer");
  bookCardContainer.innerHTML = "";

  const searchValue = document.getElementById("search-input").value.split(" ").join("+");
  const searchQuery = `${GOOGLE_BOOKS_API_URL}?q=${searchValue}&key=${API_KEY}&maxResults=25`;

  fetch(searchQuery)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.items.forEach(item => {
        const book = item.volumeInfo;
        const html = renderCard(book);
        bookCardContainer.insertAdjacentHTML("beforeend", html);
      });
    })
    .catch((err) => {
      console.log("error");
    });
}

export default getSearchResults;