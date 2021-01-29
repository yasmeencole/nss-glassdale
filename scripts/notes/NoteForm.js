import {saveNote} from "./NoteDataProvider.js"

export const NoteForm = () => {
    render()
}

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {

    contentTarget.innerHTML = `
        <form action="">
            <label for="note-text">Name: </label>
            <input type="text" id="note-name">

            <label for="note-text">Date: </label>
            <input type="date" id="note-date">

            <label for="note-text">Note: </label>
            <input type="text" id="note-text">

            <label for="note-text">Suspect: </label>
            <input type="text" id="note-suspect">

            <label for="note-text">Author: </label>
            <input type="text" id="note-author">

            <button type="submit" id="saveNote">Save Note</button>
        </form>
    `
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "saveNote") {
        //need to create one for each obj prop
        const name = document.querySelector("#note-name").value
        const date = document.querySelector("#note-date").value
        const text = document.querySelector("#note-text").value
        const suspect = document.querySelector("#note-suspect").value
        const author = document.querySelector("#note-author").value

//debugger
        // Make a new object representation of a note
        const newNote = {
            "name": name,
            "date": date,
            "text": text,
            "suspect": suspect,
            "author": author

        }

        // Change API state and application state
        saveNote(newNote)
    }
})
