import "./WitnessList.js"

// debugger
export const WitnessButton = (witnessObj) => {
    return `<button id="witness--${criminalObj.id}">Witness Statements</button>`
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("witness--")) {
        const [prefix, criminalId] = clickEvent.target.id.split("--")
        const customEvent = new CustomEvent("WitnessesClicked", {
            detail: {
                criminalId: parseInt(criminalId)
            }
        })
        console.log('customEvent: ', customEvent);
        eventHub.dispatchEvent(customEvent)
    }
})

