import BurgerButton from "./BurgerButton.js"
import ButtonLike from "./ButtonLike.js"

import ScrollRecipes from "./ScrollRecipes.js"
import Actions from "./Actions.js"

new BurgerButton()
new ButtonLike()

const pageIdList = {
  home: "home",
  recipes: "recipes",
  home: "home",
  home: "home",
  home: "home",
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
} 
