class ButtonLike {
  dataJsList = {
    buttonLike: "[data-js-button-like]",
  }

  stateClasses = {
    like: "like",
    dislike: "dislike"
  }

  constructor() {
    this.buttonElements = document.querySelectorAll(this.dataJsList.buttonLike)
    this.bindEvent()
  }

  bindEvent() {
    this.buttonElements.forEach(buttonElement => {
      buttonElement.addEventListener("click", () => {
        buttonElement.classList.toggle(this.stateClasses.like)
  
        if (buttonElement.classList.contains(this.stateClasses.like)) {
          buttonElement.ariaLabel = this.stateClasses.like
        } else {
          buttonElement.ariaLabel = this.stateClasses.dislike
        }
      })
    });
  }
}

export default ButtonLike