const {Router} = require('express')
const updateController = require('../controllers/updateController')

const updateRouter = Router()

updateRouter.get("/category/:id", updateController.updateCategoryGet)
updateRouter.post("/category/:id", updateController.updateCategoryPost)
updateRouter.get("/product/:id", updateController.updateProductGet)
updateRouter.post("/product/:id", updateController.updateProductPost)

module.exports = updateRouter