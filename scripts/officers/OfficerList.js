import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            let officersHTMLRepresentations = ""

            for (const officerObject of officerArray) {
                officersHTMLRepresentations += Officer(officerObject) 
            }

            officersContainer.innerHTML += `
                <h3>Glassdale Officers</h3>
                <div class="officersList">
                    ${officersHTMLRepresentations}
                </div>
            `
    })
}