import { AssociatesButton } from "../associates/AssociatesButton.js"

export const Criminal = (criminalObj) => {
    return `
        <article class="criminal">
            <h3 class="criminal__name">${criminalObj.name}</h3>
            <p class="criminal__age">Age: ${criminalObj.age}</p>
            <p class="criminal__crime">Crime: ${criminalObj.conviction}</p>
            <p class="criminal__incarcerationStart">Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="criminal__incarcerationEnd">Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
            ${AlibisButton(AssociatesButton)}
            </article>    
            `
        }