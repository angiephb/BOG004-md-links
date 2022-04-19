const md = require ('./isfile.js');

md.isFile(process.argv[2] /* './readme.md' */)
    .then(result => console.log('respuesta', result))
    .catch(error => console.log ('error index', error))

