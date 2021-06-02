import * as model from "./model";
import booksView from "./views/booksView";
import wishlistView from "./views/wishlistView";

import searchView from "./views/searchView";
import wishList from "../wishList";
import bookDescriptionView from "./views/BookDescriptionView";

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
const controlAddBookWishlist = (ISBN) => {
  let tryAdd = model.addBookWishlist(ISBN);
  console.log(tryAdd);
  if (!tryAdd) return;

  wishlistView.render(model.state.wishlist);

  if (wishlistView.wishlistIsOpen() == false) {
    wishlistView.toggleShow();
    setTimeout(() => {
      wishlistView.toggleShow();
    }, 2000);
  }
};

const controlDeleteBookWishlist = (ISBN) => {
  console.log(ISBN);
  let del = model.deleteBookWishlist(ISBN);
  if (!del) return;
  wishlistView.render(model.state.wishlist);
};

const controlWishListBtn = () => {
  wishlistView.toggleShow();
};

const loadLocalStorage = () => {
  //getWishlist();
  //console.log("getWishlist()", model.getWishlist());
  wishlistView.render(model.getWishlist());
  //getWishlist() ? this.render(getWishlist()) : [];
};

// Book description modal
const controlBookDescriptionShow = () => {
  console.log("loaded");
};

const controlGetDescriptionArray = () => {
  return model.getDescriptionArray();
};

const controlBookDescriptionToggleModal = () => {
  return "biggie smalls";
}

const init = () => {
  searchView.addHandlerSearch(controlSearchResults);
  booksView.addHandlerAddBookWishlist(controlAddBookWishlist);
  wishlistView.addHandlerDeleteBookWishlist(controlDeleteBookWishlist);
  wishlistView.addHandlerShowWishListButton(controlWishListBtn);
  //bookDescriptionView.addHandlerToggleButton(controlBookDescriptionShow);
  bookDescriptionView.addHandlerToggleModal(controlBookDescriptionToggleModal);
  //bookDescriptionView.addHandlerGetDescriptionArray(controlGetDescriptionArray);

  loadLocalStorage();
};

init();
