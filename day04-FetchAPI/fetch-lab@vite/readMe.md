## Fetch API Lab - Mini API Client Architecture
Proyek ini adalah implementasi teknik Advanced Fetch API menggunakan struktur folder yang modular, rapi, dan reusable (standar industri).

## Struktur Proyek
        src/
        ├── api/
        │   ├── client.js      <-- (The Engine) Alat teknis request HTTP
        │   └── endpoints.js   <-- (The Menu) Daftar URL dan logika bisnis
        ├── main.js            <-- (The UI Logic) Menghubungkan HTML dengan API
        └── index.html         <-- Tampilan Web

## Penjelasan File & Fungsi

1. src/api/client.js (Low-Level / The Engine)
File ini berisi fungsi-fungsi pembungkus (wrapper) dasar. File ini tidak peduli data apa yang diambil, tugasnya hanya memastikan cara kirim request-nya benar (menangani Header, Timeout, Error, dll).

- sleep(ms):
    - Fungsi internal (helper) untuk mem-pause kode sejenak. Digunakan saat melakukan retry agar tidak membombardir server.

- buildURL(base, query):
    - Mengubah URL dasar dan object parameter (misal {limit: 5}) menjadi string URL yang valid dan aman.

- getJSON(url, options):
    - Melakukan request GET standar. Otomatis mengecek res.ok dan melempar error jika status HTTP bukan 200-299.

- sendJSON(url, options):
    - Melakukan request POST (atau PUT). Otomatis mengatur header Content-Type: application/json dan mengubah data body menjadi string JSON.

- getJsonWithTimeout(url, timeoutMs):
    - Melakukan request dengan batasan waktu. Jika server tidak merespons dalam waktu timeoutMs, request dibatalkan paksa menggunakan AbortController.

- getJsonWithRetry(url, retries):
    - Fitur tercanggih. Jika request gagal karena masalah jaringan atau server down (503), fungsi ini akan mencoba ulang secara otomatis dengan jeda waktu yang makin lama (Exponential Backoff).

## 2. src/api/endpoints.js (High-Level / The Menu)
File ini berisi daftar "Menu" yang tersedia di aplikasi. File ini menjembatani antara main.js dengan client.js. Jika URL API berubah, kita cukup mengedit file ini saja.

- getPosts(params):
    - Memanggil getJSON untuk mengambil daftar postingan dari JSONPlaceholder.

- createPost(payload):
    - Memanggil sendJSON untuk mengirim data postingan baru.

- getPostsTestTimeout(ms):
    - Endpoint khusus untuk mengetes fitur Timeout (memaksa batas waktu tertentu).

- getPostsTestRetry(url):
    - Endpoint khusus untuk mengetes fitur Retry (biasanya disengaja menggunakan URL yang salah/error).

## 3. src/main.js (The Consumer / UI Logic)
File ini adalah "Otak" dari tampilan web. Tugasnya hanya mendengarkan klik tombol user dan menampilkan data ke layar. File ini sangat bersih karena tidak mengandung logika rumit fetch atau while loop.

- Event Listeners (btn.addEventListener):
    - Menunggu klik dari user.
    - Memanggil fungsi dari endpoints.js (contoh: await getPosts(...)).

- Error Handling (try/catch):
    - Menangani apa yang harus ditampilkan ke user jika sukses (tampilkan JSON) atau jika gagal (tampilkan pesan error merah).
 
    - Membedakan pesan error biasa dengan error Timeout (AbortError).

## Konsep Utama yang Dipelajari

- `Separation of Concerns`: Memisahkan logika UI, daftar API, dan teknis Fetch.

- `AbortController`: Membatalkan request yang terlalu lama (Timeout).

- `Exponential Backoff Retry`: Algoritma cerdas untuk mencoba ulang koneksi yang gagal secara bertahap.