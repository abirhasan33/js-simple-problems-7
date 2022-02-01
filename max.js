const businush = 550;
const minister = 450;
const army = 450;
// if(businush > minister){
//     console.log("buisndsh mrn pola payar bedhi")
// }
// else{
//     console.log('misister er pola is big payar')
// }

// compare 
/* if(businush > minister && businush > army){
    console.log("Businush is big")
}
else if(minister > businush && minister > army){
    console.log('Minister is brig');
}
else if(army > businush && army > minister){
    console.log("Aramy is big");
}
else{
    console.log('Sobai is soman');
} */

let max = Math.max(businush, minister, army);
// console.log(max);

/* function findlarges(firsi, second){
    if(firsi > second){
        return firsi;
    }
    else{
        return second;
    }
}
let allFindlarges = findlarges(205, 350);
console.log('largest -', allFindlarges); */

function findlages(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }
    else if(num2 < num1 && num2 < num3){
        return num2;
    }
    else{
        return num3;
    }
}
let allFindlages = findlages(100, 50, 300);
console.log('low fejal-', allFindlages);

