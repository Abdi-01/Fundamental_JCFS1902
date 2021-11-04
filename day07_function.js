////////////////////// FUNCTION ////////////////////////
/**
 * 1. Sekumpulan program yang ditujukan untuk menyelesaikan proses khusus atau tertentu
 * 2. Untuk memakai function, function harus dibuat terlebih dahulu
 * 3. Function bersifat reusability, atau dapat digunakan berulang-ulang
 * 4. Function juga bersifat modular
 * 5. Built-in function bawaan javascript
 * 6. User-defined function yg kita buat sendiri
 * 	    a. Menggunakan keyword function
        b. Nama bebas
        c. Parameter/argumen
            i. Disimpan didalam()
            ii. Boleh ada atau tidak
            iii. Jika > 1, harus dikasih pemisah ","
        d. Body function dibungkus { }
        e. Boleh mengembalikan nilai / return  boleh tidak
    7. Declarative function --> function namaFunc(param1,param2,...){console.log(param1+param2) }
    8. Function expression --> var namaFunc = function(param1,param2){console.log(param1+param2) }
    8. Arrow function --> var namaFunc = (param1,param2) => {console.log(param1+param2) }
 * */

// Declarative Function
// Membuat function
function penjumlahan() {
    let angkaA = 10;
    let angkaB = 5;
    let hasil = angkaA + angkaB
    return hasil; // return untuk mengeluarkan sebuah nilai dari function 
}

let jumlah = penjumlahan()

// console.log("output penjumlahan", jumlah + 10)

// Parameter
// let numA = 20; ❌
// let numB = 5; ❌
// Fungsi pengurangan memiliki 2 parameter yaitu param1 dan param2
function pengurangan(param1, param2) {
    return param1 - param2
}

let angka1 = 12;
let angka2 = 14;
// Argument = angka1 dan angka2
// console.log(pengurangan(angka1, angka2))

// // NOTE : Menggunakan fungsi ⚠️⚠️⚠️⚠️
// penjumlahan; // ini akan hanya memanggil, tidak menjalankan function
// penjumlahan(10, 5); // akan memanggil dan menjalankan function
// console.log(penjumlahan(10, 5) * 10); // akan memanggil, menjalankan dan menampilkan hasil dari function
// pengurangan(50, 27);

// // Function Expression
// /**
//  * keywordVariable namaVariable = keywordFunction(param){
//  *      // function code
//  * }
//  *
// */

// // Arrow Expression
// /**
//  * keywordVariable namaVariable = (param) => {
//  *      // function code
//  * }
//  *
// */

// Parameter Default Value
function perkalian(cb, param2) {
    return cb() * param2
}

// console.log(perkalian(null, 20))


// Callback function : sebuah fungsi yang membutuhkan fungsi lain untuk dimasukkan kedalam parameter/argument
// console.log(perkalian(() => 2 + 5, 2))//14
// console.log(perkalian(function () { return 2 + 10 }, 2))//24

///////////////////////////////Array Function Advance///////////////////////////////////////
// // ⏺️ namaVariableArray.forEach() : melooping sebuah data array dan tidak bisa menghasilkan array baru atau tidak menghasilkan return.

let dataBarang = [
    ["Jaket", 20, 150000],
    ["Kaos", 10, 35000],
    ["Sepatu", 5, 55000]
]

// console.log(dataBarang[2][0] + " Stoknya = " + dataBarang[2][1] + " Harga " + dataBarang[2][2])
// console.log(dataBarang[0].length)

let print = ""
// Kalau menggunakan looping
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

// console.log(print)

// // ⏺️ namaVariableArray.map() : mengolah data array untuk menjadi data array baru. 

function mapCallBack(item, idx) {
    return item - 1
}
let nmbr = [1, 2, 3, 45, 6, 7, 21]
let kali2 = nmbr.map(mapCallBack);

console.log("dari array.map", kali2) //[2,4,6,90,12,14,42]

// buat fungsi cloning map
function mapCloning(arr, callbackFn) {
    // penampung data array yang baru
    let newArr = [];
    // mengakses setiap data array
    for (let i = 0; i < arr.length; i++) {
        // memproses setiap data array didalam callbackFunction
        let results = callbackFn(arr[i], i);
        // memasukkan data array kedalam newArray
        newArr.push(results);
    }
    // mengeluarkan data array yang baru
    return newArr
}

let newNmbr = mapCloning(nmbr, mapCallBack)


console.log("dari mapCloning ==>", newNmbr) //[2,4,6,90,12,14,42]


function cetak(item, idx) {
    return `${idx + 1}. ${item[0]}, Stoknya = ${item[1]}, Rp. ${item[2]}\n`;
}

let listProduk = dataBarang.map(cetak)

// console.log(nmbr)
// console.log(kali2)
// console.log(listProduk)
// console.log(listProduk.join(""))

// // ⏺️ namaVariableArray.filter() : mengolah data array untuk menjadi data array baru berdasarkan condition.

let uang = [1000, 2000, 4000, 10000, 25000]


function filterCloning(arr, callbackFn) {
    // penampung data array yang baru
    let newArr = [];
    // mengakses setiap data array
    for (let i = 0; i < arr.length; i++) {
        // memproses setiap data array didalam callbackFunction
        let results = callbackFn(arr[i], i);
        // jika output callback true
        if (results) {
            // maka data array akan dimasukkan kedalam newArray
            newArr.push(arr[i]);
        }
    }
    // mengeluarkan data array yang baru
    return newArr
}
let filterUang = uang.filter(function (item, index) {
    return item < 10000
})

console.log("arr.filter",filterUang)

console.log(filterCloning(uang, function (item, index) {
    return item < 10000
}))
// console.log(uang)