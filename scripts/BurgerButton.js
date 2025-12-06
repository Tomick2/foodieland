class BurgerButton {
  dataJsList = {
    header: "[data-js-header]",
    burgerButton: "[data-js-burger-button]"
  }

  classState = {
    isActive: "burger-button-is-active",
    isLock: "is-lock"
  }

  constructor() {
    this.headerElement = document.querySelector(this.dataJsList.header)
    this.burgerButton = this.headerElement.querySelector(this.dataJsList.burgerButton)
    this.bindEvents()
  }

  bindEvents() {
    this.burgerButton.addEventListener("click", () => {
      this.headerElement.classList.toggle(this.classState.isActive)
      document.documentElement.classList.toggle(this.classState.isLock)
    })
  }
}

export default BurgerButton