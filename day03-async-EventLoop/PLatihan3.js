// Paket Latihan 3 — .catch() dan alur recovery
// Soal 5 (Catch sebagai recovery)
// Buat fungsi parseJsonSafe(str) yang mengembalikan Promise:
// resolve dengan hasil JSON.parse(str) jika valid

// reject jika invalid

// Lalu buat chain:
// coba parse JSON

// jika gagal, .catch() mengembalikan object default { fallback: true }

// akhir chain selalu .then(console.log) dan tidak crash

// Test case:
// parseJsonSafe('{"a":1}')
//   .catch(() => ({ fallback: true }))
//   .then(console.log); // {a:1}

// parseJsonSafe('{invalid json}')
//   .catch(() => ({ fallback: true }))
//   .then(console.log); // {fallback:true}

function parseJsonSafe(str) {
  return new Promise((resolve, reject) => {
    try {
      const hasil = JSON.parse(str);
      resolve(hasil);
    } catch (err) {
      reject(err);
    }
  });
}

parseJsonSafe('{"a":1}')
  .catch(() => ({ fallback: true }))
  .then(console.log);

parseJsonSafe("{invalid json}")
  .catch(() => ({ fallback: true }))
  .then(console.log);
