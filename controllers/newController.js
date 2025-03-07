const db = require('../db/queries')

async function createCategoryGet(req, res) {
    res.render("newCategory", {title: "Create New Category"})
}

async function createProductGet(req, res) {
    res.render("newProduct", {title: "Create New Product"})
}

async function createCategoryPost(req , res) {
    db.insertNewCategory(req.body)
    res.redirect("/")
}

async function createProductPost(req, res) {
    db.insertNewProduct(req.body)
    res.redirect("/")
}

module.exports = {
    createCategoryGet,
    createCategoryPost,
    createProductGet,
    createProductPost
}