import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"
import { useConvictions } from "./../convictions/ConvictionProvider.js"
//./../officers/OfficerProvider.js  needed to go up a directory

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {

    getOfficers()
    .then(() => {
        const officersArray = useOfficers()
        render(officersArray)

    })
}

const render = (officerCollection) => {
    let officersHTMLRepresentations = ""

    for (const officer of officerCollection) {
        officersHTMLRepresentations += Officer(officer)
    }

    officersContainer.innerHTML = `
        <h3>Glassdale Police Officers</h3>
        <div class="officers">${officersHTMLRepresentations}</div>
        `
    }
    // <section class="officers__Container"</section>



