let currentValue = " "; //so any time a user inserts a number , the number adds instead of ghosting
let impressNumber = document.getElementById("result");


function resetCalculator(){
    impressNumber.value= '';
    currentValue= ' ';
}

function onButtonClickNumber(value){
    if(value=== "+"){
        console.log("YOU PRESSED +");
    }
    currentValue += value;
    impressNumber.value = currentValue;
}

function calculation(){
    impressNumber.value = eval(impressNumber.value);
    console.log(eval(impressNumber.value));
    currentValue = " ";
}