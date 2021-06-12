import bookImg from "../assets/images/book.jpeg";
export const state = {
  books: [],
  wishlist: [],
  descriptions: [],
};

// ====================================================================
// Model Load search results
// ====================================================================

export const loadSearchResults = async (query) => {
  try {
    const res = await fetch(`/.netlify/functions/fetch-books?query=${query}`);
    const data = await res.json();
    console.log("data", data);

    // load descriptions array
    const descriptions = state.descriptions;
    descriptions.length = 0; // reset array
    descriptions.push(
      data.items.map((item) => {
        let description = item.volumeInfo.description;
        return description
          ? description
          : "Description for this title is not available";
      })
    );

    state.books = data.items.map((item, index) => {
      const book = item.volumeInfo;

      return {
        ISBN: book.hasOwnProperty("industryIdentifiers")
          ? book.industryIdentifiers[0].identifier
          : book.id,
        title: book.title,
        ...(book.authors && { author: book.authors[0] }),
        // ...(book.imageLinks && { img: book.imageLinks.thumbnail }),
        img: book.hasOwnProperty("imageLinks")
          ? book.imageLinks.thumbnail
          : bookImg,
        description: book.description,
        index: index,
      };
    });
  } catch (err) {
    throw err;
  }
};

// ====================================================================
// Model Wishlist
// ====================================================================

const findBook = (ISBN, msg) => {
  if (state.wishlist.find((b) => b.ISBN == ISBN)) {
    window.alert(msg);
    return true;
  }
};

export const getWishlist = () => {
  state.wishlist = state.wishlist;
  state.wishlist = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [];

  return state.wishlist;
};

export const addBookWishlist = (ISBN) => {
  if (findBook(ISBN, `'This book is already in the wishlist.`)) {
    return false;
  }
  if (state.wishlist.length > 4) {
    alert("You can only have 5 books in the read list.");
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

// ====================================================================
// Model Descrition
// ====================================================================

export const getDescription = (ISBN) => {
  const info = state.books.find((i) => i.ISBN == ISBN);
  if (info && info.description != undefined) {
    return { title: info.title, description: info.description };
  } else {
    return { title: info.title, description: "No description found." };
  }
};

export const getDescriptionWishlist = (ISBN) => {
  const info = state.wishlist.find((i) => i.ISBN == ISBN);
  if (info && info.description != undefined) {
    return { title: info.title, description: info.description };
  } else {
    return { title: info.title, description: "No description found." };
  }
};
