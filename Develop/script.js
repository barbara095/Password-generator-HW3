// Generate password 
var generatePassword = document.querySelector("generate");

// Generate random number
function getRandomNumber(randNumber) {
    var finalNumber = Math.floor(Math.random() * randNumber);
    return finalNumber;
}

// Generate length of password
var setLength = prompt("How long do you want your password to be?");

if (setLength >= 8 && setLength <= 128) {
    console.log(setLength);
} 

else {
    alert("Your password must be between 8 and 128 characters long. Please try again.");
    setLength.value = 8;
    console.log(setLength.value);
}

// Create input variables for passwords
    var letterChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialChar = ['!','@', '&', '$', '%', '<', '^', '<', '~', '#', '}', ',', '|', '{', '`', '_', '”', '(', ')', '*', '+'];


    // Confirm special characters
    var confirmSpecial = confirm("Would you like to include special characters in your password?");
        console.log(confirmSpecial);

    // Prompt number of special characters
        if (confirmSpecial === true) {
            var countSpecial = prompt("How many special characters would you like to include?");
            console.log(countSpecial); 
                
            // Specify random number of characters
            var randomSpecial = [specialChar[getRandomNumber(countSpecial.value)]];
            console.log(randomSpecial);

        }
        // Prompt for lowercase characters
        var confirmLower = confirm("Would you like to include lower case letters in your password?");
            console.log(confirmLower);
            if (confirmLower === true) 

        // Prompt for uppercase characters
        var upperChar = confirm("Would you like to include upper case letters in your password?");
            console.log(upperChar);


//  Validate input so that at least one character type is selected

// Once all prompts are answered, generate password 

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generatePassword.addEventListener("click", writePassword);
