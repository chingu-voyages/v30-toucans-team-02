const renderCard = (data, index) => {
  const html = `

  <div id='myModal' class='modal'>
  <div class='modal__content'>
  <span class="modal__btn-close">&times;</span>
  <p class='modal__description'>${data.description}</p>
</div>
</div>

  <div class="flipcard">
    <div class="flipcard__inner">
      <div class="flipcard__front">
        <div class="flipcard__card">
          <img  src="${data.imageLinks.thumbnail}" />
          <div class="flipcard__details">
            <p>${data.title}</p>
            <span class = "line"></span>
            <p class="subtitle">${data.authors[0]}</p>
          </div>
        </div>
      </div>
      <div class="flipcard__back">
        <div class = "flipcard__backcard">
          <div class ="info">
           <p > ${data.description}</p>
            <i class="fas fa-info-circle fa-3x nm"></i>
          </div>
          <div class = "add-to-read-list">
          <i id = "wishlist" data-index = ${index} class="fas fa-book-reader fa-2x"></i>
            <p>Add to read list</p>

          </div>
        </div>
        
      </div>
    </div>
   
</div>
      
    
    `;
  return html;
};
// const modal = () => {
//   const description = document.querySelector(".modal__description");
//   description.returnValue = `${data.description}`;
//   console.log(modal);
// };
// const renderCard = (data) => {
//   const html = `

//     <div class="card">
//       <img
//         src="${data.image}"

//       />
//         <div class="container">

//         <p>${data.title}</p>
//         <span></span>

//         <p class="subtitle">${data.author}</p>
//       </div>

//     </div>

//     `;
//   return html;
// };

export default renderCard;
