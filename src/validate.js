const md = require('./isfile.js');
const fetch = require('node-fetch')

const validate = (path) => {
  const arrLink = Promise.resolve(md.getLinks(path))
    .then((res) => {
      return [...res]
    })
  console.log('arr', arrLink);


}


module.exports = {
  validate,
}
