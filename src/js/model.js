import { GOOGLE_BOOKS_API_URL, API_KEY } from "./config";

export const state = {
  books: [
    { ISBN: "987", title: "test", author: "name", img: "yo" },
    { ISBN: "987", title: "test", author: "name", img: "yo" },
  ],
  wishlist: [],
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
        description: book.description,
      };
    });
    console.log(state.books);
  } catch (err) {
    throw err;
  }
};

// Wishlist

export const getWishlist = () => {
  return state.wishlist;
};

export const addBookWishlist = (ISBN) => {
  if (state.wishlist.find((b) => b.ISBN == ISBN)) {
    window.alert(`'This book is already in te wishlist.`);
    return;
  }
  const book = state.books.find((i) => i.ISBN == ISBN);

  state.wishlist = [...state.wishlist, book];
  console.log(state.wishlist);
};

export const deleteBookWishlist = (book) => {
  state.wishlist = state.wishlist.filter((book) => book.ISBN != ISBN);
};
