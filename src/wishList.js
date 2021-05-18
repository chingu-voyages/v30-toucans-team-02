const wishList = (() => {
  let books = [];

  const addBook = (book) => {
    console.log(book);
    const bookObject = {
      title: book.title,
      authors: book.authors[0],
      img: book.imageLinks.thumbnail,
      description: book.description,
      ISBN: book.industryIdentifiers[0].identifier,
    };
    console.log(bookObject);

    books = [...books, bookObject];
    console.log(books);
  };

  const getBooks = () => {
    return books;
  };
  const deleteBook = (ISBN) => {
    books = books.filter((book) => book.ISBN != ISBN);
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
