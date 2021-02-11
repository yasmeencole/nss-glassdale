export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
        <div class="note__text">Note: ${ noteObject.text }</div>
        <div class="note__date">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US') }</div>
        <div class="note__suspect">Title: ${ criminalObject.name }</div>
        <div class="note__author">Author: ${ noteObject.author }</div>
        </section>
    `
}