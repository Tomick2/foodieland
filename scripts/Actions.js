class Actions {
  dataJsList = {
    printRecipe: "[data-js-print-recipe]",
    shareRecipe: "[data-js-share-recipe]"
  }

  constructor() {
    this.printButton = document.querySelector(this.dataJsList.printRecipe)
    this.shareRecipe = document.querySelector(this.dataJsList.shareRecipe)
    this.bindEvent()
  }

  bindEvent() {
    this.printButton.addEventListener("click", () => window.print())
    this.shareRecipe.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href)
    })
  }
}

export default Actions