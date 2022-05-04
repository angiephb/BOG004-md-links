/* const {getLinks} = require('./isfile.js');
const fetch = require('node-fetch')


const validarLinks = (route) => {
  const arrLink = getLinks(route)
  console.log('arr', arrLink);
  arrLink.forEach((element) => fetch(element.href))
    .then((response) => {
      if (response.status === 200) {
        console.log('response', response);
      }
    })
    .catch((error) => {
      console.log('errror', error)
    })
  return arrLink
}


module.exports = {
    validarLinks,
}
  */