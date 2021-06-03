class BookDescriptionView {
  #parentElement = document.querySelector(".container");

  //Modal
  addHandlerGetDescriptionArray(handler) {
      // console.log("handler", handler());
      handler();

      // const getDescription = (description, index) => {
      //     if (clearDescriptionResults) {
      //         this.descriptionArray = [];
      //         clearDescriptionResults = false;
      //         this.descriptionArray.push(description);
      //     } else {
      //         this.descriptionArray.push(description);
      //     }

      //     console.log(descriptionArray, index);
      // };
  }
  
  addHandlerToggleModal(handler) {
    // const button = Array.from(document.getElementsByClassName("fa-info-circle"));
    const descriptionArray = this.addHandlerGetDescriptionArray(handler);
   // console.log("descriptionArray in BookDescriptionView", descriptionArray);
    
    // button.forEach((btn, index) => {
        // modal.setAttribute("data-key", index);
        // btn.addEventListener("click", () => {
        //   const descriptionContainer = document.querySelector(".modal__description");
          descriptionContainer.innerHTML = `${descriptionArray[index]}`;

          //get from model...from controller
          // if (`${descriptionArray[index]}` === "undefined") {
          //   descriptionContainer.innerHTML = "Description for this title is not available.";
          // } else {
          //   descriptionContainer.innerHTML = `${descriptionArray[index]}`;
          // }
          this.toggleModal();
        // });
      // });
    }

  // show modal when "i" button is clicked
  addHandlerShowDescriptionButton(handler) {
    // const button = Array.from(document.getElementsByClassName("fa-info-circle"));
    // button.forEach((btn, index) => {
      //   // modal.setAttribute("data-key", index);
      //   btn.addEventListener("click", (e) => {
        //     const descriptionContainer = document.querySelector(".modal__description");
        //   });
        // });
    // const button = document.getElementsByClassName("fa-info-circle");
    // button.addEventListener("click", () => {
    //     // const descriptionContainer = document.querySelector(".modal__description");
    //     //this.toggleModal();
    //     handler();
    // });

    
    this.#parentElement.addEventListener("click", (e) => {
      console.log("event", e);
      if (e.target.className.includes("fa-info-circle")) {
        console.log("fa-info-circle", "click");
        handler();
      }
    });
  }

  toggleModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    // button.forEach((btn, index) => {
    //   // modal.setAttribute("data-key", index);
    //   btn.addEventListener("click", () => {
  }
  
  closeModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

  addHandlerToggleButton(handler) {
    console.log("addHandlerToggleButton in view:", "toggled");
  }

  addHandlerHideDescription(handler) {
    document.getElementById("myModal").addEventListener("click", (e) => {
      console.log("addHandlerHideDescription event", e);
      if (e.target.className.includes("modal__btn-close") || e.target.id === "myModal") {
        console.log("modal__btn-close", "click");
        handler();
      }
    });
    // const modalCloseBtn = document.querySelector(".modal__btn-close");
    // modalCloseBtn.addEventListener("click", handler);
  }
}

export default new BookDescriptionView();