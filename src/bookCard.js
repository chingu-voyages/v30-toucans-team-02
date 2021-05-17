const renderCard = (data) => {
  const html = `
     
  
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
            
            <i class="fas fa-info-circle fa-3x"></i>
          </div>
          <div class = "add-to-read-list">
          <i class="fas fa-book-reader fa-2x"></i>
            <p>Add to read list</p>

          </div>
        </div>
        
      </div>
    </div>
</div>
      
    
    `;
  return html;
};

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
