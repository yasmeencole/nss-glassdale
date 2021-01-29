import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".noteContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    
    NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings =noteArray.map(noteObject => {
        return NoteHTMLConverter(noteObject)
    }).join("")

    contentTarget.innerHTML =`
    <h3>Case Motes</h3>
        <div class="noteList">
            ${allNotesConvertedToStrings}
        </div>
`
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

eventHub.addEventListener("notesStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})


