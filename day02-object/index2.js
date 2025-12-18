const cart = {
    apple: 3,
    orange: 2,
    mango: 5
};


// 1. Challenge
function tambahAll(a) {

    let hasil = 0;

    for (let key in a) {
        hasil = hasil + a[key]
    }

    return hasil;
}

const cetak = tambahAll(cart)
console.log("1.", cetak)

// 2. Challenge
function cara1_printKeyValue(a) {

    const hasil = Object.entries(a).map(([key, value]) => `${key} : ${value}`)
    return hasil
}

function cara2_rintKeyValue(a) {

    let hasil = []

    for (let key in a) {
        hasil.push(key, ':', a[key])
    }
    return hasil
}
const cetak_cara1 = cara1_printKeyValue(cart);
const cetak_cara2 = cara1_printKeyValue(cart);
console.log("2. cara 1", cetak_cara1)
console.log("2. cara 2", cetak_cara2)


// 3. Challenge

const products = [
    { id: 1, name: "Keyboard", price: 250000, stock: 10 },
    { id: 2, name: "Mouse", price: 150000, stock: 0 },
    { id: 3, name: "Monitor", price: 2000000, stock: 3 }
];

// 3.1 

function availableProducts(a) {

    let hasil = [];


    for (let key in a) {

        let stok = a[key]["stock"]

        if (stok > 0) {
            hasil.push({ key, ...a[key] })
        }
    }
    return hasil;
}

const cetak3_1 = availableProducts(products)
console.log("3.1", cetak3_1)

// 3.2

function productNames(a) {

    let names = []

    for (let key in a) {
        let name = a[key]["name"]
        names.push("Name: " + name)
    }

    return names
}

const cetak3_2 = productNames(products);
console.log("3.2", cetak3_2);

// 3.3

function inventorySum(a) {

    let names = []

    for (let key of a) {

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

// 4. Challenge

const transactions = [
    { userId: 1, amount: 50000 },
    { userId: 2, amount: 100000 },
    { userId: 1, amount: 70000 },
    { userId: 3, amount: 30000 },
    { userId: 2, amount: 20000 }
];

function totalByUser(a) {

    let hasil = {};

    for (let key of a) {

        const userId = key.userId;

        if (!hasil[userId]) {
            hasil[userId] = 0;
        }

        hasil[userId] += key.amount;
    }

    return hasil;
}

const cetak4 = totalByUser(transactions);
console.log("4.", cetak4);

// 5. Nested Object
const company = {
    name: "TechNova",
    address: {
        city: "Jakarta",
        zip: "12950"
    },
    employees: [
        { id: 1, name: "Budi", skills: ["JS", "React"] },
        { id: 2, name: "Siti", skills: ["Python"] }
    ]
};

// 1. ambil city
function getCity(a) {

    const city = a.address.city
    return city;
}

const kota = getCity(company);
console.log("5.1", kota);

// 2. ambil nilai react

function getReact(a) {

    const react = a.employees[0].skills[1];
    return react;
}

const react = getReact(company);
console.log("5.2", react);

// 3. Menambahkan node.js ke karyawan 2

function add_nodeJS(a) {

    a.employees[1].skills.push("Node.JS");
    return a.employees[1];
}

const cetak5_3 = add_nodeJS(company);
console.log("5.3", cetak5_3);

// 4. membuat Function getEmployeeById

function getEmployeeById(company, id) {

    for (let employee of company.employees) {
        if (employee.id === id) {
            return employee.name;
        }
    }
    return 'Not-Found';

    // GIVE UP - Buat evaluasi

    // for (let employee of company.employees) {

    //     if (employee.id === employee.id[id]) {
    //         return employee.id[id];
    //     }
    // }
    // return "Not-Found";
}

const cetak5_4 = getEmployeeById(company, 2);
console.log("5.4", cetak5_4);

