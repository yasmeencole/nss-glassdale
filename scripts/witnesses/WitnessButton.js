import { useWitnesses, getWitnesses } from "./WitnessProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector("witnessButton")
// debugger

export const WitnessButton = () => {

    getWitnesses()
        .then( () => {
            const witnesses = useWitnesses()
            render(witnesses)
        })

}


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "witnessButton") {
        const witnessThatWasChosen = clickEvent.target.value
        const witnessCustomEvent = new CustomEvent("WitnessesClicked", {
            detail: {
                witnessThatWasChosen: witnessThatWasChosen
            }
        // console.log('witnessCustomEvent: ', witnessCustomEvent);
    })
    eventHub.dispatchEvent(witnessCustomEvent)
}
})



contentTarget.innerHTML =`
    <button id="display-witness-button">Witness Statements</button>
    `