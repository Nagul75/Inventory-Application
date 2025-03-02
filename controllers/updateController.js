const db = require('../db/queries')

async function updateProductGet(req, res) {
    const id = req.params.id
    res.render("updateProduct", {
        title: "Update Product",
        id: id
    })
}

async function updateProductPost(req, res) {
    const id = req.params.id
    const title = req.body.title
    await db.updateProduct(id, title)
    res.redirect("/")
}

async function updateCategoryGet(req, res) {
    const id = req.params.id
    res.render("updateCategory", {
        title: "Update Category",
        id: id
    })
}

async function updateCategoryPost(req, res) {
    const id = req.params.id
    const name = req.body.name
    await db.updateCategory(id, name)
    res.redirect("/")
}

module.exports = {
    updateCategoryGet,
    updateCategoryPost,
    updateProductGet,
    updateProductPost
}