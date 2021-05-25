import * as model from "./model";
import booksView from "./views/booksView";
import wishlistView from "./views/wishlistView";

import searchView from "./views/searchView";
import wishList from "../wishList";

booksView.render(model.state.books);

const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();

    if (!query) return;
    await model.loadSearchResults(query);

    booksView.render(model.state.books);
  } catch (err) {
    console.log(err);
  }
};

// Wishlist

const controlRenderWishlist = () => {
  wishlistView.render(model.state.wishlist);
  wishlistView.toggleShow();
};

const controlAddBookWishlist = (ISBN) => {
  let tryAdd = model.addBookWishlist(ISBN);
  console.log(tryAdd);
  if (!tryAdd) return;

  wishlistView.render(model.state.wishlist);
  wishlistView.toggleShow();
};

const controlDeleteBookWishlist = (ISBN) => {
  console.log(ISBN);
  let del = model.deleteBookWishlist(ISBN);
  if (!del) return;
  wishlistView.render(model.state.wishlist);
};

const init = () => {
  searchView.addHandlerSearch(controlSearchResults);
  booksView.addHandlerAddBookWishlist(controlAddBookWishlist);
  wishlistView.addHandlerDeleteBookWishlist(controlDeleteBookWishlist);
  wishlistView.showWishListButton();
};

init();
