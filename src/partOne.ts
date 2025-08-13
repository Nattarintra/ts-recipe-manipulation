export const partOne = (): void => {
  // QA 1 & 2
  const nameOfTheRecipeEl = document.getElementById("recipe-name")
  const recipeName = nameOfTheRecipeEl?.textContent
  console.log("TextWhat is the name of the recipe? " + recipeName)
  const HtmlTagName = nameOfTheRecipeEl?.tagName
  console.log("What HTML tag is used to display the Recipe name? " + HtmlTagName)

  // QA 3
  const el = document.querySelector(".description")!
  const checkFontSize = window.getComputedStyle(el).fontSize
  console.log("What is the font size of the paragraph tag with the class 'description' " + checkFontSize)

  // QA 4 & 5
  const imgEl = document.querySelector("img")!
  const altValue = imgEl?.getAttribute("alt")
  console.log("What is the value of the alt atrribute on the image? " + altValue)

  const imageData = {
    url: imgEl.src,
    height: imgEl.naturalHeight,
    width: imgEl.naturalWidth
  }
  console.log(imageData)

  //QA 6-7
  const pasteIngredients = document.querySelectorAll(".ingredients-list-paste li")
  console.log("count node list " + pasteIngredients.length)
  const forthNodeList = pasteIngredients[3]
  console.log("the forth node " + forthNodeList.textContent)

  // QA 8
  const instructionEls = document.querySelectorAll(".instructions-list li")
  const instructionsArray = Array.from(instructionEls).map((el, index) => ({
    order: index + 1,
    text: el.textContent?.trim() || ""
  }))

  console.log(instructionsArray)
}
