const mdLinks = require('./mdlinks.js');

let options = {
    validate: false,
    stats: false
};

/* esta Funcion nos ayudara a dar opciones al objeto options */
let inputOpt = () =>{
    if (process.argv.includes('--validate')){
        options.validate = true;
    } if (process.argv.includes('--stats')){
        options.stats = true;
    }
    return options
}

module.exports = {
    inputOpt,
}