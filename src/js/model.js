export const state = {
  books: [
    { ISBN: "987", title: "test", author: "name", img: "yo" },
    { ISBN: "987", title: "test", author: "name", img: "yo" },
  ],
};

export const loadSearchResults = async (query) => {
  console.log(query);
  try {
    // console.log("Model");
    // console.log(query);
    // fetch data
    // state.books = data.map(book =>{
    //   return {
    //     ISBN: book.isbn,
    //     title: book.title,
    //     author: book.author,
    //     img: book.img,
    //   }
    // })
  } catch (err) {
    throw err;
  }
};

// export const loadBooks = async (search) => {
//   const book = [];
//   // fetch data from api
//   // const { book } = data.data;
//   // state.books = {
//   //     ISBN:
//   //     title:
//   //     author:
//   //     image:
//   // }
// };

// export const loadSearchResults = async (query)
