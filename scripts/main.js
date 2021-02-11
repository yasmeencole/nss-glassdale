import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerList } from "./officers/OfficerList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { } from "./notes/NoteList.js"
import { AssociatesButton } from "./associates/AssociatesButton.js"
import { AssociatesList } from "./associates/AssociatesList.js"

// import { saveNote } from "./notes/NoteDataProvider.js"

CriminalList();
ConvictionSelect();
OfficerList();
OfficerSelect();
NoteForm();
ShowNoteButton();
AssociatesButton();
AssociatesList();
// saveNote(newNote);

console.log("Be as Ambitious as Elon!")


