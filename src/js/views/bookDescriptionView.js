class BookDescriptionView {
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
    const button = Array.from(document.getElementsByClassName("fa-info-circle"));
    const descriptionArray = this.addHandlerGetDescriptionArray(handler);
   // console.log("descriptionArray in BookDescriptionView", descriptionArray);
    
    button.forEach((btn, index) => {
        // modal.setAttribute("data-key", index);
        btn.addEventListener("click", () => {
          const descriptionContainer = document.querySelector(".modal__description");
          descriptionContainer.innerHTML = `${descriptionArray[index]}`;

          //get from model...from controller
          // if (`${descriptionArray[index]}` === "undefined") {
          //   descriptionContainer.innerHTML = "Description for this title is not available.";
          // } else {
          //   descriptionContainer.innerHTML = `${descriptionArray[index]}`;
          // }
          this.toggleModal();
        });
      });
    }

  toggleModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  }
  
  closeModal() {
    modalCloseBtn = document.querySelector(".modal__btn-close");
    modalCloseBtn.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      modal.style.display = "none";
    });
  }

  addHandlerToggleButton(handler) {
    console.log("addHandlerToggleButton in view:", "toggled");
  }
}

export default new BookDescriptionView();