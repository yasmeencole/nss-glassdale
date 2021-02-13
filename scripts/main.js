import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerList } from "./officers/OfficerList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
import "./associates/AssociatesButton.js"
import "./associates/AssociatesList.js"

// import { saveNote } from "./notes/NoteDataProvider.js"

CriminalList();
ConvictionSelect();
OfficerList();
OfficerSelect();
NoteForm();
ShowNoteButton();
NoteList();
AssociatesButton(criminalObj);

// AssociatesList();
// saveNote(newNote);

console.log("Be as Ambitious as Elon!")


