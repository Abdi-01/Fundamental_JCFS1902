/////////////////////// OBJECT ////////////////////////////////
// Array => panampung data yang berdasarkan alamat index
// Object => panampung data yang berdasarkan alamat nama atau label

/**
 * let variableArray = [data,data,data]
 *
 * let variableObject = {
 *      nama_alamat : data,
 *      nama_properties : "string",
 *      nama_properties : number,
 *      nama_properties : boolean,
 *      nama_properties : [array],
 *      nama_method : function(params){block code}
 * }
 *
 * label == properties
 * data object yang berisi function disebut METHOD
 */

// Syntax 1 : Object Literal
let siswa = {
    fullName: "Beni Chandra",
    class: "Science",
    age: 17,
    value: [
        {
            mapel: "Math",
            grade: 85
        },
        {
            mapel: "Biology",
            grade: 90
        }
    ]
};

siswa.status = "Active";
console.log(siswa);
console.log(siswa.fullName);
console.log(siswa.class);
console.log(siswa["age"]);
console.log(siswa.value[0].mapel);


// Syntax 2 : Keyword "new Object"
let user = new Object();

user.username = "Kenzo";
user.email = "kenzo@mail.com";

// Syntax 3 : Syntax Class Object ==> untuk menjadi bluePrint atau cetakan dari suatu data object

// Class Utama
class Manusia {
    constructor(_name, _gender, _usia) {
        this.name = _name;
        this.gender = _gender;
        this.usia = _usia;
    }
}

let daftarPenduduk = [];

let paijo = new Manusia("Paijo", "L", 23)

console.log(paijo)

daftarPenduduk.push(new Manusia("Paijo", "Laki-laki", 20))
console.log(daftarPenduduk)

// INHERITANCE ==> pewarisan data dari class utama agar dapat digunakan pada class turunan
// Class turunan
class Pekerjaan extends Manusia {
    constructor(_name, _gender, _usia, _profesi, _gaji) {
        super(_name, _gender, _usia)
        this.profesi = _profesi
        this.gaji = _gaji
    }
}

let pekerja = new Pekerjaan("Tanjiro", "L", 17, "Samurai", 6500000)
console.log(pekerja)


//////////////////////////////////////// SYNTAX OBJECT //////////////////////////////////////
// 1. Penulisan LABEL/PROPERTY
// Cara 1
let namaBarang = "Air Jordan"
let size = 43;

let produk = {
    nama: namaBarang,
    ukuran: size
}

// Cara 2
// let nama = "Air Jordan X"
// let ukuran = 45;

// let produkB = {
//     nama,
//     ukuran
// }

// Looping Object
// for (let property in produkB) {
//     console.log(property) // label/poperty dari object yang dilooping
//     console.log(produkB[property]) // value dari object berdasrkan property
// }

// DESTRUCTURE : membuat variable berdasarkan property pada object
// DESTRUCTURE : mengakses secara langsung property dan value pada object
// OBJECT
let { nama, ukuran } = produk;
console.log(nama)
console.log(ukuran)

// DESTRUCTURE : membuat variable untuk menampung setiap value pada array sesuai urutan indexnya
// ARRAY
let siswaA = ["edo", "jr", 12, "Science"];
let [namaDepan, namaBelakang, usia, jurusan] = siswaA

console.log(siswaA[0], siswaA[1]);
console.log(namaDepan, namaBelakang);
