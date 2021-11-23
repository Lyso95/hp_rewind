//Get the string from the page
//controller
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;  
    let revString = reverseString(userString);
    displayString(revString);
}
//Reverse the string
//model
function reverseString(userString) {
    let revString = [];
    
    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}

//Display the reversed string to the user
//view
function displayString(revString){
    //write to the page
    document.getElementById("msg").innerHTML = `Dein Text rückwärts lautet: ${revString}`; 
    //turn on alert box
    document.getElementById("alert").classList.remove("invisible");
}