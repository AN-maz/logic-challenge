const transactions = [
    { userId: 1, amount: 50000 },
    { userId: 2, amount: 100000 },
    { userId: 1, amount: 70000 },
    { userId: 3, amount: 30000 },
    { userId: 2, amount: 20000 }
];

function totalByUser(id) {

    let hasil = {};

    for (let key of id) {

        const userId = key.userId;

        if (!hasil[userId]) {
            hasil[userId] = 0;
        }

        hasil[userId] += key.amount;
    }

    return hasil;
}

const cetak4 = totalByUser(transactions);
console.log("4.", cetak4);
