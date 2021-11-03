///////////////// ARRAY /////////////////////
/**
 * 1. Definis : Sebuah tipe data yang berisi sekumpulan data yang memiliki tipe data yang sama atau berbeda.
 *              Dan setiap datanya itu memiliki index atau alamat.
 *              Note : alamat index selalu dimulai dari 0 dan tipe datanya NUMBER INT.
 * 2. Tujuan : untuk mempermudah pengelolaan data
 * 3. Array bertipe Object
 * 4. Array ditandai dengan adanya kurung siku [data]
 * 5. Syntax :  keywordVariable namaVariable = [data_1, data2...]
 */

let buahApel = "Apel"; // ❌
let buahJeruk = "Jeruk"; // ❌

let buah = ["Apel", "Jeruk", "Buah Naga"]; // Cara 1️⃣
console.table(buah);
let stock = Array(15, 25, 10); // Cara 2️⃣
console.log("Nama Stock =>", stock);
let harga = []; // Cara 3️⃣
harga[0] = 10000;
harga[1] = 7500;
harga[2] = 15000;
harga[10] = 3500;
console.log("Nama Harga =>", harga);

// Cara memanggila data dari array : namaVariablenya[index_datanya]
console.log(buah[0])
console.log(buah[0] + " Stock = " + stock[0])
// mengganti data array dengan re-assign.
buah[0] = "Durian";
console.log(`Buah ${buah[0]}, stocknya ada ${stock[0]} dan harganya Rp. ${harga[0].toLocaleString()}`)


///////////////////////////////////// ARRAY FUNCTION ///////////////////////////////////////////

// ⏺️ namaVariableArray.length : untuk mengetahui jumlah data pada array yang dimiliki suatu variable
// output dari length adalah tipe data ⚠️⚠️⚠️NUMBER INT⚠️⚠️⚠️
console.log("Banyak data array buah ==>", buah.length)
console.log("Banyak data array stock ==>", stock.length)
console.log("Banyak data array harga ==>", harga.length)
console.log("ambil data terakhir =>", buah[buah.length - 1]); // buah[buah.length - 1] ===> buah[2] 
console.log("ambil data terakhir =>", stock[stock.length - 1])

// ⏺️ namaVariableArray.push(data) : digunakan utk menambah item baru diakhir array
buah.push("Melon")
stock.push(30)
console.log(buah)
console.log(stock)

// ⏺️ namaVariableArray.pop() : menghapus item terakhir dari data array
buah.pop();
stock.pop();
console.log(buah)
console.log(stock)

// ⏺️ namaVariableArray.unshift(data) : digunakan utk menambah item baru diawal array
buah.unshift("Kurma");
stock.unshift(50);
console.log(buah)
console.log(stock)

// ⏺️ namaVariableArray.shift() : menghapus item pertama dari data array
buah.shift()
stock.shift()
console.log(buah)
console.log(stock)

// ⏺️ namaVariableArray.splice(indexAwal, jumlahDataYangDihapus, dataBaru) : menghapus data array pada index tertentu
// Fungsi 1️⃣ : menghapus data tertentu pada array
let mobil = ["Toyota", "Daihatsu", "Nissan", "Lexus"];
console.log("❌ Sebelum dihapus : ", mobil)
mobil.splice(2, 1)
console.log("✅ Sesudah dihapus : ", mobil)

// Fungsi 2️⃣ : menyisipkan data baru
console.log("❌ Sebelum disisipkan : ", mobil)
mobil.splice(1, 0, "Mazda", "Ferrari")
console.log("✅ Sesudah disisipkan : ", mobil)

// Fungsi 3️⃣ : mengganti data
console.log("❌ Sebelum diganti : ", mobil)
mobil.splice(0, 1, "Tesla")
console.log("✅ Sesudah diganti : ", mobil)

// ⏺️ namaVariableArray.slice("start index", "end index")
let motor = ["Yamaha", "Honda", "Kawasaki", "HasQ", "Suzuki"]
console.log(motor.slice(1, 3))

// ⏺️ namaVariableArray.includes("data") : memeriksa data ada pada array atau tidak
console.log(motor.includes("Yamaha")); // true
console.log(motor.includes("Suzuki")); // false

// ⏺️ namaVariableArray.indexOf("data") : mencari alamat index dari suatu data didalam array
console.log(motor.indexOf("HasQ")); // 3
console.log(motor.indexOf("Suzuki")); // -1

// ⏺️ namaVariableArray.reverse() : membalikkan urutan data array
console.log("Before =>", motor)
motor.reverse()
console.log("After =>", motor)

// ⏺️ namaVariableArray.join("separator") : menggabungkan data array menjadi sebuah data string
let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

console.log(hari.join())
console.log(hari.join(""))
console.log(hari.join(" - "))

// ⏺️ namaVariableArray.concat(dataArray,dataArray,...) : menggabungkan beberapa data array menjadi sebuah array baru
// let kendaraan = mobil.concat(motor, ["Kereta", "Bus", "Pesawat"])
// console.table(kendaraan)

// Spread operator
let kendaraan = [...mobil, ...motor, "Kereta", "Bus", "Pesawat"]
console.table(kendaraan)

// ⏺️ namaVariableArray.sort() : mengurutkan data berdasarkan string secara ascending

let siswa = ["Budi", "Andrew", "Mikel", "Edo", "Daniel"]
let nilai = [39, 3, 26, 14, 2, 8, 26, 17, -15]
console.log(siswa)
siswa.sort()
console.log(siswa)

// Ascending
nilai.sort(function (a, b) {
    return a - b
})
console.log(nilai)

// descending
nilai.sort(function (a, b) {
    return b - a
})
console.log(nilai)


///////////////////////////// ARRAY LOOP //////////////////////////////
// digunakan untuk mengakses data array

let list = "";
for (let idx = 0; idx < siswa.length; idx++) {
    list += `${idx + 1}. ${siswa[idx]}\n`;
}

console.log(list)


/////////////////////////// Array 2 dimensi /////////////////////////
// Data array yang berisi array

let dataBarang = [
    ["Jaket", 20, 150000],
    ["Kaos", 10, 35000],
    ["Sepatu", 5, 55000]
]

console.log(dataBarang[2][0] + " Stoknya = " + dataBarang[2][1] + " Harga " + dataBarang[2][2])
console.log(dataBarang[0].length)

let print = ""
// for (let i = 0; i < dataBarang.length; i++) {
//     print += `${i + 1}. ${dataBarang[i][0]}, Stoknya = ${dataBarang[i][1]}, Rp. ${dataBarang[i][2]}\n`;
// };

// versi 1 
dataBarang.forEach(function (item, idx) {
    print += `${idx + 1}. ${item[0]}, Stoknya = ${item[1]}, Rp. ${item[2]}\n`;
})

// versi 2
// function printList(item,idx){
//     print += `${idx + 1}. ${item[0]}, Stoknya = ${item[1]}, Rp. ${item[2]}\n`;
// }

// dataBarang.forEach(printList)

console.log(print)