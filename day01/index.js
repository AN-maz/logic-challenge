// Hapus Duplikat Tapi Tetap Urutan

// Diberikan array A. Buat array baru yang hanya menyimpan kemunculan pertama setiap nilai (urutan tetap).
// Contoh: [3,1,3,2,1] → [3,1,2]

const angka = [3, 1, 3, 2, 1]

function Duplikat(a) {

    let container = [];

    for (let i = 0; i < a.length; i++) {
        
        if(!container.includes(a[i])){
            container.push(a[i])
        }
        container.sort()
    }
    console.log(container)
}

Duplikat(angka)