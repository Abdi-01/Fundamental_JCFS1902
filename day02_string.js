///////////////////////////// DATA TYPE //////////////////////////////////
// String ==> untuk character atau huruf
let namaToko = "Runner \"Shop\" 'A' \n Toko Olahraga"; // double quote
let nama_toko = 'Runner \'Shop\' B'; // single quote
let alamatToko = `jl. 'Sudirman' "Tamrin"
Toko Sepatu`; // backthick 
// console.log(namaToko)
// console.log(nama_toko)
// console.log(alamatToko)

// let alamatLengkap = nama_toko + " " + alamatToko; // cara 1
let alamatLengkap = `Pak Edo, ${nama_toko}, ${alamatToko}`; // cara 2 ✅
console.log(alamatLengkap)

/////////////////////FUNGSI PADA STRING//////////////////////////
let greeting = "Hello, Purwadhika Coder";
console.log(greeting);
// typeof : memeriksa tipe data
console.log(typeof greeting);

// string.length = mneghitung panjang string
console.log("string.length ==> ", greeting.length);

// string.indexOf() : mencari posisi dari suatau kata berdasarkan huruf pertama
console.log("string.indexOf() ==> ", greeting.indexOf("Purwadhika"));

// string.substr : mengambil bagian tertentu dari data string berdasarkan index awal dan jumlah
console.log("string.substr ==>", greeting.substr(7, 10));

// string.slice : mengambil bagian tertentu dari ata string brdasarkan index awal dan index akhir
console.log("string.slice ==>", greeting.slice(7, 17));

// string.toLowerCase() : merubah data string menjadi huruf kecil
console.log("string.toLowerCase() ==>", greeting.toLowerCase());

// string.toUpperCase() : merubah data string menjadi huruf besar
console.log("string.toUpperCase() ==>", greeting.toUpperCase());

// string.replace() : merubah huruf tertentu
console.log("string.replace() ==>", greeting.replace("Hello", "Halo"))

// string.includes():memeriksa kata yang kita cari ada atau tidak
console.log("string.includes() ==> ", greeting.includes("Abdi"))