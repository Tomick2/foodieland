class ScrollRecipes {
  constructor () {
    this.scroll = document.querySelector("[data-js-scroll-recipes]")
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