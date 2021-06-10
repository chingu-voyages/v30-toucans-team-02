class BookDescriptionView {
  #parentElement = document.querySelector(".container");

  Modal;
  addHandlerGetDescriptionArray(handler) {
    // console.log("handler", handler());
    handler();

    const getDescription = (description, index) => {
      if (clearDescriptionResults) {
        this.descriptionArray = [];
        clearDescriptionResults = false;
        this.descriptionArray.push(description);
      } else {
        this.descriptionArray.push(description);
      }

      //console.log(descriptionArray, index);
    };
  }

  addHandlerToggleModal(handler) {
    const descriptionArray = this.addHandlerGetDescriptionArray(handler);
    descriptionContainer.innerHTML = `${descriptionArray[index]}`;
    this.toggleModal();
  }

  addHandlerShowDescriptionButton(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      //console.log("event", e);
      if (e.target.className.includes("fa-info-circle")) {
        //console.log("fa-info-circle", "click");
        handler();
      }
    });
  }

  toggleModal() {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
  }

  closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
    // modal.style.display = "none";
  }

  addHandlerHideDescription(handler) {
    document
      // .querySelector(".modal__btn-close")
      .getElementById("myModal")
      .addEventListener("click", (e) => {
        //console.log("addHandlerHideDescription event", e);
        if (
          e.target.className.includes("modal__btn-close") ||
          e.target.id === "myModal"
        ) {
          //console.log("modal__btn-close", "click");
          handler();
        }
      });
  }

  addHandlerShowDescription(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      if (e.target.id == "info") {
        let ISBN = e.target.getAttribute("data-index");
        handler(ISBN);
      }
    });
  }

  showDescription(info) {
    const description = info;
    document.querySelector(".modal__description").innerText = description;
  }
}

export default new BookDescriptionView();
