const newsRouter = require('./news')

function route(app) {

    app.use('/news', newsRouter)
    
    app.get('/', (req, res) => {
        res.render('home')
      })
      
    app.get('/search', (req, res) => {
        res.render('search')
    })

    //   app.get('/news', (req, res) => {
    //     res.render('news')
    // }) -> thay thế 
}

module.exports = route