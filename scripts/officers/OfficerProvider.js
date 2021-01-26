// fetch call to get data about Glassdale police officers from
//  the Glassdale Police Department Criminal API

let officers = []

export const useOfficers = () =>  officers.slice()

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then( parsedResponse => {
            console.table(parsedResponse)
            officers = parsedResponse
        }
    )
}
