import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {

    getOfficers()
    .then(() => {
        const officersArray = useOfficers()
        let officersHTMLRepresentations = ""

        for (const officer of officersArray) {
            officersHTMLRepresentations += Officer(officer)
        }
        
        officersContainer.innerHTML = `
            <h3>Glassdale Police Officers</h3>
            <section class="officerList">
            ${officersHTMLRepresentations}
            </section>
            `
        }
    )
}
