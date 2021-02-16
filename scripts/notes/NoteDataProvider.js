const eventHub = document.querySelector(".container")

let notes = []

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(() => getNotes())
    .then(dispatchStateChangeEvent)
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
    .then(response => response.json())
    .then(parsedNotes => {
        notes = parsedNotes
    })
}

export const useNotes = () => notes.slice()

// event that states when the event is changed
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    
    eventHub.dispatchEvent(noteStateChangedEvent)
}

