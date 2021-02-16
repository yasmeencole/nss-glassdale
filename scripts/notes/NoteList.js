import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".noteContainer")
const eventHub = document.querySelector(".container")

let allNotes = []
let allCriminals = []

eventHub.addEventListener("showNotesClicked", customEvent => {
    
    NoteList()
})

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const allNotes = useNotes()
            const allCriminals = useCriminals()
            render()
        })
}

const render = () => {
    const allNotesConvertedToStrings = allNotes.map(noteObject => {
        const relatedCriminalObject = allCriminals.find(criminal => criminal.id === noteObject.criminalId)
        return NoteHTMLConverter(noteObject, relatedCriminalObject)
    }).join("")

    contentTarget.innerHTML =`
    <h3>Case Notes</h3>
        <section class="noteList">
            ${allNotesConvertedToStrings}
        </section>
`
}

