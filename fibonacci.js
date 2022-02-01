[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]
/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
19th = 18th + 17th
nth = (n-1)th + (n-2)th
tth = (t-1)th + (t-2)th
 */

/* const fibo =[0, 1];
for(let i = 2; i <= 10; i++){
    // nth = (n-1)th + (n-2)th
    // tth = (t-1)th + (t-2)th
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */

/* function fibonacciSeers(num){
    const fibo = [0, 1];
    for(let i = 2; i <=num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
} 
const fiboncci = fibonacciSeers(12);
console.log(fiboncci);
*/


function fibonacciSeers(num){
    const fibo = [0, 1];
    if(typeof num != 'number'){
        return 'paleace give a number';
    }
    if(num < 2){
        return 'pleace enter a positive number gareter then';
    }
    for(let i = 2; i <=num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonccis = fibonacciSeers(1);
console.log(fibonccis);