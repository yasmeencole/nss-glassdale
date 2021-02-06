const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector("")
// debugger
export const WitnessButton = () => {

    contentTarget.innerHTML =`
    <button id="display-witness-button">Witness Statements</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("witness--")) {
        const [prefix, criminalId] = clickEvent.target.id.split("--")
        const customEvent = new CustomEvent("WitnessesClicked", {

        console.log('customEvent: ', customEvent);
        eventHub.dispatchEvent(customEvent)
    }
})

