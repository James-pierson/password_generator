// Global Variables
var characters = "";
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Z", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]


function generatePassword() {
  var initialInput = prompt("How many characters would you like in the password? (Must be 8-126 characters)")
  var confirmLowerCase = confirm("Would you like lowercase letters?")
  var confirmUpperCase = confirm("Would you like uppercase letters?")
  var confirmNumbers = confirm("Would you like numbers?")
  var confirmSpecial = confirm("Would you like special characters like $,%,&, etc.?")


  if (initialInput < 8 || initialInput > 126) {
     return alert('You need to make sure that it has a minimum of 8 characters and a maximum of 126 characters')
    
  } else  {
    if (confirmLowerCase) {
      characters = characters + lowerCase;
    }
    if (confirmUpperCase) {
      characters = characters + upperCase;
    }
    if (confirmNumbers) {
      characters = characters + numbers;
    }
    if (confirmSpecial) {
      characters = characters + specialChar;
    }
    for (let index = 0; index < initialInput; index++) {
       return password = password + characters.charAt(Math.floor(Math.random() * initialInput));
    }
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
