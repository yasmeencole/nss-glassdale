import { AssociatesButton } from "../associates/AssociatesButton.js"

export const Criminal = (criminalObj, facilities) => {
    return `
        <article class="criminal">
            <h3 class="criminal__name">${criminalObj.name}</h3>
            <div class="criminal__details>
            <p class="criminal__age">Age: ${criminalObj.age}</p>
            <p class="criminal__crime">Crime: ${criminalObj.conviction}</p>
            <p>Arrested by: Officer ${criminalObj.arrestingOfficer}</p>
            <p class="criminal__incarcerationTerm">Incarcerated:
                ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} -
                ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}
            </p>
            <div>
                <h4>Facilities</h4>
                <ul>${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}</ul>
            </div>
            <button id="associates--${criminalObj.id}">Show Associates</button>
            </div>
                ${AssociatesButton(criminalObj)}
            </article>    
            `
            
}
