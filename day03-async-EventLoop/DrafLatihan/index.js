Promise.resolve()
  .then(() => {
    console.log("Sy tidak dijalankan");
  })
  .then(() => {
    throw new Error("Ups,Error MasPur");
  })
  .catch((error) => {
    console.log("Tertangkap: " + error.message);
    return "Lanjut Lagi";
  })

  .then((pesan) => {
    console.log("Akhir:", pesan);
  });

// ====
function ambilData() {
  fetchUserData()
    .then((user) => {
      console.log("User:", user);
      return fetchUserPosts(user.id);
    })
    .then((posts) => {
      console.log("Posts:", posts);
    })
    .catch((err) => {
      console.log("Gagal:", err);
    });
}

// Mengubah ke Async

async function ambilData_() {
  try {
    const user = await fetchUserData();
    console.log("User:", user);

    const posts = await fetchUserPosts(user.id);
    console.log("Posts:", posts);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

// =====

function loginUser(username) {
  console.log("Proses Login...");

  cekDatabase(username)
    .then((user) => {
      return cekPassword(user.password);
    })
    .then((isValid) => {
      if (isValid) {
        console.log("Login Berhasil");
      } else {
        console.log("Password salah!");
      }
    })
    .catch((err) => {
      console.log("Error Sistem:", err);
    });
}

async function loginUser(username) {
  try {
    const username = await cekDatabase;
    const isValid = await cekPassword(username.id);

    if (isValid) {
      console.log("Login Berhasil");
    } else {
      console.log("Password salah");
    }
  } catch (err) {
    console.log("Error sistem :", err);
  }
}

// ===
function tampilkanProduk() {
  api.getProducts().then((produk) => {
    console.log("Daftar Produk:", produk);
  });
}

async function tampilkanProduk() {
  const produk = await getProducts();
  console.log("Daftar Produk:", produk);
}

// ====
function cekAlamat() {
  getUser()
    .then((user) => {
      return getAddress(user.id);
    })
    .then((alamat) => {
      console.log("Alamat:", alamat);
    });
}

async function cekAlamat() {
  const user = await getUser();
  const alamat = getAddress(user.id);

  console.log("Alamat:".alamat);
}

// ===
function prosesAngka() {
  ambilAngka()
    .then((angka) => {
      const hasilKali = angka * 2;
      return kirimKeServer(hasilKali);
    })
    .then((respon) => {
      console.log("Server OK:", respon);
    });
}

async function prosesAngka() {
  const angka = await ambilAngka();
  const hasilKali = angka * 2;
  // return kirimKeServer(hasilKali);

  const respon = await kirimKeServer(hasilKali);
  console.log("Server OK:", respon);
}

// ====

function daftarMember(nama) {
  cekAvailable(nama)
    .then((isAvailable) => {
      if (isAvailable) {
        return createMember(nama);
      } else {
        throw new Error("Nama sudah dipakai");
      }
    })
    .then((memberId) => {
      console.log("Member dibuat:", memberId);
    })
    .catch((err) => {
      console.log("Gagal:", err.message);
    });
}

async function daftarMember(nama) {
  try {
    const isAvailable = await cekAvailable(nama);

    if (isAvailable) {
      const memberId = createMember(nama);
      console.log("Member dibuat:",memberId);
    } else {
      throw new Error("Nama sudah dipakai");
    }

  } catch (err) {
    console.log("Error:",err);
  }
}
