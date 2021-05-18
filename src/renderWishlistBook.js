const renderWishlistBook = (book, index) => {
  const html = `



  <div  class="wishlist__img-holder">
  <img
  data-index = ${index}
  id = "wishlist-img"
    src="${book.img}"
    alt=""
    class="wishlist__img"
  />

  <button data-ISBN = ${book.ISBN} id="delete-card-wishlist" class="wishlist__btn-delete">x</button>
</div>
  
      
      
      `;
  return html;
};

export default renderWishlistBook;
