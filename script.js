// Charecters to be used in the password. User will have ability to select which charecters.
var specChar = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
];

var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowLetters = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Here the user will be able to decide length and which charecters he/she would like to use in their password.

function getPasswordChoices() {
    var length = parseInt(prompt(
        "How long would you prefer your password to be?"
    ));

    if (isNaN(length) === true) {
        alert("Password length must be a number");
        return;
    };

    if (length < 8) {
        alert("Password length needs to be atleast 8 charecters");
        return;
    };

    if (length > 128) {
        alert("Password length needs to be less than 129 charecters");
        return;
    };

    var hasSpecChar = confirm(
        "Click ok to use numbers."
    );

    var hasCapLetters = confirm(
        "Click ok to use lowercase letters."
    );

    var hasNumChar = confirm(
        "Click ok to use uppercase letters."
    );

    var hasLowLetters = confirm(
        "Click ok to use special charecters."
    );

    //This is where the user will be kicked for not properly choosing.

    if (
        hasSpecChar === false &&
        hasCapLetters === false &&
        hasNumChar === false &&
        hasLowLetters === false

    ) {
        alert("You have to select atleast one charecter set.")
        return;
    }

    //This is for storing the users choices,

    var passwordChoices = {
        length: length,
        hasSpecChar: hasSpecChar,
        hasCapLetters: hasCapLetters,
        hasNumChar: hasNumChar,
        hasLowLetters: hasLowLetters
    };

    return passwordChoices;

};

//This is the function to gen a random pw. 

function genRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
//Password will be generated using the users input.

function generatePassword() {
    var options = getPasswordChoices();

    var result = [];

    var possibleChoices = [];

    var setChoices = [];

    if (options.hasSpecChar){
        possibleChoices = possibleChoices.concat(specChar);
        setChoices.push(genRandom(specChar));
    }

    if (options.hasCapLetters) {
        possibleChoices = possibleChoices.concat(capLetters);
        setChoices.push(genRandom(capLetters));
    }

    if (options.hasNumChar) {
        possibleChoices = possibleChoices.concat(numChar);
        setChoices.push(genRandom(numChar));
    }

    if (options.hasCapLetters) {
        possibleChoices = possibleChoices.concat(lowLetters)
        setChoices.push(genRandom(lowLetters));
    }

    for(var i = 0; i < options.length; i++) {
        var possibleChoices = genRandom(possibleChoices);

        result.push(possibleChoices);
    }

    for(var i = 0; i < setChoices.length; i++) {
        result[i] = setChoices[i];
    }

    return result.join("");
 
}
//copy and gen button
var copyBtn = document.querySelector("#copy");
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
  }
  
function copyToClipboard() {
    var passwordText = document.querySelector("#password");
  
    passwordText.select();
    document.execCommand("copy");
  
    alert(
      "Your password " + passwordText.value + " was copied to your clipboard."
    );
  }
  

//adding event listener for gen button.
generateBtn.addEventListener("click", writePassword);

copyBtn.addEventListener("click", copyToClipboard);

    


