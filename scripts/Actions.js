class Actions {
  dataJsList = {
    printRecipe: "[data-js-print-recipe]",
    shareRecipe: "[data-js-share-recipe]",
    alertRecipe: "[data-js-alert-recipe]"
  }

  constructor() {
    this.printButton = document.querySelector(this.dataJsList.printRecipe)
    this.shareRecipe = document.querySelector(this.dataJsList.shareRecipe)
    this.alertRecipe = document.querySelector(this.dataJsList.alertRecipe)
    this.bindEvent()
  }

  bindEvent() {
    this.printButton.addEventListener("click", () => window.print())
    this.shareRecipe.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href)
      this.alertRecipe.classList.toggle("visually-hidden")

      setTimeout(() => {
        this.alertRecipe.classList.toggle("visually-hidden")
      }, 5000)
    })
  }
}

export default Actions