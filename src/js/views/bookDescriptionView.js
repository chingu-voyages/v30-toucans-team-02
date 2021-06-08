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

      console.log(descriptionArray, index);
    };
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
      if (
        e.target.className.includes("modal__btn-close") ||
        e.target.id === "myModal"
      ) {
        console.log("modal__btn-close", "click");
        handler();
      }
    });
    // const modalCloseBtn = document.querySelector(".modal__btn-close");
    // modalCloseBtn.addEventListener("click", handler);
  }

  // addHandlerShowDescription(handler) {
  //   handler();
  // }

  addHandlerShowDescription(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      if (e.target.id == "info") {
        // console.log("test");
        let ISBN = e.target.getAttribute("data-index");

        handler(ISBN);
      }
    });
  }

  showDescription(info) {
    // console.log("view info", info);
    // put index into modal markup as data-index = ${index}
    // get index from data-index to get descriptions[index]
    // add descriptions[index] to modal markup in .modal__description <p> tag
    const description = info;
    // "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.";
    document.querySelector(".modal__description").innerText = description;
    //this.#parentElement.insertAdjacentHTML("beforeend", markup);
  }
}

export default new BookDescriptionView();
