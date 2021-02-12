import "./AssociatesList.js"

export const AssociatesButton = () => {
    return `<button id="associates--${criminalObj.id}">Associates Albis</button>`
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent)
    if(clickEvent.target.id.startsWith("associates--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        
        const customEvent = new CustomEvent("AssociatesClicked", {
            detail: {
                alibiThatWasChosen: id
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})