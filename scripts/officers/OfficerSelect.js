/*
 *   OfficerSelect component that renders a select HTML element
 *   which lists all officers in the Glassdale PD API
 */
import { useOfficers, getOfficers } from "./OfficerProvider.js"

/*
Which element in your HTML contains all components?
That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", officerChosenEvent => {
    // Only do this if the `officerSelect` element was changed
    if (officerChosenEvent.target.id === "officerSelect") {
        const selectedOfficer = officerChosenEvent.target.value
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                selectedOfficerName: selectedOfficer
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
        getOfficers()
        .then(() => {
            // Get all officers from application state
            const officers = useOfficers()
            render(officers)
        })
}



const render = officersCollection => {
        /*
        Use interpolation here to invoke the map() method on
        the officersCollection to generate the option elements.
        Look back at the example provided above.
    */
    /*  The officersCollection.map() will iterate through an array that looks like this:
    // [
    //   {
    //     name: "Marques Balistreri",
    //     id: 1
    //   }, {
    //     name: "Alessia Bailey",,
    //     id: 2
    //   },
    //   ...
        ] 
    */

    /* The new array that .map() returns will look like this:
    // [
    //   "<option value="1">Marques Balistreri</option>",
    //   "<option value="2">Alessia Bailey</option>",
    //   ...
        ] 
    */

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select a officer...</option>
            ${officersCollection.map(officerObject => `<option value="${officerObject.name}">${officerObject.name}</option>`).join("")
        }
        </select>
    `
}

eventHub.addEventListener("crimeChosen", crimeChosenEvent => document.querySelector("#officerSelect").value = 0)