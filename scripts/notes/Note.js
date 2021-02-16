import { deleteNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")

export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
        <div class="note__text">Note: ${ noteObject.text }</div>
        <div class="note__date">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US') }</div>
        <div class="note__suspect">Suspect: ${ criminalObject.name }</div>
        <div class="note__author">Author: ${ noteObject.author }</div>
        <button id="deleteNote--${ noteObject.id }">Delete</button>
        </section>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

    /*
        Invoke the function that performs the delete operation.
      */
        deleteNote(id)
    }
})