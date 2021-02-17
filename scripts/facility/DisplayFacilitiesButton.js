const eventHub = document.querySelector(".facilityContainer")
const contentTarget = document.querySelector(".button__facilities")
// debugger

export const DisplayFacilitiesButton = () => {

    contentTarget.innerHTML = `
    <button id="facilityButton">Facilities</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "facilityButton") {

        const facilityButtonCustomEvent = new CustomEvent("facilitiesButtonClicked")
        
        console.log('facilityButtonCustomEvent: ', facilityButtonCustomEvent);
        eventHub.dispatchEvent(facilityButtonCustomEvent)
}
})