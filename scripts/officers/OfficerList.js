import { getOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"
import { useConvictions } from "./../convictions/ConvictionProvider.js"
//./../officers/OfficerProvider.js  needed to go up a directory

const eventHub = document.querySelector(".container")
const officersContainer = document.querySelector(".officersContainer")


const renderToDom = (officerCollection) => {
    let officersHTMLRepresentations = ""

    for (const officer of officerCollection) {
        officersHTMLRepresentations += Officer(officer)
    }

    officersContainer.innerHTML = `
            <div class="officers">
                ${officersHTMLRepresentations}
            </div>`
}


export const OfficerList = () => {

    getOfficers()
    .then(() => {
        const officersArray = useConvictions()
        renderToDom(officersArray)

    })
}


