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

// The generatePassword function generates password based on user input. Runs through all possible permutations of uppercase & lowercase numbers, and then truncates the generated password to the desired password length.

function generatePassword() {
  let passwordLength = prompt(
    "Password Length: How Many Characters Would You Like?"
  );
  let lowercase = confirm("Do You Want To Include Lowercase?");
  let uppercase = confirm("Do You Want To Include Uppercase Characters?");
  let numbers = confirm("Do You Want To Include Numbers?");
  let special = confirm("Do You Want To Include Special Characters?");

  if (passwordLength > 7 && passwordLength < 129) {
    if (lowercase || uppercase || numbers || special) {
      for (i = 0; i < 512; i++) {
        if (lowercase) {
          generatedPassword +=
            possibleLowercase[Math.floor(Math.random() * passwordLength)];
        }

        if (uppercase) {
          generatedPassword +=
            possibleUppercase[Math.floor(Math.random() * passwordLength)];
        }

        if (numbers) {
          generatedPassword +=
            possibleNumeric[Math.floor(Math.random() * passwordLength)];
        }

        if (special) {
          generatedPassword +=
            possibleSpecials[Math.floor(Math.random() * passwordLength)];
        }
        console.log(generatedPassword);
      }

      //Slice truncates the generated password from all possible random selections to the desired output.
      return generatedPassword.slice(0, passwordLength);
    } else {
      alert("Must select at least one type of character. Please try again!");
    }
  } else {
    alert(
      "Password length must be between 8 and 128 characters. Please try again!"
    );
  }
}

console.log(generatedPassword);

//if (parseInt(passwordLength))

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button -- Runs writePassword function when button clicked - which includes the generatePassword function.
generateBtn.addEventListener("click", writePassword);
