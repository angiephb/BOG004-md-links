/* const recursiveDirectory = (dirPath) => {
  let arrayDir = [];
  // console.log('Esto es DIR', dirPath)
  const dir = fs.readdirSync(dirPath);
  console.log('Esto es DIR2', dir);
  dir.forEach((newPath) => {
    const newRoute = path.join(dirPath, newPath);
    // console.log('ISMD', extMd(newRoute), newRoute)
    // console.log('ISDIR', isDirectory(newRoute), newRoute)
    if (extMd(newRoute) === true) {
      arrayDir.push(newRoute);
    } else if(isDirectory(newRoute) === true){
      // arrayDir = arrayDir.concat(recursiveDirectory(newRoute))
      console.log('CONCAT', arrayDir.push(recursiveDirectory(newRoute)))
    }
  });
  return arrayDir;
};
recursiveDirectory(process.argv[2])
console.log(recursiveDirectory(), 'esta es la recursion '); */

prueba 2 :

const isDirectory = (route, array) => {
  // console.log('PROBANDO ISDIRECTORY', route);
  const routesDir = new Promise((resolve, reject) => {
    fs.stat(route, (err, stats) => {
      // console.log("\nCurrent directory files:")
      if (err) {
        console.log('ERROR', err);
        reject('AQUI HAY UN ERROR')
      } else {
        // console.log('is Directory? ', stats.isDirectory())
        if(stats.isDirectory()){
          recursive(route).forEach(file => {
            // if(extMd(file) === true){
              array.push(file)
              console.log('NUEVO ARRAY', array )
            // }
            if(stats.isDirectory() === true) {
              isDirectory(file, array)
            }
          });
        }
      }return array
    });
  });
  return routesDir
}



otra prueba todo:

const fs = require('fs');
const path = require('path')

const isFile = (route) => {
  // console.log('PROBANDO ISFILE', route);
  const routes = new Promise((resolve, reject) => {
    fs.stat(route, (err, stats) => {
      if (err) {
        console.log('ERROR', err)
        reject('AQUI HAY UN ERROR', err)
      } else {
        console.log('is File? ', stats.isFile())
        resolve(stats.isFile())
        /* extMd(route)
        console.log('MD', extMd(route)) */
        /*  else {
          isDirectory(route)
        } */
      }
    });
  }); return routes;
}

let files = []
// console.log('PROBANDO ISDIRECTORY', route);
const getFiles = (currentRoute) => new Promise((resolve, reject) => {
  fs.readdirSync(currentRoute).forEach(file => {
    console.log('FILE', file)
    if (fs.lstat(file).isFile()) {
      files.push(file)
    }else{
      getFiles(file)
    }
  })
});

//Funcion que valida si es un archivo .md
const extMd = (route) => (path.extname(route) === '.md');
//console.log(extMd(process.argv[2]), 'este archivo es md')

const recursive = (__dirname) => {
  let newFiles = [];
  const files = fs.readdirSync(__dirname);
  files.forEach(file => {
    let routes = path.resolve(__dirname, file)
    newFiles.push(routes);
    // console.log('ARRAY ROUTES', newFiles);
    return routes
  });
  return newFiles
}
// recursive(process.argv[2])


module.exports = {
  isFile,
  extMd,
  getFiles
  // ...
};



prueba 4:

const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

/* Esta funcion nos indica un (boleano) si la ruta es un directorio o un archivo*/
const fileOrDirectory = (route) => {
  return new Promise((resolve, reject) => {
    fs.stat(route, (error, stats) => {
      if (error) {
        reject('AQUI HAY UN ERROR', error);
      }
      else {
        if (stats.isFile()) {
          readFiles(route)
          // console.log('is file ?', stats.isFile())
        } else {
          if (stats.isDirectory()) {
            newDirectory(route)
            // console.log('is directory ?', stats.isDirectory())
          }
        }
      }
    })
  })
}

/* Esta funcion nos ayuda a leer un directorio, retorna array de archivos */
const newDirectory = () => {
  let newFiles = []
  const readDirectory = (currentRoute) => {
    // console.log('current', currentRoute)
    // const promiseOne = new Promise((resolve, reject) => {
    const files = fs.readdirSync(currentRoute)
    files.forEach(file => {
      const currentPath = path.resolve(currentRoute, file);
      // console.log('file', currentPath);
      // si el file no es dir pushea a newFiles
      if (fs.statSync(currentPath).isFile()) {
        newFiles.push(currentPath)
        // console.log(newFiles);
      } else {
        readDirectory(currentPath)
      }
      // si es dir vuelve a readDirectory
    });
    // });
  }
  return newFiles
};





//Funcion que valida si es un archivo .md
const extMd = (route) => (path.extname(route) === '.md');
// console.log(extMd(process.argv[2]), 'este archivo es md')

/* Esta funcion nos ayuda a leer un archivo */
const readFiles = (currentRoute) => {
  fs.promises.readFile(currentRoute)
    .then((result) => {
      console.log("resul" + result);
    })
    .catch((error) => {
      console.log(error);
    })
}

/* Promise.all([newDirectory, fileOrDirectory]).then(values => {
  console.log(values);
}) */


module.exports = {
  fileOrDirectory,
  newDirectory,
  readFiles,
  extMd,
}

PROBANDO TENER LINKS

const getLinks = (route) => {
  const arrFiles = getMdFiles(route)
  // console.log('arrfiles', arrFiles);
  const prueba = []
  const renderer = new marked.Renderer();
  const arrLinks = arrFiles.map(fileRoute => {
    return readFiles(fileRoute)
      .then((read) => {
        let obj = {
          href: '',
          text: '',
          path: ''
        }
        renderer.link = (linkFile, _, linkText) => {
          /*const obj = {
            href: linkFile,
            text: linkText,
            path: fileRoute,
          }*/
          obj.href = linkFile;
          obj.text = linkText;
          obj.path = fileRoute;
        }
        // console.log('File', marked(read, { renderer: renderer }));
        marked(read, { renderer: renderer });
        prueba.push(obj)
        console.log('prueba', prueba);
        return (obj);
      });
  });
  return Promise.all(arrLinks).then(response =>  response)

}


# 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado