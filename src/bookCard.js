const renderCard = (data) => {
  const html = `
     
  
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div class="card">
        <img src="${data.image}" />
        <div class="container">
          <p>${data.title}</p>
          <span></span>

          <p class="subtitle">${data.author}</p>
        </div>
      </div>
    </div>
    <div class="flip-card-back">
      <a href="">I<a/>
      <a href="">Add to read list<a/>
     
   
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
