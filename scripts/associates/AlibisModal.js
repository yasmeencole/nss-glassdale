import { useCriminals } from "../criminals/CriminalProvider.js"

const contentContainer = document.querySelector(".associatesAlibiContainer")

export const AlibisModal = (criminalObj) => {
    const associatesAlibiHTMLRepresentations = `
    <div id="alibi__modal" class="modal--parent">
        <div class="modal--content">
            <h1>Known associates for ${criminalObj.name}</h1>
            ${criminalObj.known_associates.map(associate => {
                return `<section class="associate__container">
            <div class="associate__name">${associate.name}</div>
            <div class="associate__alibi">Alibi: ${associate.alibi}</div>
            </section>`
    }).join("")}
    <button id="modal--close">close modal</button>
        </div>
    </div>
        `

    contentContainer.innerHTML = associatesAlibiHTMLRepresentations
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", clickEvent => {
    const selectedCriminalId = clickEvent.detail.criminalId
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminalObj) => criminalObj.id === selectedCriminalId)
    AssociatesModal(selectedCriminal)
})


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "modal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
}