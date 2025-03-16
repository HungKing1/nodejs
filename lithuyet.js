// const path = require('path')
// const express = require('express')
// const morgan = require('morgan')
// const handlebars = require('express-handlebars')
// const app = express()
// const port = 3000

// const route = require('./routes')//lấy file trong route 
// //route init
// route(app)

// //__dirname tại resources 
// app.use(express.static(path.join(__dirname, 'resources/public')))
// //middleware
// app.use(express.urlencoded({
//   extended: true
// })) //trả về console.log trong post
// app.use(express.json())

// //XMLhttpRequest, fetch, axious -> send data with get || post 


// //http logger
// // app.use(morgan('combined'))

// //tempplate engine 
// app.engine('hbs', handlebars.engine({
//   extname: '.hbs'
// }))
// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'resources/views'))

// //định nghĩa tuyến đường    
// app.get('/', (req, res) => {
//   // console.log(req.query.ronaldo) đây là query paramaters 
//   res.render('home')
// })

// app.get('/search', (req, res) => {
//   res.render('search')
// })

// // app.get('/news', (req, res) => {
// //   res.render('news')
// // })

// /*
// app.post('/search', (req, res) => {
//   console.log(req.body)//body đối với from data, query đối với query parameter 
//   res.send('')
//   //post không đính lên url 
// })
// */

// //127.0.0.1 -> localhost 
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })