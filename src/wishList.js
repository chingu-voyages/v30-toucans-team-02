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
  return {
    addBook,
    getBooks,
  };
})();

export default wishList;
