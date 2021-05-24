import * as model from "./model";
import bookView from "./views/booksView";
import searchView from "./views/searchView";

const controlBooks = () => {
  // 1) Load books
  //   model.loadBooks(userSearch);

  // 2) Redering books

  bookView.render(model.state.books);
};

const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();

    if (!query) return;
    await model.loadSearchResults("query");
    console.log(model.state.books);
  } catch (err) {
    console.log(err);
  }
};

const init = () => {
  searchView.addHandlerSearch(controlSearchResults);
};

init();

export default controlBooks;
