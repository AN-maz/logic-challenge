import { getJSON, buildURL, sendJSON, getJsonWithTimeout } from "./api.js";

const out = document.querySelector("#id");
const btn = document.querySelector("#btn");

// input
const btnPost = document.querySelector("#btn-id");
const inpTitle = document.querySelector("#inp-title");
const inpBody = document.querySelector("#inp-body");

const btnTimeout = document.querySelector("#btn-timeout");

btn.addEventListener("click", async () => {
  out.textContent = "Loading ya...";

  try {
    const alamatAPI = "https://jsonplaceholder.typicode.com/posts";
    const params = {
      userId: 1,
      _limit: 9,
    };

    const urlLegkap = buildURL(alamatAPI, params);
    const data = await getJSON(urlLegkap);
    out.textContent = JSON.stringify(data, null, 2);
    // JSON.stringify buat ubah object JavaScript ke string JSON biar bisa ditampilin di HTML, karena text content cuma bisa nampung string. Null, 2 itu buat format string JSON biar lebih rapi dengan indentasi 2 spasi
  } catch (err) {
    out.textContent = `Error: ${err.message}`;
  }
});

btnPost.addEventListener("click", async () => {
  if (!inpTitle.value || !inpBody.value) {
    alert("Isi dulu MasPur!");
    out.textContent = "Kirim data lagi";
    return;
  }

  out.textContent = "mengirim data";

  try {
    const dataBaru = {
      title: inpTitle.value,
      body: inpBody.value,
      userId: 1,
    };

    const alamatURL = "https://jsonplaceholder.typicode.com/posts";

    const hasil = await sendJSON(alamatURL, {
      method: "POST",
      data: dataBaru,
    });

    out.textContent = `Sukses! Server merespons:\n${JSON.stringify(
      hasil,
      null,
      2
    )}`;
  } catch (err) {
    out.textContent = `Gagal POST: ${err.message}`;
  }
});


btnTimeout.addEventListener("click", async () => {
  out.textContent = "Mencoba fetch dengan waktu 50ms...";

  try {
    const data = await getJsonWithTimeout('https://jsonplaceholder.typicode.com/posts', { 
      timeoutMs: 50 
    });
    
    out.textContent = "Berhasil! \n" + JSON.stringify(data, null, 2);

  } catch (err) {
    if (err.name === "AbortError") {
      out.textContent = "Gagal: Request Time Out! (Waktu habis)";
      out.style.color = "red"; 
    } else {
      out.textContent = `Error lain: ${err.message}`;
    }
  }
});