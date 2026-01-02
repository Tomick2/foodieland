class Select {
  ignoreFocusOut = false;

  dataJsList = {
    select: "[data-js-select]",
    originalSelect: "[data-js-original-select]",
    customSelectButton: "[data-js-custom-select-button]",
    customSelectList: "[data-js-custom-select-list]",
    customSelectOption: "[data-js-custom-select-option]",
  }

  classState = {
    isActive: "is-active",
    isSelected: "is-selected",
  }

  stateAttributes = {
    ariaExpanded: "aria-expanded",
    ariaSelected: "aria-selected",
    ariaActiveDescendant: "aria-ariadescendant",
  }

  constructor() {
    this.selectElement = document.querySelector(this.dataJsList.select)
    this.originalSelectElement = document.querySelector(this.dataJsList.originalSelect)
    this.customSelectButtonElement = document.querySelector(this.dataJsList.customSelectButton)
    this.customSelectListElement = document.querySelector(this.dataJsList.customSelectList)
    this.customSelectOptionElements = document.querySelectorAll(this.dataJsList.customSelectOption)
    this.bindEvent()
  }

  openAndCloseCustomSelect() {
    this.customSelectButtonElement.classList.toggle(this.classState.isActive)
    this.customSelectListElement.classList.toggle(this.classState.isActive)

    if (this.customSelectButtonElement.classList.contains(this.classState.isActive)) {
      this.customSelectOptionElements.forEach(customSelectOptionElement => {
        customSelectOptionElement.tabIndex = 0
      })
    } else {
      this.customSelectOptionElements.forEach(customSelectOptionElement => {
        customSelectOptionElement.tabIndex = -1
      })
    }
  }

  selectOption(customSelectOptionElement) {
    this.customSelectOptionElements.forEach(optionElement => {
      optionElement.classList.remove(this.classState.isSelected)
    })

    customSelectOptionElement.classList.toggle(this.classState.isSelected)

    this.customSelectButtonElement.textContent = customSelectOptionElement.textContent

    this.originalSelectElement[customSelectOptionElement.id.slice(-1) - 1].selected = true

    this.ignoreFocusOut = true
    this.openAndCloseCustomSelect()

    this.customSelectButtonElement.focus()

    setTimeout(() => {
      this.ignoreFocusOut = false
    }, 0)
  }

  bindEvent() {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("custom-select__button")) {
        this.openAndCloseCustomSelect()
      } else if(this.customSelectButtonElement.classList.contains(this.classState.isActive)) {
        this.openAndCloseCustomSelect()
      }
    })

    this.customSelectButtonElement.addEventListener("keydown", (event) => {
      if (event.key === 'Enter') {
        this.openAndCloseCustomSelect()
        
        this.customSelectOptionElements[0].focus()
      }
    })

    this.customSelectListElement.addEventListener("focusout", (event) => {
      if (!this.customSelectListElement.contains(event.relatedTarget) && !this.ignoreFocusOut) this.openAndCloseCustomSelect()
    })


    this.customSelectOptionElements.forEach(customSelectOptionElement => {
      customSelectOptionElement.addEventListener("click", () => {
        this.selectOption(customSelectOptionElement)
      })

      customSelectOptionElement.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
          this.selectOption(customSelectOptionElement)
        }
      })
    })
  }
}

export default Select