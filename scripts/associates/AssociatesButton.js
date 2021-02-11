import "./AssociatesList.js"
// debugger
export const AssociatesButton = (criminalObj) => {
    return `<button id="associates--${criminalObj.id}">Associate Associates</button>`
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("associates--")) {
        const [prefix, criminalId] = clickEvent.target.id.split("--")
        const customEvent = new CustomEvent("AssociatesClicked", {
            detail: {
                criminalId: parseInt(criminalId)
            }
        })
        // console.log('customEvent: ', customEvent);
        eventHub.dispatchEvent(customEvent)
    }
})

