class NewsController {

    //[get]/news
    //functionn lấy thông tin 
    index(req, res) {
        res.render('news')
    }

    //[get]/slug(url bar)
    show(req, res) {
        res.send('New details')
    }
}

//export
module.exports = new NewsController;

