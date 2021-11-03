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
}

console.log(siswa.fullName)
console.log(siswa.class)
console.log(siswa["age"])
console.log(siswa.value[0].mapel)
