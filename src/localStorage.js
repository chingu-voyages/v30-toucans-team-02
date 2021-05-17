import wishList from "./wishList";
import searchedBooks from "./searchedBooks";

console.log("localstorage here!")
//console.log(books);

const addBookToLocalStorage = () => {
    // add book to localStorage
    const sampleBook = {
        title: "Cold Fire",
        authors: "Dean Koontz",
        description: "Intrigued by reports of a man who has saved twelve lives in just three months, reporter Holly Thorne investigates and finds herself attracted to the tortured saving angel",
    };

    const books = [];
    books.push(book);
    // books.push(wishList.getBooks());
    console.log(books);

    //localStorage.setItem('book', JSON.stringify(sampleBook));
    localStorage.setItem('books', JSON.stringify(books));

}

const clearLocalStorage = () => {
    // clear localStorage
}

export default addBookToLocalStorage;