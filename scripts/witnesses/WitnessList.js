import { useWitnesses, getWitnesses } from "../witnesses/WitnessProvider.js"
import { WitnessStatement } from "./Witness.js"

const eventHub = document.querySelector(".container")
const witnessesContainer = document.querySelector(".witnessesContainer")


eventHub.addEventListener("WitnessesClicked", () => {
    // console.log("event", clickEvent)
    // const selectedCriminalId = clickEvent.detail.criminalId
    // const criminalsArray = useWitnesses()
    // const selectedCriminal = criminalsArray.find((criminalObj) => criminalObj.id === selectedCriminalId)
    // console.log('selectedCriminal: ', selectedCriminal)
    WitnessList()

})

eventHub.addEventListener("criminalsClicked", () => {
    witnessesContainer.innerHTML = ""
})

const WitnessList = () => {
    getWitnesses()
        .then(() => {
            const witnessesArray = useWitnesses()
            // console.log(witnessesArray)
            render(witnessesArray)
})
}


const render = (witnessStatementsArray) => {
    let witnessHTMLRepresentations = ""
    for (const witnessObj of witnessStatementsArray) {
        witnessHTMLRepresentations += WitnessStatement(witnessObj)
    }

    witnessesContainer.innerHTML = `
    <h2>Witness Statments</h2>
    <section class="witnessesList">
    ${witnessHTMLRepresentations}
    </section>
    `
}
