// Paket Latihan 4 — Konversi Promise chain ke async/await
// Soal 6 (Konversi)

// Ubah kode ini ke async/await:
// function work() {
//   return delay(300)
//     .then(() => "step 1")
//     .then((msg) => msg.toUpperCase())
//     .catch(() => "ERROR");
// }

// Target: versi async function work() yang hasilnya sama.

async function work() {
  try {
    await DelayNode(300);
    const msg = "Step 1";
    return msg.toUpperCase();
  } catch (err) {
    return "Error";
  }
}
