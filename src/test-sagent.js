const sagent = require('superagent')

const URI = 'http://localhost:3000/fruits.json'

const getJSON = async uri => {
  const item = await sagent
    .get(URI)
    .then(res => res.body)
    .then(json => json.fruits[0].name)
  console.log(item)
}

getJSON(URI)
