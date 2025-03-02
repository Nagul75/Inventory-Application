const pool = require('./pool')

async function getAllProducts(category) {
    const {rows} = await pool.query(`SELECT * FROM products WHERE category = $1`, [category])
    return rows
}

async function getAllCategories() {
    const {rows} = await pool.query("SELECT * FROM categories")
    return rows
}

async function insertNewCategory(category) {
    await pool.query("INSERT INTO categories (name) VALUES ($1)", [category.category])
}

async function insertNewProduct(product) {
    const categories = await getAllCategories()
    let flag = false
    categories.forEach(category => {
        if(product.category == category.name) {
            flag = true
        }
    })
    if(flag == true) {
        await pool.query("INSERT INTO products (title, price, category) VALUES ($1, $2, $3)", [product.title, product.price, product.category])
    } else {
        await pool.query("INSERT INTO categories (name) VALUES ($1)", [product.category])
        await pool.query("INSERT INTO products (title, price, category) VALUES ($1, $2, $3)", [product.title, product.price, product.category])
    }
}

async function deleteProduct(id) {
    await pool.query("DELETE FROM products WHERE product_id = $1", [id])
}

async function deleteCategory(id) {
    await pool.query("DELETE FROM categories WHERE category_id = $1", [id])
}

module.exports = {
    getAllCategories,
    getAllProducts,
    insertNewCategory,
    insertNewProduct,
    deleteProduct,
    deleteCategory
}