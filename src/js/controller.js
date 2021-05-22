import * as model from "./model";
import bookView from "./views/booksView";

const controlBooks = () => {
  // 1) Load books
  //   model.loadBooks(userSearch);

  // 2) Redering books
  console.log(model.state.books);
  bookView.render(model.state.books);
};

export default controlBooks;
