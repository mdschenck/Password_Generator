// Assignment Code
var generateBtn = document.querySelector("#generate");

var possibleLowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var possibleUppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var possibleNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var possibleSpecials = ["!", "@", "#", "$", "%", "^", "&", "*"];

let generatedPassword = "";

//if (parseInt(passwordLength))
// Run password generation, at each step check if generatedPassword === passwordLength to return finished password

function generatePassword() {
  let passwordLength = prompt(
    "Password Length: How Many Characters Would You Like?"
  );
  // if (passwordLength < 7 && passwordLength > 129) {
  //   passwordLength = prompt(
  //     "Password must be between 8 and 128 characters. Please try again!"
  //   );
  // }
  let lowercase = confirm("Do You Want To Include Lowercase?");
  let uppercase = confirm("Do You Want To Include Uppercase Characters?");
  let numbers = confirm("Do You Want To Include Numbers?");
  let special = confirm("Do You Want To Include Special Characters?");
  for (i = 0; i < 512; i++) {
    if (lowercase) {
      generatedPassword +=
        possibleLowercase[Math.floor(Math.random() * passwordLength)];
      // if (generatedPassword.length === passwordLength) {
      //   return generatedPassword;
      // }
    }

    if (uppercase) {
      generatedPassword +=
        possibleUppercase[Math.floor(Math.random() * passwordLength)];
      // if (generatedPassword.length === passwordLength) {
      //   return generatedPassword;
      // }
    }

    if (numbers) {
      generatedPassword +=
        possibleNumeric[Math.floor(Math.random() * passwordLength)];
      // if (generatedPassword.length === passwordLength) {
      //   return generatedPassword;
      // }
    }

    if (special) {
      generatedPassword +=
        possibleSpecials[Math.floor(Math.random() * passwordLength)];
      // if (generatedPassword.length === passwordLength) {
      //   return generatedPassword;
      // }
    }
    console.log(generatedPassword);
  }
  return generatedPassword.slice(0, passwordLength);
  // function checkPasswordLength(generatedPassword, passwordLength) {
  // if (generatedPassword.length === passwordLength) {
  //   return generatedPassword;
  //}
}

console.log(generatedPassword);

//if (parseInt(passwordLength))

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
