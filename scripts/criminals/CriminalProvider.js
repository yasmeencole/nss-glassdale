// fetch call to get data about Glassdale police criminals from
//  the Glassdale Police Department Criminal API

let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                // console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}