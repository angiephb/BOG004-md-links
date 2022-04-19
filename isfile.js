const fs = require ('fs');


const isFile = (route, options) => {
  console.log('Probando ISFILE', route)
// aqui tenemos una promesa que nos indicara si es un archivo
  return new Promise((resolve, reject) => {
    fs.stat(route, (err, stats) => {
      if (err) {
        console.log('ERROR', err)
        reject('AQUI HAY UN ERROR', err);
      } else if(stats.isFile()) {
          resolve(route)
        }else{
          isDirectory(route)
        }
        /* console.log('Esto es un archivo', stats.isFile());
        resolve(route) */
      
    });
  }); 
};

const isDirectory = (route, options) => {  
  console.log('Probando ISDIRECTORY', route)
  // aqui tenemos una promesa que nos indicara los nombres de los archivos dentro de un directorio
  return new Promise((resolve, reject) => {
      fs.readdir(route, { withFileTypes: true }, (err, files) => {
          console.log("\nCurrent directory files:");
          if (err) {
            console.log('error', err);
            reject('AQUI HAY UN ERROR', err)
          } else {
            // files.forEach(file => {
            //   console.log('archivo', file);
              resolve(files)
            // })
          }
        })
   });
  }

module.exports = {
    isFile,
    isDirectory,
}
