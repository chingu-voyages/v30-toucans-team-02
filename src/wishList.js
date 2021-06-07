// //import addBookToLocalStorage from "./localStorage";

// const wishList = (() => {
//   //]
//   //let books = [];

//   // check if books array is empty
//   // readability -- use if else
//   let books = localStorage.getItem("books")
//     ? JSON.parse(localStorage.getItem("books"))
//     : [];
//   //console.log(books);
//   const addBook = (book) => {
//     //console.log(book);
//     const bookObject = {
//       title: book.title,
//       authors: book.authors[0],
//       img: book.imageLinks.thumbnail,
//       description: book.description,
//       ISBN: book.industryIdentifiers[0].identifier,
//     };
//     //console.log(bookObject);

//     books = [...books, bookObject];
// //    console.log(books);

//     // add books array to localStorage
//     localStorage.setItem("books", JSON.stringify(books));
//   };

//   const getBooks = () => {
//     return books;
//   };
//   const deleteBook = (ISBN) => {
//     books = books.filter((book) => book.ISBN != ISBN);
//     // books = books.splice(index, 1);
//     console.log("delete");
//     console.log(books);
//   };
//   return {
//     addBook,
//     getBooks,
//     deleteBook,
//   };
// })();

// export default wishList;
