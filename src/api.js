import renderCard from "./bookCard";
import searchedBooks from "./searchedBooks";

// Google Books API
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;
const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

async function getSearchResults() {
  const bookCardContainer = document.querySelector(".container");
  bookCardContainer.innerHTML = "";
  const searchValue = document.getElementById("search-input").value.split(" ").join("+");
  const searchQuery = `${GOOGLE_BOOKS_API_URL}?q=${searchValue}&key=${API_KEY}&maxResults=25`;

  try {
    const response = await fetch(searchQuery);
    //console.log("response", response);
  
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    //console.log("data as response.json()", data);
    const books = data.items;
    searchedBooks.addSearch(books);

    books.forEach((item, index) => {
      const book = item.volumeInfo;
      const html = renderCard(book, index);
      bookCardContainer.insertAdjacentHTML("beforeend", html);
    });

    //return data;

  } catch (e) {
    console.log(e.message);
    console.log(e.details);
  }
}

export default getSearchResults;
