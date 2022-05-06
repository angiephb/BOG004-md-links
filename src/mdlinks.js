const fs = require('fs');
const path = require('path');
const md = require('./isfile.js');
const { validate } = require('./validate.js')
const cli = require('./cli.js')


const mdLinks = (path, options) => {
    const promise = new Promise((resolve, reject) => {
        const absoluteRoute = md.readRoute(path);
        if (fs.existsSync(absoluteRoute) === false) {
            reject(new Error('La ruta ingresada es invalida'));
        } else {

            Promise.resolve(md.getLinks(absoluteRoute))
                .then((res) => {
                    return [res]
                })
            console.log('valid', validate(absoluteRoute));
        }
    });
    return promise
}



module.exports = {
    mdLinks,

}
