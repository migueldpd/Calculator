let currentValue = " "; //so any time a user inserts a number , the number adds instead of ghosting
let impressNumber = document.getElementById("result"); //this is the value inside the input type text


function resetCalculator(){ //makes it so when this button is pressed it clears the input
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