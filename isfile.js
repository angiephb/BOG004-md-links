const fs = require('fs');
const path = require('path')

const isFile = (route, options) => {
  console.log('PROBANDO ISFILE', route);
  const routes = new Promise((resolve, reject) => {
    fs.stat(route, (err, stats) => {
      if (err) {
        console.log('ERROR', err)
        reject('AQUI HAY UN ERROR', err)
      } else {
        if (stats.isFile()) {
          console.log('is File? ', route, stats.isFile())
          resolve(stats.isFile())
          extMd(route)
          console.log('MD', extMd(route))
        } else {
          isDirectory(route)
        }
      }
    });
  }); return routes;
}

const isDirectory = (route, options) => {
  console.log('PROBANDO ISDIRECTORY', route);
  const routesDir = new Promise((resolve, reject) => {
    fs.stat(route, (err, stats) => {
      console.log("\nCurrent directory files:")
      if (err) {
        console.log('ERROR', err);
        reject('AQUI HAY UN ERROR')
      } else {
        resolve(stats.isDirectory())
        console.log('is Directory? ', stats.isDirectory())
      }
    });
  });
  return routesDir
}

//Funcion que valida si es un archivo .md
const extMd = (route) => (path.extname(route) === '.md');
//console.log(extMd(process.argv[2]), 'este archivo es md')

const recursiveDirectory = (dirPath) => {
  let arrayDir = [];
  console.log('Esto es DIR', dirPath)
  const dir = fs.readdirSync(dirPath);
  console.log('Esto es DIR', dir);
  dir.forEach((newPath) => {
    const newRoute = path.join(dirPath, newPath);
    // console.log('ISMD', extMd(newRoute), newRoute)
    //console.log('ISDIR', isDirectory(newRoute), newRoute)
    if (extMd(newRoute) === true) {
      arrayDir.push(newRoute);
    } else {
      // arrayDir = arrayDir.concat(recursiveDirectory(newRoute))
      console.log('CONCAT', arrayDir.push(recursiveDirectory(newRoute)))
    }
  });
  return arrayDir;
};
recursiveDirectory(process.argv[2])
// console.log(recursiveDirectory(), 'esta es la recursion ');

module.exports = {
  isFile,
  isDirectory,
  extMd
  // ...
};