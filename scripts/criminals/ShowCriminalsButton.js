const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".button__criminals")

//renders criminal button to the dom
export const renderCriminalsButton = () => {
    contentTarget.innerHTML = `
        <button id="display-criminals-button">List Criminals</button>
    `
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-criminals-button") {

    const criminalsButtonClicked = new CustomEvent("criminalsClicked")

    eventHub.dispatchEvent(criminalsButtonClicked)

}
})