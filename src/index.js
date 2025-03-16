const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')//lấy file trong routes 
//controller -> news -> index(route) -> index(src)

app.use(express.static(path.join(__dirname, 'resources/public')))
app.use(express.urlencoded({
  extended: true
})) 
app.use(express.json())
 
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//routes init
route(app)

//127.0.0.1 -> localhost 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})