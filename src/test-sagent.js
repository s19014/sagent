window
  .fetch('url') // urlを入れる
  .then(function (response) {
    return response.json()
  })
  .then(function (myJson) {
    console.log(JSON.stringify(myJson))
  })
