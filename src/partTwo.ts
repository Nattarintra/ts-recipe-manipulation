import cheesecake from "./assets/frozen-cheesecake-slice.jpg"
export const partTwo = () => {
  // The logo text of the site has the wrong color. Change it to the correct one.
  const logoText = document.querySelector(".logo-text") as HTMLElement | null
  if (logoText) {
    logoText.style.color = "#384241"
  }
  // The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  // The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
  const headerEl = document.querySelector("header") as HTMLElement | null
  if (headerEl) {
    headerEl.style.justifyContent = "flex-start"
    headerEl.style.borderBottomColor = "lightgray"
  }

  // The recipe name is wrong, change it to the correct one.
  const recipeNameEl = document.querySelector("#recipe-name")
  if (recipeNameEl) {
    recipeNameEl.innerHTML = "Frozen cheesecake"
  }

  // The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
  const firstChild = document.querySelector(".time-container > :first-child")
  if (firstChild) {
    firstChild.classList.add("material-symbols-outlined")
  }

  // The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
  const timeEl = document.querySelector(".time")
  if (timeEl) {
    timeEl.innerHTML = "60+ min"
  }

  // The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
  const imgEl = document.querySelector("img")
  if (imgEl) {
    imgEl.src = cheesecake
  }

  // The background color of the ingredients list container is wrong. Fix it.
  const bgImageEl = document.querySelector(".ingredients-container") as HTMLElement | null
  if (bgImageEl) {
    bgImageEl.style.background = "#f9f9f9"
  }
  // The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
  const ingredientsEl = document.querySelector(".ingredients-list-bottom")
  const newEl = ["15st digistivetex", "Lite smör"]
  if (ingredientsEl) {
    ingredientsEl.innerHTML = ""
    newEl.forEach(text => {
      const li = document.createElement("li")
      li.textContent = text
      ingredientsEl.appendChild(li)
    })
  }

  // The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
  // There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
  const pasteEl = document.querySelector(".ingredients-list-paste")
  const newpasteEl = ["15st 3st ägg", "1,5dl strösocker", "3tsk vaniljsocker", "3dl vispgrädde", "400g naturell philadelphiaost"]

  if (pasteEl) {
    pasteEl.innerHTML = " "
    newpasteEl.forEach(text => {
      const li = document.createElement("li")
      li.textContent = text
      pasteEl.appendChild(li)
    })
  }

  // The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

  const shadowEl = document.querySelector(".shadow") as HTMLElement | null
  if (shadowEl) {
    shadowEl.style.boxShadow = "none"
  }
  // Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones. 2 & 9

  const instructionsEl = [
    { index: 2, text: "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke." },
    { index: 9, text: "Ställ in i frysen över natten." }
  ]

  instructionsEl.forEach(({ index, text }) => {
    const el = document.querySelector(`.instructions-list > :nth-child(${index})`)
    if (el) el.textContent = text
  })
}
