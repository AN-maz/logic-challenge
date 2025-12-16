// Filter Kata Lebih dari 4 Huruf

// Ambil hanya string yang memiliki panjang lebih dari 4 karakter.

// Contoh:
// ["apel", "pisang", "teh", "semangka"] → ["pisang", "semangka"]

// PENGENALAN FUNGSI FILTER

const buahBuahan = ["apel", "pisang", "teh", "semangka"] 

function get_4kata(buah){

    const flter = buah.filter(b => b.length > 4);

    console.log(flter)
}

get_4kata(buahBuahan)