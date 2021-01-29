export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
        <div class="note__name">Name: ${ noteObject.name }</div>
        <div class="note__date">Date: ${ new Date(noteObject.date).toLocaleDateString('en-US') }</div>
        <div class="note__text">Note: ${ noteObject.text }</div>
        <div class="note__suspect">Title: ${ noteObject.suspect }</div>
        <div class="note__author">Author: ${ noteObject.author }</div>
        </section>
    `
}