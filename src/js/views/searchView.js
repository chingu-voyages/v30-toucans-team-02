class SearchView {
  #parentEl = document.querySelector(".search__input");

  getQuery() {
    return this.#parentEl.value.split(" ").join("+");
  }

  //   clear() {
  //     this.#parentEl.value = "";
  //   }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener("keypress", (e) => {
      console.log("hello");
      if (e.key === "Enter") {
        // this.clear();
        handler();
      }
    });
  }
}

export default new SearchView();
