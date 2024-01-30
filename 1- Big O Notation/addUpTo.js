// *** first think
// const addUpTo = (n) => {
//     let total = 0;
//     for(let i = 1 ; i <= n ; i++){
//         total += i;
//     }
//     return total;
// }

// *** same function using mathematical formula

const addUpTo = n => {
    return (n * (n + 1)) / 2;
};
const start = Date.now();
console.log(addUpTo(1000000000));
console.log('time take', Date.now() - start, 'ms');
