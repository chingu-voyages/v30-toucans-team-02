class BookDescriptionView {
  #parentElement = document.querySelector(".container");

  Modal;
  addHandlerGetDescriptionArray(handler) {
    handler();

    const getDescription = (description, index) => {
      if (clearDescriptionResults) {
        this.descriptionArray = [];
        clearDescriptionResults = false;
        this.descriptionArray.push(description);
      } else {
        this.descriptionArray.push(description);
      }
    };
  }

  addHandlerToggleModal(handler) {
    const descriptionArray = this.addHandlerGetDescriptionArray(handler);
    descriptionContainer.innerHTML = `${descriptionArray[index]}`;
    this.toggleModal();
  }

  addHandlerShowDescriptionButton(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      if (e.target.className.includes("fa-info-circle")) {
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
  }

  addHandlerHideDescription(handler) {
    document.getElementById("myModal").addEventListener("click", (e) => {
      if (
        e.target.className.includes("modal__btn-close") ||
        e.target.id === "myModal"
      ) {
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
    const title = info.title;
    const description = info.description;

    document.querySelector(".modal__title").innerText = title;
    document.querySelector(".modal__description").innerText = description;
    document.querySelector(".modal__google").value = `Buy ${title}`;
  }
}

export default new BookDescriptionView();
