const searchedBooks = (() => {
  let books = [];

  const getBooks = () => {
    return books;
  };

  const addSearch = (data) => {
    books = data;
  };
  return {
    getBooks,
    addSearch,
  };
})();

export default searchedBooks;
