const fs = require('fs');
const path = require('path');
let marked = require('marked')
// const fetch = require('node-fetch')

/* Esta funcion esta analizando la ruta y conviertiendola en absoluta */
const readRoute = (routes) => {
  if (path.isAbsolute(routes)) {
    // console.log('la ruta es absoluta: ', routes);
    return routes
  } else {
    // console.log('ruta convertida en absoluta: ', path.resolve(routes));
    return path.resolve(routes)
  }
  // SI LA RUTA NO ES ABSOLUTA , LA TRANSFORMO, SI NO, RETORNO LA RUTA
};

/* Esta funcion nos indica un (boleano) si la ruta es un directorio o un archivo*/
const fileOrDirectory = (route) => {
  fs.stat(route, (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
      if (stats.isFile()) {
        stats.isFile()
        // console.log('is file?', stats.isFile());
        // return [(route)]
      } else {
        if (stats.isDirectory()) {
          stats.isDirectory()
          // console.log('rutota', readDirectory(route, []));
          // console.log('is directory?', stats.isDirectory());
        }
      }
    }
  });
}

/* Esta funcion nos ayudara a leer los directorios */
const readDirectory = (__dirname, array) => {
  const files = fs.readdirSync(__dirname);
  files.forEach(file => {
    const currentPath = path.join(__dirname, file);
    if (fs.statSync(currentPath).isFile() && extMd(currentPath)) {
      array.push(currentPath);
    } else {
      readDirectory(currentPath, array)
    }
  });
  return array;
}

/* Esta funcion nos ayuda a leer un archivo */
const readFiles = (route) => {
  return new Promise((resolve, reject) => {
    const routeFile = readRoute(route);
    // console.log(routeFile);
    if (fs.statSync(routeFile).isFile() && extMd(routeFile)) {
      fs.readFile(routeFile, 'utf-8', (err, data) => {
        // console.log(data);
        resolve(data)
      });
    } else {
      reject("No es archivo de extensión .md")
    }
  })
};

//Funcion que valida si es un archivo .md
const extMd = (route) => (path.extname(route) === '.md');
//console.log(extMd(process.argv[2]), 'este archivo es md')

// FUNCION QUE BUSCA LOS ARCHIVOS MD
const getMdFiles = (routeFile) => {
  let arrayMdFile = [];
  const route = readRoute(routeFile);
  if (fs.statSync(route).isFile() && extMd(route)) {
    arrayMdFile.push(route);
  } else {
    arrayMdFile = readDirectory(routeFile, []);
    // console.log('arrrrray', readDirectory(routeFile, []));
  }
  return arrayMdFile;
};

const getLinks = (route) => {

  const regLink = (/\[(.*?)\]\((.*?)\)/g);
  const regText = /\[([^\[]+)\](\(.*\))/;
  const regUrl = /(?<!!)\[(.*?)\]\((.*?)\)/g;


  const arrFiles = getMdFiles(route)
  console.log('arrFiles: ', arrFiles);
  let arrObj = [];

  arrFiles.forEach((mdPath) => {
    readFiles(mdPath)
      .then((data) => {
        let links = data.match(regLink)
        console.log('link', links);
        links.forEach((link) => {
          let matchUrl = link.match(regText)[2].replace(/\(|\)/g, '')
          let matchText = link.match(regText)[1]
          arrObj.push({
            href: matchUrl,
            text: matchText,
            path: mdPath,
          })
        })
        console.log('******objeto: ', arrObj);
        return arrObj
      })
  })
}




module.exports = {
  fileOrDirectory,
  readDirectory,
  readRoute,
  readFiles,
  getLinks,
  getMdFiles,
  extMd,
  // validarLinks


}
