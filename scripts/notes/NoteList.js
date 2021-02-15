import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".noteContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    
    NoteList()
})

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const allNotes = useNotes()
            const allCriminals = useCriminals()
            render(allNotes, allCriminals)
        })
}

const render = (noteArray, criminalsArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
        const relatedCriminalObject = criminalsArray.find(criminal => criminal.id === noteObject.criminalId)
        return NoteHTMLConverter(noteObject, relatedCriminalObject)
    }).join("")

    contentTarget.innerHTML =`
    <h3>Case Notes</h3>
        <div class="noteList">
            ${allNotesConvertedToStrings}
        </div>
`
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})