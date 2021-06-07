import { GOOGLE_BOOKS_API_URL, API_KEY } from "./config";

export const state = {
  books: [
    // { ISBN: "987", title: "test", author: "name", img: "yo" },
    // { ISBN: "987", title: "test", author: "name", img: "yo", description: "book #2 description" },
  ],
  wishlist: [],
  descriptions: [],
};

export const loadSearchResults = async (query) => {
  //console.log(query);
  try {
    const searchQuery = `${GOOGLE_BOOKS_API_URL}?q=${query}&key=${API_KEY}&maxResults=25`;
    const res = await fetch(searchQuery);
    const data = await res.json();
    console.log("data.items", data.items);

    // load descriptions array
    const descriptions = state.descriptions;
    descriptions.length = 0; // reset array
    descriptions.push(
      data.items.map((item) => {
        let description = item.volumeInfo.description;
        return description
          ? description
          : "Description for this title is not available";
        // if (description) {
        //   return description;
        // } else {
        //   return "Description for this title is not available";
        // }
      })
    );
    console.log("descriptions", descriptions);

    state.books = data.items.map((item, index) => {
      const book = item.volumeInfo;
      return {
        ISBN: book.industryIdentifiers[0].identifier,
        title: book.title,
        ...(book.authors && { author: book.authors[0] }),
        ...(book.imageLinks && { img: book.imageLinks.thumbnail }),
        description: book.description,
        index: index,
      };
    });
    //console.log("state.books", state.books);
  } catch (err) {
    throw err;
  }
};

// Wishlist

const findBook = (ISBN, msg) => {
  if (state.wishlist.find((b) => b.ISBN == ISBN)) {
    window.alert(msg);
    return true;
  }
};

export const getWishlist = () => {
  state.wishlist = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];
  //console.log("wishlist", state.wishlist);
  return state.wishlist;
};

export const addBookWishlist = (ISBN) => {
  if (findBook(ISBN, `'This book is already in the wishlist.`)) {
    return false;
  }
  const book = state.books.find((i) => i.ISBN == ISBN);
  state.wishlist = [...state.wishlist, book];
  localStorage.setItem("books", JSON.stringify(state.wishlist));
  return true;
};

export const deleteBookWishlist = (ISBN) => {
  state.wishlist = state.wishlist.filter((book) => book.ISBN != ISBN);
  localStorage.setItem("books", JSON.stringify(state.wishlist));
  return true;
};

export const getDescription = (ISBN) => {
  const info = state.books.find((i) => {
    if (i.ISBN == ISBN) {
      console.log(i.description);
      return i.description;
    }
  });
  console.log(info);
  return info.description;
};

// export const descriptions = [
//   {
//     description: "A short story about baseball"
//   },
//   {
//     description: "A novella about the beach"
//   }
// ];

// Book description
export const getDescriptionArray = () => {
  //console.log("getDescriptionArray", "getting the array")
  // const descriptions = state.books.map(item => item.volumeInfo.description);
  // return descriptions;
  return state.descriptions;
};
