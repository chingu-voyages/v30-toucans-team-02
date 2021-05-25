import * as model from "./model";
import booksView from "./views/booksView";
import bookView from "./views/booksView";
import searchView from "./views/searchView";

bookView.render(model.state.books);

const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();

    if (!query) return;
    await model.loadSearchResults(query);

    bookView.render(model.state.books);
  } catch (err) {
    console.log(err);
  }
};

// Wishlist

const controlAddBookWishlist = (ISBN) => {
  model.addBookWishlist(ISBN);
  // model.getWishlist()
};

const init = () => {
  searchView.addHandlerSearch(controlSearchResults);
  booksView.addHandlerAddBookWishlist(controlAddBookWishlist);
};

init();
