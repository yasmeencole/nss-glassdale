import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"
import { useConvictions } from "./../convictions/ConvictionProvider.js"
//./../officers/OfficerProvider.js  needed to go up a directory

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {

    getOfficers()
    .then(() => {
        const officersArray = useOfficers()
        renderToDom(officersArray)

    })
}

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



