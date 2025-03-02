const { Router } = require('express')
const newController = require('../controllers/newController')
const newRouter = Router()

newRouter.get("/category", newController.createCategoryGet)
newRouter.post("/category", newController.createCategoryPost)

newRouter.get("/product", newController.createProductGet)
newRouter.post("/product", newController.createProductPost)

module.exports = newRouter