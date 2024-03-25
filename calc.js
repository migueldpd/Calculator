let currentValue = ""; //so any time a user inserts a number , the number adds instead of ghosting
let impressNumber = document.getElementById("result"); //this is the value inside the input type text
let customAlert = document.getElementById("customAlert");// customAlertBox so we can show it and deshow it
let calculator = document.getElementById("calculator-lyt"); // All the div containing the calculator


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
    if (impressNumber.value === "" && (value === "*" || value === "-" || value === "+" || value === "/")) {
        //alert("You need to add a number first");
        customAlert.style.display = "block";
        calculator.style.opacity = 0.3;
        calculator.classList.add("calculator-disabled"); // prevents user from making any op while alert shows
    }else if(impressNumber !== ""){
        currentValue += value;
        impressNumber.value = currentValue;
    }
}

function calculation(){ //function that takes the expression inside input and calculates it
    if (impressNumber.value === "") { //if user press = before any numbers has been inserted in the input
        alert("Nothing to calculate");
    } else {
        impressNumber.value = eval(impressNumber.value);
        console.log(eval(impressNumber.value));
        currentValue = "";      
    }
}

function dismissAlert(){ //function that pops when a error shows.
    customAlert.style.display = "none";
    calculator.style.opacity = 1;
    calculator.classList.remove("calculator-disabled"); //makes calculator available after closing alertbox
}