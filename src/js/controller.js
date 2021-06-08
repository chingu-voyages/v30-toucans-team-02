import * as model from "./model";
import booksView from "./views/booksView";
import wishlistView from "./views/wishlistView";

import searchView from "./views/searchView";
import wishList from "../wishList";
import bookDescriptionView from "./views/bookDescriptionView";

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
  //console.log(tryAdd);
  console.log("ISBN added to wishlist:", ISBN);
  if (!tryAdd) return;

  wishlistView.render(model.state.wishlist);
  updateWishListLabel();

  if (wishlistView.wishlistIsOpen() == false) {
    wishlistView.toggleShow();
    setTimeout(() => {
      wishlistView.toggleShow();
    }, 2000);
  }
};

const updateWishListLabel = () => {
  let wishlistBooks = model.getWishlist();

  if (wishlistBooks.length == 0) {
    wishlistView.updateLabel("Wishlist Empty");
  } else {
    wishlistView.updateLabel(" ");
  }
};

const controlDeleteBookWishlist = (ISBN) => {
  console.log("ISBN deleted from wishlisht:", ISBN);
  let del = model.deleteBookWishlist(ISBN);
  if (!del) return;
  wishlistView.render(model.state.wishlist);
};
updateWishListLabel();

const controlWishListBtn = () => {
  wishlistView.toggleShow();
  updateWishListLabel();
};

const controlWishListImgInfo = (ISBN) => {
  console.log("controler", ISBN);
  controlShowDescription(ISBN);
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
  // console.log("controlBookDescriptionToggleModal", "click");
  // bookDescriptionView.toggleModal();
};

const controlHideDescription = () => {
  console.log("controlHideDescription", "click");
  bookDescriptionView.closeModal();
};

const controlShowDescription = (ISBN) => {
  // console.log("ISBN controler", ISBN);
  let description = model.getDescription(ISBN);
  console.log(description);

  bookDescriptionView.showDescription(description);
  bookDescriptionView.toggleModal();
};

const init = () => {
  searchView.addHandlerSearch(controlSearchResults);
  booksView.addHandlerAddBookWishlist(controlAddBookWishlist);
  wishlistView.addHandlerDeleteBookWishlist(controlDeleteBookWishlist);
  wishlistView.addHandlerShowWishListButton(controlWishListBtn);
  wishlistView.addHandlerShowInformation(controlWishListImgInfo);
  // bookDescriptionView.addHandlerToggleButton(controlBookDescriptionShow);
  // bookDescriptionView.addHandlerToggleModal(controlBookDescriptionToggleModal);
  // bookDescriptionView.addHandlerGetDescriptionArray(controlGetDescriptionArray);
  bookDescriptionView.addHandlerShowDescriptionButton(
    controlBookDescriptionToggleModal
  );
  bookDescriptionView.addHandlerHideDescription(controlHideDescription);
  bookDescriptionView.addHandlerShowDescription(controlShowDescription);

  loadLocalStorage();
  // bookDescriptionView.showDescription();
};

init();
