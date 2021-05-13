import GOOGLE_BOOKS_API_KEY from './api_key';
import renderCard from './bookCard';

// Google Books API
const API_KEY = GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";
//const SEARCH_QUERY = GOOGLE_BOOKS_API_URL + "?q=" + SEARCH_STRING + "key=" + API_KEY;
//https://www.googleapis.com/books/v1/volumes?q=atomic+habits&key=AIzaSyCJilO37UK591gPqByiXK6VoUB-ZBdPIV0

// const searchResultsElement = document.getElementById("search-results");
// //const searchButton = document.getElementById("search-button");
// const searchInput = document.getElementById("search-input");

// // Event Listener
// //searchButton.addEventListener("click", getSearchResults);
// searchInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     return getSearchResults();
//   }
// });

function getSearchResults() {
  const bookCardContainer = document.querySelector(".bookCardContainer");
  bookCardContainer.innerHTML = "";

  const searchValue = document.getElementById("search-input").value.split(" ").join("+");
  const searchQuery = `${GOOGLE_BOOKS_API_URL}?q=${searchValue}&key=${API_KEY}&maxResults=25`;
  console.log(searchQuery);

  fetch(searchQuery)
    .then((response) => {
      // console.log(`searchValue: ${searchValue}`);
      // console.log(`searchQuery: ${searchQuery}`);
      return response.json();
    })
    .then((data) => {
      // console.log("data");
      // console.log(data);
      // console.log("data.items");
      // console.log(data.items);
      // console.log("data.items[0]");
      // console.log(data.items[0]);
      // console.log("data.items[0].volumeInfo");
      // console.log(data.items[0].volumeInfo);
      // console.log("data.items[0].volumeInfo.title");
      // console.log(data.items[0].volumeInfo.title);
      // console.log(typeof data);
     // const results = data.items;
     // console.log(results);
      // const result = data;
      // console.log(result);
      // for (let keys in data.items) {
      //   console.log(keys);
      //   for (let key in keys) {
      //     console.log(key[0]);
      //   }
      // }
      data.items.forEach(item => {
        const book = item.volumeInfo;
        // console.log(book.title);
        // const title = book.title;
        // //console.log(`Title: ${title}`);
        // const author = book.authors[0];
        // const thumbnail = book.imageLinks.thumbnail;

        // document.getElementById("results").innerHTML = `
        //       <img src="${thumbnail}" alt="cover"/>
        //       <p>${title} by ${author}</p>`;

        // document.getElementById("results").style.display = "block";
        const html = renderCard(book);
        bookCardContainer.insertAdjacentHTML("beforeend", html);
      });
      //return result;
    //   console.log(data);
    //   const book = data.items[0].volumeInfo;
    //   const title = book.title;
    //   //console.log(`Title: ${title}`);
    //   const author = book.authors[0];
    //   const thumbnail = book.imageLinks.thumbnail;

    //   document.getElementById("results").innerHTML = `
    //         <img src="${thumbnail}" alt="cover"/>
    //         <p>${title} by ${author}</p>`;

    //   document.getElementById("results").style.display = "block";
    })
    .catch((err) => {
      console.log("error");
    });
}

export default getSearchResults;