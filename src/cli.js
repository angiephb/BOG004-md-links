#!/usr/bin/env node

/* La anterior es una instancia de una línea shebang: los primera línea en un archivo ejecutable de texto
sin formato en Plataformas tipo Unix que le dice al sistema a qué intérprete pasar ese archivo para su
ejecución, a través de la línea de comando siguiendo la magia #! prefix (llamado el asunto). */

const md = require('./mdlinks.js');
const { validate, stats, twOptions } = require('./validate.js');
const path = process.argv[2];

let options = {
    validate: false,
    stats: false
};

/* esta Funcion nos ayudara a dar opciones al objeto options */
// const inputOpt = () => {
if (process.argv.includes('--validate') && process.argv.includes('--stats')) {
    options.validate = true;
    options.stats = true;
} else if (process.argv.includes('--stats')) {
    options.stats = true;
} else if (process.argv.includes('--validate')) {
    options.validate = true;
    console.log('validate');
    md.mdLinks(path, { validate: true }).then(res => console.log(res));
} else {
    md.mdLinks(path,options);
}
// }
