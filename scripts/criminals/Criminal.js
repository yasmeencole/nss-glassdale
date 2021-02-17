import { AssociatesButton } from "../associates/AssociatesButton.js"

export const Criminal = (criminalObj, facilities) => {
    return `
        <article class="criminal">
            <h2 class="criminal__name">${criminalObj.name}</h2>
            <div class="criminal__details>
            <p>Convicted for ${criminalObj.conviction}</p>
            <p>Arrested by ${criminalObj.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')} and
                ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}
            </p>
            <p class="criminal__age">Age: ${criminalObj.age}</p>
            <div>
                <h3>Facilities</h3>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObj.id}">Show Associates</button>
            </div>
                ${AssociatesButton(criminalObj)}
            </article>    
            `
            
}
