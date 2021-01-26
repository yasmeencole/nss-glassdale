import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'

export const CriminalList = () => {
    let contentElement = document.querySelector(".criminalsContainer")
    getCriminals().then(() => {
            const criminalArray = useCriminals()

            let criminalsHTMLRepresentations = ""

            for (const criminalObject of criminalArray) {
                criminalsHTMLRepresentations += Criminal(criminalObject)
            }

            contentElement.innerHTML += `
            <h3>Glassdale Criminals</h3>
            <div class="criminals">
                ${criminalsHTMLRepresentations}
            </div>
            `
        }
    )
}


