import { useWitnesses } from "../witnesses/WitnessProvider.js"

export const WitnessList = (witnessObj) => {
    const contentContainer = document.querySelector(".witnessesContainer")

    const witnessHTMLRepresentations = `
    <h3>Witness Statements for ${witnessObj.name}</h3>
    ${witnessObj.witness.map(witness => {
    return `<section class="witness__containter">
    <div class="witness__name">Name: ${witnessObj.name}</div>
    <div class="witness__statements">Witness Statements: ${witnessObj.statements}</div>
    </section>`
    }).join("")}`
    
    contentContainer.innerHTML = witnessHTMLRepresentations
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("WitnessesClicked", clickEvent => {
    console.log("event", clickEvent)
    const selectedCriminalId = clickEvent.detail.criminalId
    const criminalsArray = useWitnesses()
    const selectedCriminal = criminalsArray.find((criminalObj) => criminalObj.id === selectedCriminalId)
    console.log('selectedCriminal: ', selectedCriminal)
    WitnessList(selectedCriminal)

})