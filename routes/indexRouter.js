const {Router} = require('express')
const indexController = require('../controllers/indexController')
const indexRouter = Router()

indexRouter.get("/", indexController.showCategoriesGet)
indexRouter.get("/:category/products", indexController.showProductsGet)