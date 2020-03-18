// Assignment Code
var initialInput = prompt("How many characters would you like in the password? (Must be 8-126 characters)")
// Parseing the data in the variable so its easier to plan before it goes down.
var initialInputLength = parseInt(initialInput)
var characters = "";
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Z","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+"]

if (initialInputLength.length > 126 && initialInputLength.length < 8) {
  alert("Password is either too short or too long!")
}

var confirmLowerCase = confirm("Would you like lowercase letters?")
var confirmUpperCase = confirm("Would you like uppercase letters?")
var confirmNumbers = confirm("Would you like numbers?")
var confirmSpecial = confirm("Would you like special characters like $,%,&, etc.?")



function generatePassword() {

  if (confirmLowerCase) {
      characters = characters + lowerCase;
      console.log(totalPassword)
  }
  if (confirmUpperCase) {
      characters = characters + upperCase;
      console.log(totalPassword);
  } 
  if (confirmNumbers) {
      characters = characters + numbers;
     console.log(totalPassword);
  }
  if (confirmSpecial) {
      characters = characters + specialChar;
    console.log(totalPassword);
  }

  for (let index = 0; index < initialInputLength; index++) {
    password = password + characters.charAt(Math.floor(Math.random() * characters.length));
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
