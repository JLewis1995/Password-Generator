// Assigning variables
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghigjklmopqrstuvwxyz";
var numbers = "0123456789";
var symbols = " !#$%()*+,-./:;<=>?'@[&]^_`{|}~";
var allowed = "";

// Write password function to recieve inputs, operate generatePassword function & display output
function writePassword() {

  // Assigning variables for use within function
  var password = "";
  var base = "";
  var passwordText = document.querySelector("#password");

  // Recieve length input from user via prompt
  var userInput = prompt("How long would you like the password to be? (Must be between 8 and 128 characters)");
  var pwLength = parseInt(userInput);

  // Rejections if crieteria not within bounds
  if (pwLength <= 7 || pwLength >=129) return alert("Must be a number between 8 and 128");

  // Recieve further inputs/criteria for password
  var incLower = confirm("Do you want lowercase letters in your password?");
  var incUpper = confirm("Do you want uppercase letters in your password?");
  var incNumbers = confirm("Do you want numbers in your password?");
  var incSymbols = confirm("Do you want symbols in your password?");

  // Function to generate the password
  function generatePassword(length, characters) {

    // Creating base password to include one of each peramiter set by user(base) & Creating list of allowed characters based on paramiters set by user (char)
    incLower === true ? ((base += lower.charAt(Math.floor(Math.random() * lower.length))), (characters += lower)) : "";
    incUpper === true ? (base += upper.charAt(Math.floor(Math.random() * upper.length)), (characters += upper)) : "";
    incNumbers === true ? (base += numbers.charAt(Math.floor(Math.random() * numbers.length)), (characters += numbers)) : "";
    incSymbols === true ? (base += symbols.charAt(Math.floor(Math.random() * symbols.length)), (characters += symbols)) : "";

    // Creating for loop to randomize password. If i is less than the requested length (less base length to ensure sufficient length) continue the loop, increasing by one each time
    // Picks number between 0 and length of allowed characters and adds it to password until it is of sufficient length including base
    for (let i = base.length; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  }

  // After prompts/confirmations & rejections, run generatePassword function to generate the password based on inputs
  generatePassword(pwLength, allowed);

  // Outputs to page, console and alert
  passwordText.value = (password + base);
  console.log(password + base);
  alert(password + base);
}

// Add event listener to generate button - activates writePassword function on click of button
generateBtn.addEventListener("click", writePassword);