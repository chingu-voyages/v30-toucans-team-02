// Google Books API
const API_KEY = "AIzaSyCJilO37UK591gPqByiXK6VoUB-ZBdPIV0";
const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";
//const SEARCH_QUERY = GOOGLE_BOOKS_API_URL + "?q=" + SEARCH_STRING + "key=" + API_KEY;
//https://www.googleapis.com/books/v1/volumes?q=atomic+habits&key=AIzaSyCJilO37UK591gPqByiXK6VoUB-ZBdPIV0

const searchResultsElement = document.getElementById("search-results");
const searchButton = document.getElementById("search-button");

// Event Listener
searchButton.addEventListener("click", getSearchResults);

function getSearchResults() {
  const searchInput = document
    .getElementById("search-input")
    .value.split(" ")
    .join("+");
  const searchQuery = `${GOOGLE_BOOKS_API_URL}?q=${searchInput}&key=${API_KEY}`;

  const result = fetch(searchQuery)
    .then((response) => {
      // console.log(`searchInput: ${searchInput}`);
      // console.log(`searchQuery: ${searchQuery}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const book = data.items[0].volumeInfo;
      const title = book.title;
      //console.log(`Title: ${title}`);
      const author = book.authors[0];
      const thumbnail = book.imageLinks.thumbnail;

      document.getElementById("results").innerHTML = `
            <img src="${thumbnail}" alt="cover"/>
            <p>${title} by ${author}</p>`;

      document.getElementById("results").style.display = "block";
    })
    .catch((err) => {
      console.log("error");
    });
}
