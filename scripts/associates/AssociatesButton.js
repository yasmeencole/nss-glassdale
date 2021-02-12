import "./AssociatesList.js"

export const AssociatesButton = (criminalObj) => {
    return `<button id="associates--${criminalObj.id}">Associates Albis</button>`
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    
    if(clickEvent.target.id.startsWith("associates--")) {
        // const alibiThatWasChosen = clickEvent.target.id.split("--")
        
        const customEvent = new CustomEvent("AssociatesClicked", {
            detail: {
                alibiThatWasChosen: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})