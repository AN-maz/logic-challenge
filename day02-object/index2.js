const cart = {
    apple: 3,
    orange: 2,
    mango: 5
};

function tambahAll(angka) {

    let hasil = 0;

    for (let key in angka) {
        hasil = hasil + angka[key]
    }

    return hasil;
}

const cetak = tambahAll(cart)
console.log("1.", cetak)

function cara1_printKeyValue(arr) {

    const hasil = Object.entries(arr).map(([key, value]) => `${key} : ${value}`)
    return hasil
}

function cara2_rintKeyValue(arr) {

    let hasil = []

    for (let key in arr) {
        hasil.push(key, ':', a[key])
    }
    return hasil
}
const cetak_cara1 = cara1_printKeyValue(cart);
const cetak_cara2 = cara1_printKeyValue(cart);
console.log("2. cara 1", cetak_cara1)
console.log("2. cara 2", cetak_cara2)