class FormValidation {
  dataJsList = {
    form: "[data-js-form]",
    formButtont: "[data-js-form-button]",
    formField: "[data-js-form-field]",
    formFieldError: "[data-js-form-field-error]",
  }

  constructor() {
    this.formElement = document.querySelector(this.dataJsList.form)
    this.formButtonElement = document.querySelector(this.dataJsList.formButtont)
    this.formFieldElements = document.querySelectorAll(this.dataJsList.formField)
    this.formFieldErrorElements = document.querySelectorAll(this.dataJsList.formFieldError)
    this.bindEvent()
  }

  validateField(formElement) {
    const errors = formElement.validity

    if (!errors.valid) {
      formElement.ariaErrorMessageElements[0].innerHTML = formElement.title
    } else {
      formElement.ariaErrorMessageElements[0].innerHTML = ""
    }

    formElement !== 0
  }

  onSubmit(event) {
    if (!event.target.matches(this.dataJsList.form)) {
      return
    }

    const requiredControlElements = [...event.target.elements].filter(({ required }) => required)
    let isFormValid = true

    requiredControlElements.forEach(element => {
      const isFieldValid = this.validateField(element)

      if (!isFieldValid) {
        isFormValid = false
      }
    })

    if (!isFormValid) {
      event.preventDefault()
    }
  }

  bindEvent() {
    document.addEventListener("focusout", (event) => {
      if (event.target.closest(this.dataJsList.form) && event.target.required) {
        this.validateField(event.target)
      }
    })

    document.addEventListener("submit", (event) => this.onSubmit(event))
  }
}

export default FormValidation