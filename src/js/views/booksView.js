class BookView {
  #parentElement = document.querySelector(".container");
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    console.log("this is this data");
    console.log(this.#data);
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    console.log(this.#data);
    const html = `
     
  
    <div class="flipcard">
      <div class="flipcard__inner">
        <div class="flipcard__front">
          <div class="flipcard__card">
            <img  src="${this.#data.img}" />
            <div class="flipcard__details">
              <p>${this.#data.title}</p>
              <span class = "line"></span>
  
              <p class="subtitle">${this.#data.authors}</p>
            </div>
          </div>
        </div>
        <div class="flipcard__back">
          <div class = "flipcard__backcard">
  
            <div class ="info">
              
              <i class="fas fa-info-circle fa-3x"></i>
            </div>
            <div class = "add-to-read-list">
            <i id = "wishlist" data-index = ${
              this.#data.ISBN
            } class="fas fa-book-reader fa-2x"></i>
              <p>Add to read list</p>
  
            </div>
          </div>
          
        </div>
      </div>
  </div>
        
      
   `;
    console.log(html);
    return html;
  }
}

export default new BookView();
