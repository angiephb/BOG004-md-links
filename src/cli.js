#!/usr/bin/env node
const md = require('./mdlinks.js');
const path = process.argv[2];

let options = {
    validate: false,
    stats: false
};

/* esta Funcion nos ayudara a dar opciones al objeto options */
let inputOpt = new Promise((resolve, reject) => {
    if (process.argv.includes('--validate')) {
        options.validate = true;
    } if (process.argv.includes('--stats')) {
        options.stats = true;
    }
    resolve()
})

inputOpt.then(()=> {
    md.mdLinks(path, options)
})


module.exports = {
    inputOpt,
}