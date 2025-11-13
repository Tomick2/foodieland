class Header {
  elements = {
    header: "[data-js-header]",
    burgerButton: "[data-js-burger-button]"
  }

  classState = {
    isActive: "burger-button-is-active"
  }

  constructor() {
    this.headerElement = document.querySelector(this.elements.header)
    this.burgerButton = this.headerElement.querySelector(this.elements.burgerButton)
    this.bindEvents()
  }

  bindEvents() {
    this.burgerButton.addEventListener("click", () => {
      this.headerElement.classList.toggle(this.classState.isActive)
    })
  }
}

export default Header