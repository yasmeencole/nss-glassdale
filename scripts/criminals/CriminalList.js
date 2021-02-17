import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "./../convictions/ConvictionProvider.js"
import { getFacilities, useFacilities } from "./../facility/FacilityProvider.js"
import { useCriminalFacilities, getCriminalFacilities } from "./../facility/CriminalFacilityProvider.js"


const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
  // Kick off the fetching of both collections of data
  getCriminals()
  .then(getCriminalFacilities)
  .then(getFacilities)
          .then(() => {
              // Pull in the data now that it has been fetched
              const facilitiesArray = useFacilities()
              const crimianlFacilitiesArray = useCriminalFacilities()
              const criminals = useCriminals()

              // Pass all three collections of data to render()
              render(criminals, facilitiesArray, crimianlFacilitiesArray)
          }
      )
}

const render = (criminalCollection, criminalFacilityCollection, facilityCollection) => {
  let criminalsHTMLRepresentations = ""
  
  for (const criminal of criminalCollection) {
    const arrayOfCriminalFacitlityObj = criminalFacilityCollection.filter(criminalFacility => criminal.id === criminalFacility.criminalId)

    const arrayOfFacilityObj = arrayOfCriminalFacitlityObj.map(criminalFacility => {

      const relatedFacilityObj = facilityCollection.find(facility => facility.id === criminalFacility.facilityId)

      return relatedFacilityObj
    })

    criminalsHTMLRepresentations += Criminal(criminal, arrayOfFacilityObj)
  }

  criminalsContainer.innerHTML = `
    <h2>Glassdale Criminals</h2>
    <section class="criminalsList">
    ${criminalsHTMLRepresentations}
    </section>`
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
    const crimianlFacilitiesArray = useCriminalFacilities()
    const facilitiesArray = useFacilities()
    
    const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
    
    /*
    Then invoke render() and pass the filtered collection as
    an argument
    */
    render(filteredCriminalsArray, crimianlFacilitiesArray, facilitiesArray)
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

const crimianlFacilitiesArray = useCriminalFacilities()
const facilitiesArray = useFacilities()

/*
Then invoke render() and pass the filtered collection as an argument
 */
  render(filteredCriminalsArray, crimianlFacilitiesArray, facilitiesArray)
  
})

eventHub.addEventListener("witnessesClicked", () => {
  criminalsContainer.innerHTML = ""
})

eventHub.addEventListener("criminalsClicked", () => CriminalList())