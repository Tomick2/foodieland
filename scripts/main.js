import BurgerButton from "./BurgerButton.js"
import ButtonLike from "./ButtonLike.js"

import ScrollRecipes from "./ScrollRecipes.js"
import Actions from "./Actions.js"
import Select from "./Select.js"
import Textarea from "./Textarea.js"
import FormValidation from "./FormValidation.js"

new BurgerButton()
new ButtonLike()

const pageIdList = {
  home: "home",
  recipes: "recipes",
  search: "search",
  contact: "contact",
}

const pageId = document.body.id

switch (pageId) {
  case pageIdList.home: {
    new ScrollRecipes()
    break
  }
  case pageIdList.recipes: {
    new Actions()
    break
  }
  case pageIdList.contact: {
    new Select()
    new Textarea()
    new FormValidation()
    break
  }
} 
