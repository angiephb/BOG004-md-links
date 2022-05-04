const fs = require('fs');
const path = require('path');
const md = require('./isfile.js');
const valid = require('./validate.js')


const mdLinks = (path, options) => {
    const promise = new Promise((resolve, reject) => {
        const absoluteRoute = md.readRoute(path);
        if (fs.existsSync(absoluteRoute) === false) {
            reject(new Error('La ruta ingresada es invalida'));
        }else{
            Promise.resolve(md.getLinks(absoluteRoute))
            .then((res) => {
                console.log('si funciona',res);
                return res
            })
        }
    });
    return promise
}



module.exports = {
    mdLinks,

}
