const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

//newController.index

router.use('/:slug', newsController.show) //news/slug
router.use('/', newsController.index)

module.exports = router