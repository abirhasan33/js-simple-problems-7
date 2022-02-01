let first = 10;
let second = 20;
console.log(first, second);
let temp = first;
first = second;
second = temp;
console.log(first, second);

// destucturing 
[second, first] = [first, second];
console.log(second, first);