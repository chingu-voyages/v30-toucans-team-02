class BookView {
  #parentElement = document.querySelector(".container");
  #data;
  #errorMessage = "We could not find any books. Please try another search!";

  render(data) {
    this.#data = data;
    this.#clear();
    console.log(data);
    data.forEach((book) => {
      let markup = this.#generateMarkup(book);
      this.#parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  // addHandleerender(handler)

  #generateMarkup(book) {
    const html = `
     
  
    <div class="flipcard">
      <div class="flipcard__inner">
        <div class="flipcard__front">
          <div class="flipcard__card">
            <img  src="${book.img}" />
            <div class="flipcard__details">
              <p>${book.title}</p>
              <span class = "line"></span>
  
              <p class="subtitle">${book.authors}</p>
            </div>
          </div>
        </div>
        <div class="flipcard__back">
          <div class = "flipcard__backcard">
  
            <div class ="info">
              
              <i class="fas fa-info-circle fa-3x"></i>
            </div>
            <div class = "add-to-read-list">
            <i id = "wishlist" data-index = ${book.ISBN} class="fas fa-book-reader fa-2x"></i>
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
