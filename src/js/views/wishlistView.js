//import { getWishlist } from "../model";

class WishlistView {
  // #parentElement = document.querySelector(".wishlist__book-container");
  #parentElement = document.querySelector(".wishlist");
  #data;
  #wishlistShow = false;
  #errorMessage = "We could not find any books. Please try another search!";

  render(data) {
    //console.log("data", data);
    this.#data = data;
    this.#clear();
    data.forEach((book) => {
      let markup = this.#generateMarkup(book);
      this.#parentElement
        .querySelector(".wishlist__book-container")
        .insertAdjacentHTML("beforeend", markup);
    });
  }

  #clear() {
    this.#parentElement.querySelector(".wishlist__book-container").innerHTML =
      "";
  }

  toggleShow() {
    this.#parentElement.classList.toggle("show-wishlist");
  }

  wishlistIsOpen() {
    return this.#wishlistShow;
  }

  addHandlerDeleteBookWishlist(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      if (e.target.id == "delete-card-wishlist") {
        let ISBN = e.target.getAttribute("data-ISBN");
        handler(ISBN);
      }
    });
  }

  addHandlerShowWishListButton(handler) {
    document.querySelector(".btn__wishlist").addEventListener("click", (e) => {
      this.#wishlistShow = !this.#wishlistShow;
      handler();
    });
  }
  
  #generateMarkup(book) {
    const html = `



    <div  class="wishlist__img-holder">
    <img
    data-index = ${book.ISBN}
    id = "wishlist-img"
      src="${book.img}"
      alt=""
      class="wishlist__img"
    />
  
    <button data-ISBN = ${book.ISBN} id="delete-card-wishlist" class="wishlist__btn-delete">x</button>
  </div>
    
        
        
        `;
    return html;
  }
}

export default new WishlistView();
