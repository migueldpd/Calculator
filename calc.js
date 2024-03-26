let currentValue = ""; //so any time a user inserts a number , the number adds instead of ghosting
let customAlert = document.getElementById("customAlert");// customAlertBox so we can show it and deshow it
let customWarning = document.getElementById("customAlertCalc");
let calculator = document.getElementById("calculator-lyt"); // All the div containing the calculator
let impressNumber = document.getElementById("result"); //this is the value inside the input type text
let arrayLastDigit = []; //array from the text inside input. 


function resetCalculator(){ //resets and cleans the input
    if (impressNumber.value === "") {
        alert("Nothing to delete / erase");
    } else {
        impressNumber.value= '';
        currentValue= '';
        console.log("you deleted your input");     
    }
}

function onButtonClickNumber(value){ //when a user presses any button, it gets inserted in the input
    function isOperator(char){
        return char === "+" ||  char === "-" ||  char === "*" || char === "/" || char === ".";
    }

    if (impressNumber.value === "" && isOperator(value)) {
        customAlert.style.display = "block";
        calculator.style.opacity = 0.3;
        calculator.classList.add("calculator-disabled"); // prevents user from making any op while alert shows
    }else if(impressNumber !== ""){
        let lastChar = arrayLastDigit[arrayLastDigit.length - 1];

        if(isOperator(lastChar) && isOperator(value)){//prevents user from inserting to operator in a row
            console.log("You cant add more then 1 operator at a time")
            return;
        }
            arrayLastDigit.push(value);
            currentValue += value;
            impressNumber.value = currentValue;
            console.log("ARRAY : " + arrayLastDigit);
            return;
        }
}


function calculation(){ //function that takes the expression inside input and calculates it
    if (impressNumber.value === "") { //if user press = before any numbers has been inserted in the input~
        customWarning.style.display = "block";
        calculator.style.opacity = 0.3;
        calculator.classList.add("calculator-disabled");
    } else {
        impressNumber.value = eval(impressNumber.value);
        console.log(eval(impressNumber.value));
        currentValue = "";      
    }
}

function dismissAlert(){ //function that pops when a error shows.
    customAlert.style.display = "none";
    customWarning.style.display = "none";
    calculator.style.opacity = 1;
    calculator.classList.remove("calculator-disabled"); //makes calculator available after closing alertbox
}