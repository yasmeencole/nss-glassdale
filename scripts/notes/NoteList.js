import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector(".noteContainer")
const eventHub = document.querySelector(".container")

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            render(notes, criminals)
        })
}

eventHub.addEventListener("showNotesClicked", customEvent => {
    
    NoteList()
})

const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        const allNotesConvertedToStrings =noteArray.map(noteObject => {
            const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return NoteHTMLConverter(noteObject)
    }).join("")

    contentTarget.innerHTML =`
    <h3>Case Motes</h3>
        <div class="noteList">
            ${allNotesConvertedToStrings}
        </div>
`
}

eventHub.addEventListener("notesStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})