const {Router} = require('express')
const deleteController = require('../controllers/deleteController')


const deleteRouter = Router()

deleteRouter.get("/product/:id", deleteController.deleteProductGet)
deleteRouter.get("/category/:id", deleteController.deleteCategoryGet)


module.exports = deleteRouter