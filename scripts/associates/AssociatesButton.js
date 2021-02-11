import "./AssociatesList.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    debugger
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

export const AssociatesButton = (criminalObj) => {
    return `<button id="associates--${criminalObj.id}">Associate Associates</button>`
}
