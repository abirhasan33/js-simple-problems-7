function largestElement(numbers){
    let largests = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const elemant = numbers[i];
        if(elemant >  largests){
            largests = elemant;
        }
    }
    return largests;
}

let age = [12, 14, 8, 16, 20, 10, 11];
let oldest1 = largestElement(age);
let oldest2 = largestElement([-12, -8, -16, -20]);
console.log(oldest1, oldest2);


function largestIsElement(number){
    let largest = number[0];
    for(let i = 0; i < number.length; i++){
        const elemant = number[i];
        if(elemant < largest){
            largest = elemant;
        }
    }
    return largest;
}

let lowNumber1 = largestIsElement([50, 49, 60, 70, 45, 30, 80]);
let lowNumber2 = largestIsElement([-25, -31, -21, -15]);
console.log(lowNumber1, lowNumber2);


let array = [20, 21, 30, 44, 55, 60];
let number = 0;
for(let i = 0; i < array.length; i++){
    if(array[0] > number){
        number = array[0]
    }
}
console.log(number);




