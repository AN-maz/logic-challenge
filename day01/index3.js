// Hitung Jumlah Angka Positif

// Diberikan array angka (positif, negatif, nol), hitung total nilai angka positif saja.

// Contoh:
// [-2, 3, 0, 5, -1] → 8

let angka = [-2, 3, 0, 5, -1]

function hitungPositif(a) {

    let hasil = 0;

    for (let i = 0; i < a.length; i++) {

        if (a[i] > 0) {
            hasil = hasil + a[i]
        }
    }
    console.log(hasil)
}
hitungPositif(angka)