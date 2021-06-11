class BookView {
  #parentElement = document.querySelector(".container");
  #data;
  #errorMessage = "We could not find any books. Please try another search!";

  render(data) {
    this.#data = data;
    this.#clear();
    data.forEach((book) => {
      let markup = this.#generateMarkup(book);
      this.#parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  addHandlerAddBookWishlist(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      if (e.target.id == "wishlist") {
        let ISBN = e.target.getAttribute("data-index");
        handler(ISBN);
      }
    });
  }

  #generateMarkup(book) {
    console.log(book);
    let bookTitle = book.title.split(" ");
    // console.log(bookTitle);
    if (bookTitle.length > 5) {
      console.log(bookTitle.slice(0, 5));
      console.log(bookTitle.slice(0, 5).join(" ") + "...");

      // let bookTitle = bookTitle.slice(0, 3).join() + "....";
    } else {
      // let bookTitle = bookTitle.join();
    }

    const html = `
     
  
    <div class="flipcard">
      <div class="flipcard__inner">
        <div class="flipcard__front">
          <div class="flipcard__card">
            <img  src="${book.img}" />
            <div class="flipcard__details">
              <p><b>${book.title}</b></p>
              <span class = "line"></span>
  
              <p class="subtitle">${book.author ? book.author : ""}</p>
            </div>
          </div>
        </div>
        <div class="flipcard__back">
          <div class = "flipcard__backcard">
  
            <div class="info" >
              
              <i id = "info"  data-index = ${
                book.ISBN
              } class="fas fa-info-circle fa-3x"></i>
            </div>
            <div class = "add-to-read-list">
            <i id = "wishlist" data-index = ${
              book.ISBN
            } class="fas fa-book-reader fa-2x"></i>
              <p>Add to read list</p>
  
            </div>
          </div>
          
        </div>
      </div>
  </div>
        
      
   `;

    return html;
  }
}

export default new BookView();
