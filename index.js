 const md = require ('./src/mdlinks.js');

/*md.fileOrDirectory(process.argv[2], [])
    .then(result => console.log('respuesta', result))
    .catch(error => console.log ('error index', error))

 */
md.mdLinks(process.argv[2])
