import * as model from "./model";
import booksView from "./views/booksView";
import wishlistView from "./views/wishlistView";
import searchView from "./views/searchView";
import bookDescriptionView from "./views/bookDescriptionView";

booksView.render(model.state.books);

// ====================================================================
// Control Search results
// ====================================================================

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

// ====================================================================
// Control Wishlist
// ====================================================================

const controlAddBookWishlist = (ISBN) => {
  let tryAdd = model.addBookWishlist(ISBN);
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
  const description = model.getDescriptionWishlist(ISBN);

  bookDescriptionView.showDescription(description);
  bookDescriptionView.toggleModal();
};

const loadLocalStorage = () => {
  wishlistView.render(model.getWishlist());
};

// ====================================================================
// Control Description
// ====================================================================

const controlHideDescription = () => {
  //console.log("controlHideDescription", "click");
  bookDescriptionView.closeModal();
};

const controlShowDescription = (ISBN) => {
  // console.log("ISBN controler", ISBN);
  let description = model.getDescription(ISBN);
  //console.log("description", description);
  //console.log(model.getWishlist());

  bookDescriptionView.showDescription(description);
  bookDescriptionView.toggleModal();
};

// ====================================================================
// init view handlers
// ====================================================================

const init = () => {
  searchView.addHandlerSearch(controlSearchResults);
  booksView.addHandlerAddBookWishlist(controlAddBookWishlist);
  wishlistView.addHandlerDeleteBookWishlist(controlDeleteBookWishlist);
  wishlistView.addHandlerShowWishListButton(controlWishListBtn);
  wishlistView.addHandlerShowInformation(controlWishListImgInfo);
  bookDescriptionView.addHandlerHideDescription(controlHideDescription);
  bookDescriptionView.addHandlerShowDescription(controlShowDescription);
  loadLocalStorage();
};

init();
