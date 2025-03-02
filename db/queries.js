const pool = require('./pool')

async function getAllProducts(category) {
    const {rows} = await pool.query("SELECT * FROM products")
    return rows
}

async function getAllCategories(category) {
    const {rows} = await pool.query("SELECT * FROM categories")
    return rows
}