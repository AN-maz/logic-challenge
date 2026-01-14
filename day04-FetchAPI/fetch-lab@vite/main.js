import { getPosts, createPost, getPostsTestTimeout, getPostsTestRetry } from "./api/endpoints.js";

const out = document.querySelector("#id");
const btn = document.querySelector("#btn");
const btnPost = document.querySelector("#btn-id");
const inpTitle = document.querySelector("#inp-title");
const inpBody = document.querySelector("#inp-body");
const btnTimeout = document.querySelector("#btn-timeout");
const btnRetry = document.querySelector("#btn-retry");

// Helper Reset UI
function resetUI(msg = "Loading...") {
  out.style.color = "black";
  out.textContent = msg;
}

// --- 1. Load Posts ---
btn.addEventListener("click", async () => {
  resetUI();
  try {
    // Panggil fungsi API yang rapi
    const data = await getPosts({ userId: 1, _limit: 9 });
    
    out.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    out.style.color = "red";
    out.textContent = `Error: ${err.message}`;
  }
});

// --- 2. Create Post ---
btnPost.addEventListener("click", async () => {
  if (!inpTitle.value || !inpBody.value) {
    alert("Isi dulu MasPur!");
    return;
  }
  
  resetUI("Mengirim data...");

  try {
    const payload = {
      title: inpTitle.value,
      body: inpBody.value,
      userId: 1,
    };

    // Panggil fungsi API
    const hasil = await createPost(payload);

    out.textContent = `Sukses! Response:\n${JSON.stringify(hasil, null, 2)}`;
  } catch (err) {
    out.style.color = "red";
    out.textContent = `Gagal POST: ${err.message}`;
  }
});

// --- 3. Test Timeout ---
btnTimeout.addEventListener("click", async () => {
  resetUI("Mencoba fetch timeout 1s...");

  try {
    const data = await getPostsTestTimeout(1000);
    out.textContent = "Berhasil! \n" + JSON.stringify(data, null, 2);
  } catch (err) {
    out.style.color = "red";
    if (err.name === "AbortError") {
      out.textContent = "Gagal: Request Time Out! (Waktu habis)";
    } else {
      out.textContent = `Error lain: ${err.message}`;
    }
  }
});

// --- 4. Test Retry ---
btnRetry.addEventListener("click", async () => {
  resetUI("Mencoba retry...");

  try {
    const urlError = "https://situs-tidak-ada-beneran-123.com";
    
    const data = await getPostsTestRetry(urlError);

    out.textContent = "Berhasil! Data: \n"+ JSON.stringify(data,null,2);
  } catch(err) {
    out.style.color = 'red';
    out.textContent = `Gagal total setelah retry: ${err.message}`;
  }
});