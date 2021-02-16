export const WitnessStatement = (witnessObj) => {
    return `
        <div class="witness">
            <h5>Name: ${witnessObj.name}</h5>
            <p class="witnessStatement">Statement: ${witnessObj.statements}</p>
        </div>
    `
}