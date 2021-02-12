import { useCriminals } from "../criminals/CriminalProvider.js"
import "./AssociatesButton.js"
import { Criminal } from ".."

const contentContainer = document.querySelector(".associateDetails")

export const render = (associatesObj) => {

    const associatesHTMLRepresentations = `
    <h2>Known associates for ${criminalObj.name}</h1>
    
    <section class="associate__container">
    <div class="associate__name">Name: ${associatesObj.known_associates.name}</div>
    <div class="associate__alibi">Alibi: ${associatesObj.known_associates.alibi}</div>
    </section>`

    contentContainer.innerHTML = associatesHTMLRepresentations
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", clickEvent => {
    const selectedCriminalId = clickEvent.detail.criminalId
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminalObj) => criminalObj.id === selectedCriminalId)
    AssociatesModal(selectedCriminal)
})
