import addBookToLocalStorage from "./localStorage";

const wishList = (() => {
  //let books = [];
  let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];

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
    //addBookToLocalStorage('books', JSON.stringify(books));
    localStorage.setItem('books', JSON.stringify(books));
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
