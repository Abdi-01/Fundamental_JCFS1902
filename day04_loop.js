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
// let count = 10;
// while (count > 0) {
//     console.log(count)
//     count--
// }

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

// let number = 10;
// let res = "";
// while (number > 0) {
//     // task 1 : menambahkan ke variable res
//     res += `${number} `;
//     // task 2 : decrement number
//     number--
// }

// console.log(res)


/**
 * DO...WHILE LOOP
 *
 * do{
 *      // program yang ingin dijalankan
 * }while(condition)
 *
 * */

// let value = 1;
// do {
//     console.log(value)
//     value++
// } while (value <= 10)


/**
 * FOR LOOP
 * 
 * for(statement_1;statement_2;statement3){
 *      // Program yang ingin dijalankan
 * 
 * }
 * 
 * statement_ 1 : nilai awal yang digunakan untuk menjalankan looping
 * statement_ 2 : condition yang dibuat untuk memeriksa apakah program dijalankan
 * statement_ 3 : berisi proses increment atau decrement untuk memanipulasi nilai statement_1
 *                sehingga nanti mempengaruhi condition pada statement_2
 * 
 * Keuntungannya : kita dapat membatasi jumlah loop sejak awal sesuai kebutuhan
*/

for (let val = 1; val <= 10; val++) {
    if (val == 5) {
        continue
    } else {
        console.log(val)
    }
}


// for (let val = 1; val <= 30; val++) {
//     if (val % 5 == 0 && val % 3 == 0) {
//         console.log("BizzBuzz =>", val)
//     } else if (val % 3 == 0) {
//         console.log("Bizz =>", val)
//     } else if (val % 5 == 0) {
//         console.log("Buzz =>", val)
//     }
// }

let n = 6;
let str = "";
let count = 0;
for (let i = 0; i < n; i++) {
    for (let i = 0; i < n; i++) {
        count++
        if(count<10){
            str += `0${count} `
        }else{
            str += `${count} `
        }
    }
    str += "\n"
}

/**
 * loop 1
 * str = str + "#\n"
 * ==> str = "#\n"
 * loop 2
 * str = str + "#\n"
 * ==> str = "#\n#\n"
 * loop 3
 * str = str + "#\n"
 * ==> str = "#\n#\n#\n"
 * */

console.log(str)


