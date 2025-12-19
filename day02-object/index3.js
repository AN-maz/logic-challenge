const products = [
    { id: 1, name: "Keyboard", price: 250000, stock: 10 },
    { id: 2, name: "Mouse", price: 150000, stock: 0 },
    { id: 3, name: "Monitor", price: 2000000, stock: 3 }
];

// 3.1 

function availableProducts(stoks) {

    let hasil = [];


    for (let key in stoks) {

        let stok = stoks[key]["stock"]

        if (stok > 0) {
            hasil.push({ key, ...stoks[key] })
        }
    }
    return hasil;
}

const cetak3_1 = availableProducts(products)
console.log("3.1", cetak3_1)

// 3.2

function productNames(product) {

    let names = []

    for (let key in product) {
        let name = product[key]["name"]
        names.push("Name: " + name)
    }

    return names
}

const cetak3_2 = productNames(products);
console.log("3.2", cetak3_2);

// 3.3

function inventorySum(productSum) {

    let names = []

    for (let key of productSum) {

        const { name, price, stock } = key;

        if (stock === 0) {
            var totalPrice = price;
        } else {
            var totalPrice = price * stock;
        }

        names.push(`Name : ${name} | Total Price : ${totalPrice}`)
    }
    return names;
}
const cetak3_3 = inventorySum(products);
console.log("3.3", cetak3_3);
