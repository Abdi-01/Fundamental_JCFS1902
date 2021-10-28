//////////////////////CONDITIONAL STATEMENT/////////////////////////////
/**
 * Membutuhkan Nilai BOOLEAN
 * Comparison Operator dan Logical Operator
 * */

//////////////// IF STATEMENT //////////////////
let name = "Fujitora";
let age = 18;
let email = "fuji@mail.com";
// aturan SIM, usia harus lebih dari 17 tahun.
/**
 * if(condition){ 
 *      // task
 * };
 * */

// if (age >= 18){
//     console.log("Verifikasi usia berhasil ✅")
// }

//////////////// IF...ELSE STATEMENT ////////////////

if (age >= 18) {
    console.log("Verifikasi usia berhasil ✅")
} else {
    console.log("Verifikasi usia gagal ❌")
}

/////////////// IF...ELSE IF...ELSE ////////////////
let nilai = 94;

if (nilai >= 95) {
    console.log("Great Job ✅")
} else if (85 >= nilai <= 95) {
    console.log("Better ✅")
} else if (nilai < 85 && nilai >= 70) {
    console.log("Good ✅")
} else {
    console.log("Not Bad ✅")
}

////////////// SWITCH...CASE /////////////////

let profesi = "Sopir"

switch (profesi) {
    case "Coder":
        console.log("Suka bikin aplikasi");
        break;
    case "Polisi":
        console.log("Suka nilang")
        break;
    case "Dokter":
        console.log("Suka nyuntik")
        break;
    default:
        console.log("Gag tau ngapain")
        break;
}

//////////////
let alasKaki = "Sandal";
let warna = "biru";

switch (false) {
    case (alasKaki == "Sandal" && warna == "biru"):
        console.log("Sandal Biru")
        break;
    case (alasKaki == "Sandal" && warna == "merah"):
        console.log("Sandal merah")
        break;
    default:
        console.log("Gag tau pakek apa")
        break;
}

////////// Ternary Operator //////////////

let keterangan = age >= 18 ? "Usia cukup" : "Usi Tidak Cukup";
console.log(keterangan)