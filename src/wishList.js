const wishList = (() => {
  let books = [];

  const addBook = (book) => {
    const bookObject = {
      title: book.title,
      authors: book.authors[0],
      img: book.imageLinks.thumbnail,
      description: book.description,
    };
    // console.log(bookObject);

    books = [...books, bookObject];
    console.log(books);
  };

  const getBooks = () => {
    return books;
  };
  const deleteBook = (title) => {
    books = books.filter((book) => book.title != title);
    // books = books.splice(index, 1);
    console.log("delete");
    console.log(books);
  };
  return {
    addBook,
    getBooks,
    deleteBook,
  };
})();

export default wishList;
