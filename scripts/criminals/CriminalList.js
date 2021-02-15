import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "./../convictions/ConvictionProvider.js"
import { useOfficers } from "./../officers/OfficerProvider.js"
//./../convictions/ConvictionProvider.js  needed to go up a directory

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

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
eventHub.addEventListener("officerChosen", officerChosenEvent => {
  if (officerChosenEvent.detail.officerThatWasChosen !== "0") {
    // debugger
    /* 
    We have the the id of the officer that the user selected from the drop down (officerChosenEvent.target.officerThatWasChosen). But each officer object has the name of the officer. So we need to get the name of the conviction associated with the unique identifier. To get the name, we get the conviction object which has the property for name. 
    */
   // Get a copy of the array of officers from the data provider
  const officersArray = useOfficers()
   // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
  const chosenOfficerObject = officersArray.find(officerObj => {
    return officerObj.id === parseInt(officerChosenEvent.detail.officerThatWasChosen)
    })
    // console.log(chosenOfficerObject.name)
    /*
    Filter the officer application state down to the people that committed the crime
    */
   // Get a copy of the array of officers from the data provider
  const criminalsArray = useCriminals()

  const filteredCriminalsArray = criminalsArray.filter((criminalObj) => criminalObj.arrestingOfficer === chosenOfficerObject.name)
  /*
  Then invoke render() and pass the filtered collection as an argument
   */
  render(filteredCriminalsArray)
}
})




const render = (criminalCollection) => {
  let criminalsHTMLRepresentations = ""
  
  for (const criminal of criminalCollection) {
  criminalsHTMLRepresentations += Criminal(criminal)
  }

  contentTarget.innerHTML = `
<h3>Glassdale Criminals</h3>
<section class="criminals__Container">
<div class="criminals">
${criminalsHTMLRepresentations}
</div>
</section>`
}