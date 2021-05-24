import renderCard from "./bookCard";
import searchedBooks from "./searchedBooks";

// Google Books API
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

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
    .then((data) => (searchResults = data.items))
    .then((searchResults) => {
      searchedBooks.addSearch(searchResults);
      searchResults.forEach((item, index) => {
        const book = item.volumeInfo;
        const html = renderCard(book, index);

        // bookCardContainer.insertAdjacentHTML("beforeend", html);
      });
    })

    .catch((err) => {
      console.log("error fetch");
    });
}

export default getSearchResults;
