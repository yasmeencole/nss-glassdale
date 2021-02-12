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

const render = (criminalsArray) => {
    contentTarget.innerHTML = `
        <h2>Notes</h2>
        <form action="">
        <fieldset>
        <fieldset>
            <label for="note-text">Name: </label>
            <select name="note-criminalId" id="note-criminalId">
            <option value="0">Please select a Suspect...</option>
            ${criminalsArray.map(criminal => 
                `<option value="${criminal.id}">${criminal.name}</option>`).join("")
            }
        </select>
        </fieldset>    
        <fieldset>
            <label for="note-text">Date: </label>
            <input type="date" id="note-date">
        </fieldset>
        <fieldset>
        <label for="note-text">Author: </label>
        <input type="text" id="note-author">
        </fieldset>
        <fieldset>
            <label for="note-text">Note: </label>
            <input type="text" id="note-text">
        </fieldset>    
        <fieldset>
            <label for="note-text">Suspect: </label>
            <input type="text" id="note-suspect">
        </fieldset>
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
        const name = document.getElementById("note-name").value
        const date = document.getElementById("note-date").value
        const author = document.getElementById("note-author").value
        const text = document.getElementById("note-text").value
        const suspect = document.getElementById("note-suspect").value
        const criminalId = document.getElementById("note-criminalId").value

//debugger
        // Make a new object representation of a note
        const newNote = {
            "name": name,
            "date": date,
            "author": author,
            "text": text,
            "criminalId": parseInt(criminalId),
            "suspect": suspect
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
