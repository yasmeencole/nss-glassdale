export const Witness = (witness) => {
    return `
    <div class="witness">
    <h5>Name: ${witness.name}</h5>
    <p class="witnessStatement">Statement: ${witness.statements}</p>
    </div>
    `
}