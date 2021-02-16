import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNotesButton } from "./notes/ShowNotesButton.js"
import { OfficerList } from "./officers/OfficerList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import "./notes/NoteList.js"
import { renderWitnessButton } from "./witnesses/WitnessButton.js"
import "./witnesses/WitnessList.js"
import { renderCriminalsButton } from "./criminals/ShowCriminalsButton.js"

// import { saveNote } from "./notes/NoteDataProvider.js"
OfficerList();
CriminalList();
ConvictionSelect();
OfficerSelect();
NoteForm();
ShowNotesButton();

renderWitnessButton();
renderCriminalsButton();

console.log("Be as Ambitious as Elon!")


