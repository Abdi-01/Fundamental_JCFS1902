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