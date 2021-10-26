// Day 02
// Intro Variable
/**
 * Keyword Variable :
 * 1. var : Redeclare, Reassign
 * 2. let : Non-Redclare, Reassign
 * 3. const : Non-Redeclare, Non-Reassign
 * 
 * */

// var
var name = "Abdi"; // deklarasi variable
var name = "Sikamaru"; // redeclare ✅
name = "Edo"; // reassign ✅

console.log(name);

// let
let age = 25;
// let age = 30; // redeclare ❌
age = 30; // reassign ✅

console.log(age);

// const
const PI = 3.14;
// const PI = 14; // redeclare ❌
// PI = 22 / 7; // reassign ❌
console.log(PI)

///////////////////////////Aturan Penulisan Variable///////////////////////////
// 1. harus diawali dengan huruf
// let 1nama;❌
let nama; // ✅
let alamat = "Surabaya";//✅

// 2. boleh diawali dengan symbol ( _ atau $)
let _telp = "0892929384";
let $fax = "02134747";

// 3. nama variable yang terdiri dari 2 suku kata atau lebih
let hargaBarang = 300000; // camelCase ✅
let nama_saya = "Budi"; // snake_case ✅
let namasaya = "Edo";// ✅
// let harga prduk = 120000; ❌
