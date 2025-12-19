
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
function getCity(kota) {

    const city = kota.address.city
    return city;
}

const kota = getCity(company);
console.log("5.1", kota);

// 2. ambil nilai react

function getReact(react) {

    const srch_reach = react.employees[0].skills[1];
    return srch_reach;
}

const react = getReact(company);
console.log("5.2", react);

// 3. Menambahkan node.js ke karyawan 2

function add_nodeJS(nodeJs) {

    nodeJs.employees[1].skills.push("Node.JS");
    return nodeJs.employees[1];
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

