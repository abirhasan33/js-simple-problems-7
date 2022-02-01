// const numbers = [45, 23, 43, 55, 97, 67, 70];
// let sum = 0;
// for( let i = 0; i < numbers.length; i++){
//     const elemant = numbers[i];
//     sum = sum + elemant;
//     console.log(sum);
// }

function arrayTotal(numbers){
    let sum = 0;
    for(let  i = 0; i < numbers.length; i++){
        const number = numbers[i];
        sum = sum + number;
    }
    return sum;

}

let elemant = arrayTotal([10, 20, 10, 30, 40, 50, 10]);
console.log('Aryya totol =', elemant);