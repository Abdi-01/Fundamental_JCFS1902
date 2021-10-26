///////////////////////////// DATA TYPE //////////////////////////////////
// Boolean : nilai benar (true) atau salah (false)

let benar = true;
let salah = false;

// Tipe data Truthly dan Falsy

// Truthly ✅
console.log(Boolean(2)); //true
console.log(Boolean("ABCDE")); //true
console.log(Boolean(true)); //true
console.log(Boolean(-2)); //true
console.log(Boolean("false")); //true
console.log(Boolean(" "));

// Falsy
console.log(Boolean(false)); //false
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false

// Comparison Operator : >, <, >=, <= , ==, ===
let angkaA = 23;
let angkaB = 15;
console.log(angkaA > angkaB); //true
console.log(angkaA < angkaB); //false
console.log(angkaB < angkaA); //true
console.log(angkaB <= 20); //true
console.log(angkaA >= 20); //true

console.log(angkaB == 15);// true
console.log(angkaB == "15");// true =>>> == :selama nilainya sama maka dianggap TRUE, walaupun tipeya berbeda
console.log(angkaB === "15");// false =>>> === :nilai dan tipe datanya harus sama maka dianggap TRUE
console.log(false == 0);//true

// Logical Operator

// AND : akan menghaislkan TRUE jika kedua perbandingan TRUE
console.log(angkaA > angkaB && angkaB < angkaA); // TRUE && TRUE ==> TRUE
console.log(angkaA > angkaB && angkaB > angkaA); // TRUE && FALSE ==> FALSE

// OR : selama ada yang TRUE maka hasilnya TRUE
console.log(angkaA > angkaB || angkaB > angkaA); // TRUE && FALSE ==> TRUE

// NOT : membalik logika
console.log(!Boolean(5));// TRUE =>> FALSE

