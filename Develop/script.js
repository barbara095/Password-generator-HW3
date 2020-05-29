// Generate password 
var generatePassword = document.querySelector("generate");

// Generate random number
function getRandomNumber(randNumber) {
    var finalNumber = Math.floor(Math.random() * randNumber);
    return finalNumber;
}

// Generate length of password
var length = function() {
    return prompt("How long do you want your password to be?"); 
};
   

// Create input variables for passwords
var letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!','@', '&', '$', '%', '<', '^', '<', '~', '#', '}', ',', '|', '{', '`', '_', '”', '(', ')', '*', '+'];

// Prompt length of password
var setLength = prompt("How long do you want your password to be?");

if (setLength < 8 || setLength > 128) {
    alert("Your password must be between 8 and 128 characters long. Please try again.");
} else {
    console.log(setLength);
}

// Prompt for special characters
var specialChar = confirm("Would you like to include special characters in your password?");

// Prompt for lowercase characters
var lowerChar = confirm("Would you like to include lower case letters in your password?")

// Prompt for uppercase characters
var upperChar = confirm("Would you like to include upper case letters in your password?")

// Generate password 

function generateChar() {

    //Retrieve value of setLength
    let length = document.prompt(setLength).value;
    

}

document.getElementById("password").innerHTML = setLength;


//  Validate input so that at least one character type is selected

// Once all prompts are answered, generate password through an alert OR written on page
