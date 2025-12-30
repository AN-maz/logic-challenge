// Soal 3 (Chaining)

// Diberikan:
// function getNumber() {
//   return Promise.resolve(5);
// }

// Buat chain .then() sehingga output akhirnya adalah ((5 * 2) + 10) = 20.
// Ekspektasi:
// getNumber()
//   // chain di sini
//   .then(result => console.log(result)); // 20

function getNumber(){
    return Promise.resolve(5)
}

getNumber()
    .then(angka => {
        return angka * 2
    })
    .then(angka =>{
        return angka + 10
    })
    .then(hasil => console.log(hasil));


// Soal 4 (Return Promise di then)
// Buat fungsi:
// function addAsync(a, b) {
//   // return Promise yang resolve ke a+b setelah 200ms
// }

// Lalu gunakan chaining:
// ambil hasil addAsync(2,3) → 5


// lanjut addAsync(hasil, 10) → 15


// print 15

function addAsync(a,b){

    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(a+b);
        },200);
    })
}

addAsync(2,3)
    .then(hasil =>{
        console.log(hasil);
        return addAsync(hasil,10);
    })
    .then(finalhasil =>{
        console.log(finalhasil);
    })