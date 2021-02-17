import { useCriminals } from "../criminals/CriminalProvider.js"


export const AssociatesList = (criminalObj) => {
    const contentContainer = document.querySelector(".associatesAlibiContainer")
    
    const associatesAlibiHTMLRepresentations = `
    <h3>Known Associates for ${criminalObj.name}</h3>
    ${criminalObj.known_associates.map(associate => {
    return `<section class="associate__containter">
    <div class="associate__name">Name: ${associate.name}</div>
    <div class="associate__alibi">Alibi: ${associate.alibi}</div>
    </section>`
    }).join("")}`
    
    contentContainer.innerHTML = associatesAlibiHTMLRepresentations
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", clickEvent => {
    console.log("event", clickEvent)
    const selectedCriminalId = clickEvent.detail.alibiThatWasChosen
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminalObj) => criminalObj.id === parseInt(selectedCriminalId))
    // console.log('selectedCriminal: ', selectedCriminal)
    AssociatesList(selectedCriminal)

})