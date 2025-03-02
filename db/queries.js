const pool = require('./pool')

async function getAllProducts(category) {
    const {rows} = await pool.query(`SELECT * FROM products WHERE category = $1`, [category])
    return rows
}

async function getAllCategories(category) {
    const {rows} = await pool.query("SELECT * FROM categories")
    return rows
}

async function insertNewCategory(category) {
    await pool.query("INSERT INTO categories (name) VALUES ($1)", [category.category])
}

async function insertNewProduct(product) {
    console.log(product.title, product.price, product.category)
    await pool.query("INSERT INTO products (title, price, category) VALUES ($1, $2, $3)", [product.title, product.price, product.category])
}

module.exports = {
    getAllCategories,
    getAllProducts,
    insertNewCategory,
    insertNewProduct
}