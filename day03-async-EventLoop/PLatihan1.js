// Soal 1
// Buat fungsi delay(ms) yang mengembalikan Promise dan resolve setelah ms milidetik.
// Ekspektasi pemakaian:
// delay(500).then(() => console.log("jalan setelah 0.5 detik"));

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay(500).then(() => {
  console.log("Jalan setelah 0,5 detik");
});

// Soal 2
// Buat fungsi isEvenAsync(n) yang:
// resolve dengan string "GENAP" jika n genap

// reject dengan Error "GANJIL" jika n ganjil

// Ekspektasi:
// isEvenAsync(4).then(console.log).catch(err => console.error(err.message));
// isEvenAsync(3).then(console.log).catch(err => console.error(err.message));

function isEvenAsync(n) {
  return new Promise((resolve, reject) => {
    if (n % 2 === 0) {
      resolve("Genap");
    } else {
      reject(new Error("Ganjil"));
    }
  });
}

isEvenAsync(4)
  .then(console.log)
  .catch((err) => console.error(err.message));
isEvenAsync(3)
  .then(console.log)
  .catch((err) => console.error(err.message));
