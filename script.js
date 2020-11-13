// Generate password 
var generatePassword = document.querySelector("#generate");
var titleEl = document.querySelector("#title-password");
var passwordEl = document.querySelector("#password");

generatePassword.addEventListener("click", function() {
	var passLength = parseInt(prompt("Input password length"));
	var hasUpper = confirm("Do you want uppercase?");
	var hasLower = confirm("Do you want lowercase?");
	var hasNumber = confirm("Do you want numbers?");
	var hasSpecial = confirm("Do you want special characters?");

	console.log(passLength, hasUpper, hasLower, hasSpecial);

	if (!hasUpper && !hasUpper && !hasSpecial) {
			console.log('Select at least 1');
			return;
	}

	var upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
	var numberCharSet = "0123456789";
	var specialCharSet = "!@#$%^&*()/?<>";

	var password = "";
	var charSet = "";

		if (hasUpper === true) {
				charSet += upperCharSet;
		}
		if (hasLower === true) {
				charSet += lowerCharSet;
		}
		if (hasNumber === true) {
				charSet += numberCharSet;
		}
		if (hasSpecial === true) {
				charSet += specialCharSet;
		}
		
		for (var i = 0; i < passLength; i++) {
				var randomIndex = Math.floor(Math.random() * charSet.length);
				password += charSet[randomIndex];
		}

	console.log(password);
	passwordEl.textContent = password;
});