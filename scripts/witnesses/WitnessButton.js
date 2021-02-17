// import { useWitnesses, getWitnesses } from "./WitnessProvider.js"
// import { Witness } from "./Witness.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".button__witnesses")
// debugger

export const renderWitnessButton = () => {

    contentTarget.innerHTML = `
    <button id="witnessButton">Witness Statements</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "witnessButton") {

        const witnessButtonCustomEvent = new CustomEvent("WitnessesClicked")
        
        // console.log('witnessButtonCustomEvent: ', witnessButtonCustomEvent);
        eventHub.dispatchEvent(witnessButtonCustomEvent)
}
})