import {saveNote} from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from './../criminals/CriminalProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            render(criminals)
        })
}

export const render = (criminalsArray) => {
    console.log("Notey note notes!!!")
    contentTarget.innerHTML = `
        <h2>Notes</h2>
        <form action="">
            <fieldset>
                <label for="note-criminalId">Suspect: </label>
                <select name="note-criminalId" id="note-criminalId">
                <option value="0">Please select a Suspect...</option>
                ${criminalsArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
                </select>
            </fieldset>    
            <fieldset>
                <label for="note-date">Date: </label>
                <input type="date" id="note-date" name="note-date">
            </fieldset>
            <fieldset>
                <label for="note-author">Author: </label>
                <input type="text" id="note-author" name="note-author">
            </fieldset>
            <fieldset>
                <label for="note-text">Note: </label>
                <input type="text" id="note-text" name="note-text">
            </fieldset>
            <button id="saveNote">Save Note</button>
        </form>
        `
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        //need to create one for each obj prop
        const criminalId = document.getElementById("note-criminalId").value
        const date = document.getElementById("note-date").value
        const author = document.getElementById("note-author").value
        const text = document.getElementById("note-text").value
// console.log(NoteForm)
//debugger
        // Make a new object representation of a note
        const newNote = {
            //key value pairs
            "criminalId": parseInt(criminalId),
            "date": date,
            "author": author,
            "text": text
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
