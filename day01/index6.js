// Tambah 1 ke Semua Angka Kecuali 0

// Jika elemen adalah angka dan bukan 0, tambahkan 1.
// Angka 0 tetap.

// Contoh:
// [0, 2, 5] → [0, 3, 6]


let angka = [0, 2, 5]

function hitungtanpa0(a) {

    let tambah = a.map((b) => {

        if ( (!b) == 0) {
            return b + 1
        }else{
            return 0
        }
    })

    return tambah
}
const hasil = hitungtanpa0(angka)
console.log(hasil);