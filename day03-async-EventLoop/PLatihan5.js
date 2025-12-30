// Paket Latihan 5 — try/catch dan custom error
// Soal 7
// Buat fungsi divideAsync(a, b) pakai async/await:
// jika b === 0, throw new Error("DIVIDE_BY_ZERO")


// kalau tidak, return a / b


// Buat pemanggil:
// panggil divideAsync(10, 2) dan print hasil


// panggil divideAsync(10, 0) dan tangkap error, print err.message

async function divideAsync(a,b){
    if(b === 0 ){
        throw new Error("DIVIDE_BY_ERROR");
    }
    return a / b;
}

// Soal 8 (Throw dari hasil validasi)
// Buat async function validateUser(user):
// jika user.name kosong → throw "NAME_REQUIRED"


// jika user.age < 18 → throw "UNDERAGE"


// jika valid → return "OK"


// Lalu buat handler:
// try {
//   const result = await validateUser({ name: "", age: 20 });
//   console.log(result);
// } catch (e) {
//   console.log("Gagal:", e.message);
// }

async function validateUser(user){

    if(!user.name){
        throw new Error("NAME_REQUIRED");
    }

    if(user.age < 18){
        throw new Error("UNDERAGE")
    }

    return "OK";
}

async function handler(){
    try{
        const hasil = await validateUser({name:"",age:20});
        console.log(hasil);
    }catch(e){
        console.error("Gagal:",e.message);
    }
}

handler()