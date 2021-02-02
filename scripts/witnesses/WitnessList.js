import { useCriminals } from '../criminals/CriminalProvider.js'

export const WitnessList = (criminalObj) => {
    const contentContainer = document.querySelector(".witnessesContainer")

    const witnessHTMLRepresentations = `
    <h3>Witness Statements for ${criminalObj.name}</h3>
    ${criminalObj.witness.map(witness => {
    return `<section class="witness__containter">
    <div class="witness__name">Name: ${witness.name}</div>
    <div class="witness__statements">Witness Statements: ${witness.statements}</div>
    </section>`
    }).join("")}`
    
    contentContainer.innerHTML = witnessHTMLRepresentations
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("WitnessesClicked", clickEvent => {
    console.log("event", clickEvent)
    const selectedCriminalId = clickEvent.detail.criminalId
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminalObj) => criminalObj.id === selectedCriminalId)
    console.log('selectedCriminal: ', selectedCriminal)
    WitnessList(selectedCriminal)

})