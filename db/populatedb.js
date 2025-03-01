const {Client} = require('pg')

let users = []
let products = []

async function fetchUsers() {
    const response = await fetch('https://fakestoreapi.com/users');
    const data = await response.json();
    return data;
  }

async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}



async function main() {
    try {
    console.log("Seeding ...")

    const users = await fetchUsers();
    const products = await fetchProducts();

    const client = new Client({
        connectionString: 'postgresql://Nagul:252005@localhost:5432/ecommerce'
    })
    await client.connect()

    await Promise.all(users.map( async user => {
        const SQLusers = `
            INSERT INTO users (name, email, password, phone)
            VALUES ($1, $2, $3, $4);
            `;
        const username = user.name.firstname + ' ' + user.name.lastname
        await client.query(SQLusers, [username, user.email, user.password, user.phone])
    })
    )

    await Promise.all(products.map(async product => {
        const SQLproducts = `
            INSERT INTO products (title, description, price, category, image_url)
            VALUES ($1, $2, $3, $4, $5);
        `;
        await client.query(SQLproducts, [product.title, product.description, product.price, product.category, product.image])
    })
    )

    await client.end()
    console.log("End")
    }
    catch(err) {
        console.log(err)
    }
}

main()

