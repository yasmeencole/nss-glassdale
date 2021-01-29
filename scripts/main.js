import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerList } from "./officers/OfficerList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { } from "./notes/NoteList.js"

// import { saveNote } from "./notes/NoteDataProvider.js"

CriminalList();
ConvictionSelect();
OfficerList();
OfficerSelect();
NoteForm();
ShowNoteButton();
// saveNote(newNote);

//verified all provider list work, provider files print in console

//list files print on actual page, officer and criminal list work. not convictions

console.log("Be as Ambitious as Elon!")


