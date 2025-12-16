// Ambil 3 Karakter Pertama Setiap String

// Diberikan array string, ambil maksimal 3 karakter pertama dari tiap elemen.

// Contoh:
// ["apel", "pisang", "teh"] → ["ape", "pis", "teh"]

let buah = ["apel", "pisang", "teh"]

let get_3angka = buah.map((kata) => {

    return kata.slice(0,3)
})

console.log(get_3angka)