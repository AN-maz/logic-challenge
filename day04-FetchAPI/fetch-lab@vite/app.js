import { getJSON, buildURL } from './api.js';

const out = document.querySelector("#id");
const btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
  out.textContent = "Loading ya...";

  try {
   
    const alamatAPI = 'https://jsonplaceholder.typicode.com/posts';
    const params = {
      userId: 1,
      _limit:9
    };

    const urlLegkap = buildURL(alamatAPI, params);
    const data = await getJSON(urlLegkap)
    out.textContent = JSON.stringify(data, null, 2); 
    // JSON.stringify buat ubah object JavaScript ke string JSON biar bisa ditampilin di HTML, karena text content cuma bisa nampung string. Null, 2 itu buat format string JSON biar lebih rapi dengan indentasi 2 spasi
  } catch (err) {
    out.textContent = `Error: ${err.message}`;
  }
});
