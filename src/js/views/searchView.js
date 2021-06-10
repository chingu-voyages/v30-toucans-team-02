class SearchView {
  #parentEl = document.querySelector(".search__input");

  getQuery() {
    return this.#parentEl.value.split(" ").join("+");
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        // this.clear();
        handler();
      }
    });
  }
}

export default new SearchView();
