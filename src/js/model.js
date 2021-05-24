import { GOOGLE_BOOKS_API_URL, API_KEY } from "./config";

export const state = {
  books: [
    { ISBN: "987", title: "test", author: "name", img: "yo" },
    { ISBN: "987", title: "test", author: "name", img: "yo" },
  ],
};

export const loadSearchResults = async (query) => {
  console.log(query);
  try {
    const searchQuery = `${GOOGLE_BOOKS_API_URL}?q=${query}&key=${API_KEY}&maxResults=25`;
    const res = await fetch(searchQuery);
    const data = await res.json();
    console.log(data.items);

    state.books = data.items.map((item) => {
      const book = item.volumeInfo;
      return {
        ISBN: book.industryIdentifiers[0].identifier,
        title: book.title,
        author: book.authors[0],
        img: book.imageLinks.thumbnail,
        description: book.description
      };
    });
    console.log(state.books);
  } catch (err) {
    throw err;
  }
};

// export const loadBooks = async (search) => {
//   const book = [];
//   // fetch data from api
//   // const { book } = data.data;
//   // state.books = {
//   //     ISBN:
//   //     title:
//   //     author:
//   //     image:
//   // }
// };

// export const loadSearchResults = async (query)
