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
    // fetch data

    // state.books = books.items.map((book) => {
    //   return {
    //     ISBN: book.
    //     title: book.
    //     author: book.
    //     img: book.,
    //   };
    // });
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
