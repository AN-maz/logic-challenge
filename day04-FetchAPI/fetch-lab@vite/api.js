export async function getJSON(url, { signal } = {}) {
  const res = await fetch(url, { signal });

  // { signal } = {}, untuk abordSignal kalo user pindah page atau cancel request

  // HTTP error handling
  if (!res.ok) {
    // Ambil body untuk detail (tidak selalu JSOn)
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
  }

  // OPSIONAL : pastikan JSON
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    throw new Error(`Expected JSON. got: ${ct}`);
  }

  return res.json();
}

// Req dengan query params, hindari string manual
export function buildURL(base, query = {}) {
  const url = new URL(base);

  for (const [k, v] of Object.entries(query)) {
    if (v === undefined || v === null) continue;
    url.searchParams.set(k, String(v));
  }
  return url.toString();
}

/*
 - const url = new URL(base);: Mengubah string alamat dasar (misal: https://api.com) menjadi objek URL bawaan JavaScript yang pintar.

 - Object.entries(query): Mengambil objek yang kamu masukkan (misal: { limit: 5 }) dan memecahnya menjadi pasangan kunci dan nilai.

 - if (v === undefined || v === null) continue;: Jika kamu tidak mengisi nilai pada salah satu parameter, fungsi ini akan mengabaikannya (tidak dimasukkan ke URL).

 - url.searchParams.set(k, String(v));: Bagian paling penting. Ini otomatis menambahkan ?key=value atau &key=value ke URL. Ia juga menangani karakter khusus (spasi, simbol) agar aman dibaca browser.

 - url.toString(): Mengubah kembali objek URL yang sudah lengkap tadi menjadi string teks biasa.
*/

// POST/PUT JSON yang benar
export async function sendJSON(url, { method = "POST", data, signal } = {}) {
  const res = await fetch(url, {
    method,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} - ${text}`);
  }

  // 204 no Content: jangan parse JSON
  if (res.status === 204) return null;

  return res.json();
}

export async function fetchWithTimeout(url, init = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...init, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(t);
  }
}

export async function getJsonWithTimeout(url, { timeoutMs = 8000 } = {}) {
  const res = await fetchWithTimeout(url, {}, timeoutMs);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  return res.json();
}
