import {saveNote} from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js'

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
        <form action="" class="notesForm">
        <fieldset>
            <label for="noteName">Name: </label>
            <select name="noteCriminalId" id="noteCriminalId">
            <option value="0">Please select a Suspect...</option>
            ${criminalsArray.map(criminal => 
                `<option value="${criminal.id}">${criminal.name}</option>`).join("")
            }
            </select>
        </fieldset>    
        <fieldset>
            <label for="noteDate">Date: </label>
            <input type="date" id="noteDate">
        </fieldset>
        <fieldset>
            <label for="noteAuthor">Author: </label>
            <input type="text" id="noteAuthor">
        </fieldset>
        <fieldset>
            <label for="noteText">Note: </label>
            <input type="text" id="noteText">
        </fieldset>
        <button type="submit" id="saveNote">Save Note</button>
        </form>
        `
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        //need to create one for each obj prop
        const noteName = document.getElementById("#noteName").value
        const noteDate = document.getElementById("#noteDate").value
        const noteAuthor = document.getElementById("#noteAuthor").value
        const noteText = document.getElementById("#noteText").value
        const noteSuspect = document.getElementById("#noteSuspect").value
        const noteCiminalId = parseInt(document.getElementById("#noteCiminalId")).value
console.log(NoteForm)
//debugger
        // Make a new object representation of a note
        const newNote = {
            "name": noteName,
            "date": noteDate,
            "author": noteAuthor,
            "text": noteText,
            "criminalId": noteCiminalId,
            "suspect": noteSuspect
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
