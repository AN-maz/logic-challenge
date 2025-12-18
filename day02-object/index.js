// Diberikan object:
// const user = {
//   id: 12,
//   name: "Alya",
//   email: "alya@mail.com",
//   isActive: false
// };

// Tugas:
// 1. Ubah isActive menjadi true.
// 2. Tambahkan properti role dengan nilai "admin".
// 3. Hapus properti email.
// 4. Buat output string: "Alya (id: 12) - admin"

const user = {
    id: 12,
    name: "Alya",
    email: "alya@mail.com",
    isActive: false
};

user.isActive = true
console.log('1. ' + user.isActive)

console.log('\n2. ')

user.role = 'admin'
for (let key in user) {
    console.log(key, ':' + user[key])
}

console.log('\n3. ')

delete user.email;
for (let key in user) {
    console.log(key, ':' + user[key])
}

const key = "id";
const ID = {[key]: user[key]}
const { name, role } = user;

console.log('\n4. ', name, ID , '-', role)

