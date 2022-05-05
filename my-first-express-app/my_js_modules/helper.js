// exported a variable
module.exports.SEED = 32544535;

// exporting a function that takes two args
module.exports.generateHash = (char, seed) => {
    return 31 * 7 * ((seed || SEED) * char);
}

// exporting a funciton that takes one arg
module.exports.print = (input) => {
    console.log(input);
}

// ALTERNATIVE WAY OF DOING THE ABOVE //
// - place them as properties inside an object and export the object
module.exports = {
    SEED: 32544535,

    generateHash: (char, seed) => {
        return 31 * 7 * ((seed || SEED) * char);
    },

    print: (input) => {
        console.log(input);
    }
}