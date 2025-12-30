# 1. Konsep Dasar Asynchronous Js

## 1.1 Sifat dasar javaScript
- Single-threaded
- Memiliki satu callback
- Mengeksekusi kode secara async (berurutan) secara default

Konsekuensinya, Js hanya dapat mengerjakan satu tugas pada satu waktu

## 1.2 Blocking Vs Non Blocking

### 1.2.A Blocking 
merupakan kondisi di mana sebuah operasi menghentikan eksekusi tugas lain hingga operasi tersebut selesai

Karakteristik:
- program menunggu satu proses selesai 
- eksekusi kode berikutnya tertunda 
- Berpotensi menyebabkan aplikasi tidak responsif

Contoh Konseptual:

    while(true){}

pada kasus ini, program akan berhenti di satu titik dan tidak melanjutkan eksekusi

### 1.2.B Non-Bloking
Merupankan pendekatan di mana operasi yang melakukan waktu lama tidak menghentikan eksekusi kode lainnya

karakteristik:
- Tugas berat dijalankan secara terpisah 
- Program tetap berjalan 
- User interface tetap responsif 

Contoh:

    setTimeout(() => {
    console.log("Task selesai");
    }, 1000);

Eksekusi utama tetap berlanjut tanpa menunggu proses tersebut selesai

## 1.3 Alasan js Membutuhkan async programming
Beberapa operasi membutuhkan waktu yang relatif lama, seperti:
- HTTP Request (API)
- Akses Database
- Membaca File
- Timer

Jika operasi tersebut dijalankan secara blocking:
- Aplikasi web akan freeze
- Interaksi pengguna terganggu
- Performa aplikasi menurun 

Oleh karena itu, Js menggunakan async programming untuk:
- Menjaga performa 
- Menghindari blocking pada main thread
- Meningkatkan user experience

## 1.4 Perbedaan sync dan async code 

### 1.4.1 Sync code
Eksekusi dilakukan secara berurutan, dan setiap baris harus menunggu baris sebelumnya selesai

    console.log("A");
    console.log("B");
    console.log("C");

Output:

    A
    B
    C

### 1.4.2 Async code 
Eksekusi tidak menunggu proses async selesai

    console.log("A");

    setTimeout(() => {
    console.log("B");
    }, 1000);

    console.log("C");

output:

    A
    C
    B

## 1.5 Mengapa `setTimeOut` tidak menghentikan program?
`setTimeOut` tidak berfungsi sebagai delay blocking

yang terjadi:

1. Js mengeksekusi kode sync
2. callback `setTimeOut` dikirim ke web API
3. Program melanjutkan eksekusi 
4. Callback dijalankan setelah waktu terpenuhi

Dengan demikian:
- `setTimeOut` hanya menjadwalkan eksekusi 
- Tidak menghentikan alur utama program 

## 1.6 Mengapa nilai Async tidak bisa langsung direturn? 
Contoh:

    function getData() {
    setTimeout(() => {
        return "DATA";
    }, 1000);
    }

    console.log(getData());

Hasil:

    undefined

penjelasan:
- `return` terjadi di dalam callback
- Function utama telah selesai sebelum callback dieksekusi 
- Tidak ada nilai yang dikembalikan secara sync 

Kesimpulan

    Nilai async tidak tersedia secara langsung, melainkan di masa mendatang

## 1.7 Pendekatan yang benar dalam menangani async result

### 1.7.1 Callback

    function getData(callback) {
    setTimeout(() => {
        callback("DATA");
    }, 1000);
    }

### 1.7.2 Promise 

    function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve("DATA");
        }, 1000);
    });
    }

### 1.7.3 Async/Await

    async function main() {
    const data = await getData();
    console.log(data);
    }

`async/await` memberikan sintaks yang lebih mudah dibaca tanpa mengubah sifat Async Js

---
