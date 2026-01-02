class Textarea {
  dataJsList = {
    textareaWrapper: "[data-js-form-textarea-wrapper]",
    textarea: "[data-js-form-textarea]",
  }

  classState = {
    isFocus: "is-focus",
  }

  constructor() {
    this.textareaWrapperElement = document.querySelector(this.dataJsList.textareaWrapper)
    this.textareaElement = document.querySelector(this.dataJsList.textarea)
    this.bindEvent()
  }

  bindEvent() {
    this.textareaWrapperElement.addEventListener("click", () => {
      this.textareaElement.focus()
    })

    this.textareaElement.addEventListener("focus", () => {
      this.textareaWrapperElement.classList.add(this.classState.isFocus)
    })

    this.textareaElement.addEventListener("focusout", () => {
      this.textareaWrapperElement.classList.remove(this.classState.isFocus)
    })
    
    this.textareaElement.addEventListener('input', () => {
      if (this.textareaElement.scrollHeight > this.textareaElement.clientHeight) {
        this.textareaElement.style.paddingRight = "5px"
        this.textareaWrapperElement.style.paddingRight = 0
      } else {
        this.textareaWrapperElement.style.paddingRight = "1.25rem"
        this.textareaElement.style.paddingRight = 0
      }
    })

  }
}

export default Textarea