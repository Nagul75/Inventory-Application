const db = require('../db/queries')

async function showCategoriesGet(req, res) {
    const categories = await db.getAllCategories()
    res.render("showCategories", {
        title: "Categories",
        categories: categories
    })
}

async function showProductsGet(req, res) {
    const category = req.params.category
    const products = await db.getAllProducts(category)
    res.render("showProducts", {
        title: "Products",
        products: products
    })
}

module.exports = {
    showCategoriesGet,
    showProductsGet
}