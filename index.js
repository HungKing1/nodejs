const express = require('express')
const app = express()
const port = 3000

//định nghĩa tuyến đường
app.get('/trangchu', (req, res) => {
    let a = 1;
    let c = a + 1;
  res.send('Hello World!')
})

//127.0.0.1 -> localhost 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})