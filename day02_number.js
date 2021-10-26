///////////////////////////// DATA TYPE //////////////////////////////////
// Number : angka

let jarak = 1500; // INT atau integer
let beratBadan = 90.435; // FLOAT atau desimal
let saldoATM = 15e6; // 15000000
console.log(jarak, beratBadan, saldoATM.toLocaleString())

// Arithmetic operator : +, -, *, /, %
let hasil = jarak + 250
console.log(hasil)
console.log(1 + 2 + "2" + 2);

// Increment
jarak++;
// jarak++;
jarak += 5; // jarak = jarak + 5
console.log(jarak)

// Decrement
jarak--;
jarak -= 5;
console.log(jarak)

////////////////////MATH OBJECT///////////////////
const PI = Math.PI;
console.log(PI)

console.log(Math.abs(-35.5)); // nilai absolute positif
console.log(Math.abs(23.4) * -1);// -23.4
console.log(-1 * Math.abs(23.4));// -23.4
console.log(-Math.abs(-14)); // -14

console.log(Math.pow(2, 2)); // pangkat
console.log(Math.sqrt(4)); // akar pangkat 2
console.log(Math.cbrt(8)); // akar pangkat 3
console.log(Math.pow(16, 1 / 4)); // akar pangkat 4

// Pembulatan
console.log(Math.round(2.5)); // pembulatan terdekats
console.log(Math.ceil(10.1));// pembulatan keatas
console.log(Math.floor(10.9));// pembulatan kebawah

console.log(Math.min(3, 4, 0.2, 3, 5, 10));
console.log(Math.max(3, 4, 0.2, 3, 5, 10));

console.log(Math.random() * 10)


// parsing data string to number

let angka = "125.627263"

console.log(angka)
console.log(parseInt(angka))
console.log(parseFloat(angka))

// parsing data number to string 
let angka2 = 2504.35;
console.log(angka2.toString());
console.log(angka2.toLocaleString())

// memeriksa sebuah angka
console.log(isNaN(2));//false
console.log(isNaN("ABCDEFG"));//true
console.log(isNaN("12"));//false