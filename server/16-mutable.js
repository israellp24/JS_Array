const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product_index = products.findIndex(item => item.id === '🍔');


if (product_index !== -1) {
    myProducts.push(products[product_index]);
    products.splice(product_index,1);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//update

const productsv2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];


const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso',
    }
}

const productsv2_index = productsv2.findIndex(item => item.id === update.id);

productsv2[productsv2_index] =
{
    ...productsv2[productsv2_index],
    ...update.changes,
};
console.log(productsv2);