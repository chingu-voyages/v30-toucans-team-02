const wishList = (() => {
  let books = [];

  const addBook = (title, author, img, discription) => {
    const bookObject = {
      title: title,
      author: author,
      img: img,
      discription: discription,
    };
    // console.log(bookObject);

    books = [...books, bookObject];
    // console.log(books);
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
