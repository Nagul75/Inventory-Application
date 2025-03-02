const db = require('../db/queries')

async function deleteProductGet(req, res){
    const id = req.params.id
    await db.deleteProduct(id)
    res.redirect("/")
}

async function deleteCategoryGet(req, res){
    const id = req.params.id
    await db.deleteCategory(id)
    res.redirect("/")
}


module.exports = {
    deleteProductGet,
    deleteCategoryGet
}