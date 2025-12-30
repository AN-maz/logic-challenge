// Soal 9 (Promise.all sukses & gagal)
// Diberikan fungsi:
// function task(name, ms, shouldFail = false) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) reject(new Error(`${name} FAILED`));
//       else resolve(`${name} OK`);
//     }, ms);
//   });
// }

// Tugas:
// Jalankan Promise.all([task("A",200), task("B",100), task("C",150)]) dan print array hasil.
// Jalankan Promise.all([task("A",200), task("B",100,true), task("C",150)]) dan tangkap errornya.
// Bonus: buat versi async function runAll() yang menggunakan try/catch.


function task(name, ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error(`${name} FAILED`));
      else resolve(`${name} OK`);
    }, ms);
  });
}

// Promise.all([
//     task("A",200),
//     task("B",100,true),
//     task("C",150)
// ])
// .then(hasil =>{
//     console.log(hasil);
// })
// .catch(err =>{
//     console.error(err.message);
// })


// Bonusnya:

async function runAll() {
  try {
    const results = await Promise.all([
      task("A", 200),
      task("B", 100),
      task("C", 150)
    ]);
    console.log(results);
  } catch (err) {
    console.error(err.message);
  }
}

runAll();

