import { useWitnesses, getWitnesses } from "../witnesses/WitnessProvider.js"
// import { Witness } from "./Witness.js"

const eventHub = document.querySelector(".container")
const witnessesContainer = document.querySelector(".witnessesContainer")


eventHub.addEventListener("WitnessesClicked", (clickEvent) => {
    // console.log("event", clickEvent)
    // const selectedCriminalId = clickEvent.detail.criminalId
    // const criminalsArray = useWitnesses()
    // const selectedCriminal = criminalsArray.find((criminalObj) => criminalObj.id === selectedCriminalId)
    // console.log('selectedCriminal: ', selectedCriminal)
    WitnessList(selectedCriminal)

})

eventHub.addEventListener("criminalsClicked", (clickEvent) => {
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


const render = (witnessArray) => {
    let witnessHTMLRepresentations = ""
    for (const witnessObj of witnessArray) {
        witnessHTMLRepresentations += Witness(witnessObj)
    }

    witnessesContainer.innerHTML = `
    <h2>Witness Statments</h2>
    <section class="witnessesList">
    ${witnessHTMLRepresentations}
    </section>
    `
}
