// fetch call to get data about Glassdale criminal convictions/crimes from
//  the Glassdale Police Department Criminal API

let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.table(parsedConvictions)
                convictions = parsedConvictions
            }
        )
}