class ScrollRecipes {
  dataJsList = {
    slider: "[data-js-scroll-recipes]"
  }

  constructor () {
    this.scroll = document.querySelector(this.dataJsList.slider)
    this.bindEvent()
  }

  bindEvent() {
    this.scroll.addEventListener('wheel', (event) => {
      event.preventDefault()
      this.scroll.scrollLeft += event.deltaY
    })
  }
}

export default ScrollRecipes