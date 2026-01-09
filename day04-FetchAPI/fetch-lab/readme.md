Jika terdapat error :
` running scripts is disabled on this system `

Itu karena disebabkan windows membatasi scipts seperti file `.ps1` untuk melindungi sistem dari script berbahaya

### Solusi 

1. Buka PowerShell sebagai Administrator (Klik Start, cari PowerShell, klik kanan > Run as Administrator).
2. Ketik perintah berikut dan tekan Enter:

        Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

3. Ketik Y lalu tekan Enter saat muncul konfirmasi.
4. Sekarang kembali ke VS Code dan coba jalankan kembali perintah `npx http-server -p 5173.`

---

### Pengetahuan Baru

1. Apa itu tag `<pre>`?
`<pre>` adalah singkatan dari preformatted text.

Fungsinya:
- Menampilkan teks apa adanya
- Spasi, tab, dan baris baru tidak diubah
- Tidak seperti `<p>` atau `<div>` yang biasanya merapikan spasi

Contoh perbedaan:

        <p>
        Halo    dunia
        baris baru
        </p>

Ditampilkan jadi satu baris rapi

        <pre>
        Halo    dunia
        baris baru
        </pre>

Ditampilkan persis seperti yang kamu tulis

2. Apa itu textContent?

textContent adalah property JavaScript untuk mengambil atau mengubah teks murni di dalam elemen HTML.

➡️ Tidak membaca HTML, hanya teksnya saja. Aman dari XML Script