import { getConvictions, useConvictions } from "./ConvictionProvider.js"
import { Conviction } from "./Conviction.js"

const convictionsContainer = document.querySelector(".convictionsContainer")

export const ConvictionList = () => {
    getConvictions()
        .then(() => {
            const convictionArray = useConvictions()
            let convictionsHTMLRepresentations = ""

            for (const convictionObject of convictionArray) {
                convictionsHTMLRepresentations += Conviction(convictionObject)
            }

            convictionsContainer.innerHTML += `
            <h3>Glassdale Crimes</h3>
            <div class="convictionsList">
                ${convictionsHTMLRepresentations}
            </div>
            `
        }
    )
}
