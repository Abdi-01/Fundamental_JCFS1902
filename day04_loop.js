///////////////// LOOP STATEMENT ///////////////////

/***
 * A. WHILE LOOP
 *
 * while(condition){
 *  // Program yang ingin dijalankan
 * 
 * } 
 */
// dengan loop
let count = 10;
while (count > 0) {
    console.log(count)
    count--
}

// tanpa loop
// console.log(10)
// console.log(9)
// console.log(8)
// console.log(7)
// console.log(6)
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

let number = 10;
let res = "";
while (number > 0) {
    // task 1 : menambahkan ke variable res
    res += `${number} `;
    // task 2 : decrement number
    number--
}

console.log(res)