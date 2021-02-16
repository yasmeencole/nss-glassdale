import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "./../convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

const render = (criminalCollection) => {
  let criminalsHTMLRepresentations = ""
  
  for (const criminal of criminalCollection) {
    criminalsHTMLRepresentations += Criminal(criminal)
  }

  contentTarget.innerHTML = `
    <h3>Glassdale Criminals</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentations}
    </section>`
}

export const CriminalList = () => {
    getCriminals()
      .then(() => {
      const criminals = useCriminals()
      render(criminals)
    
  })
}

// Listen for the "crimeChosen" custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
  if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
    // debugger
    // Get a copy of the array of convictions from the data provider
    const convictionsArray = useConvictions()
    
    // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
    const chosenConvictionObject = convictionsArray.find(convictionObj => {
      // console.log("currently checking", convictionObj)
      return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
    })
    // debugger
    console.log(chosenConvictionObject.name)
    
    // Get a copy of the array of criminals from the data provider
    const criminalsArray = useCriminals()
    
    const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
    
    /*
    Then invoke render() and pass the filtered collection as
    an argument
    */
    render(filteredCriminalsArray)
  }
})

// Listen for the "officerChosen" custom event you dispatched in OfficerSelect
eventHub.addEventListener("officerSelected", officerChosenEvent => {

  const officerName = officerChosenEvent.detail.selectedOfficerName
  // Filter the officer application state down to the people that committed the crime
 // Get a copy of the array of officers from the data provider
const criminalsArray = useCriminals()
const filteredCriminalsArray = criminalsArray.filter(
  criminalObj => {
    if (criminalObj.arrestingOfficer === officerName) {
      return true
    }
  }
)
/*
Then invoke render() and pass the filtered collection as an argument
 */
  render(filteredCriminalsArray)
  
})

eventHub.addEventListener("witnessesClicked", () => {
  criminalsContainer.innerHTML = ""
})

eventHub.addEventListener("criminalsClicked", () => CriminalList())