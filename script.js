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

//Here the user will be able to decide which charecters he/she would like to use in their password.

function passwordChoices() {
    var length = parseInt(prompt(
        "How long would you prefer your password to be?"
    ));

    if (isNaN(length) === true) {
        alert("Password length must be provided as a number");
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

    var hasNumChar = confirm(
        "Click ok to use numbers."
    );

    var hasLowChar = confirm(
        "Click ok to use lowercase letters."
    );

    var hasCapLetters = confirm(
        "Click ok to use uppercase letters."
    );

    var hasSpecChar = confirm(
        "Click ok to use special charecters."
    );

    //This is where the user will be kicked for not properly choosing.

    if (
        hasSpecChar === false &&
        hasCapLetters === false &&
        hasNumChar === false &&
        hasLowChar === false

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
        hasLowChar: hasLowChar
    };

    return passwordChoices;

};

//This is the function to gen a random pw. 

function genRandom(arr) {
    var ranIndex = Math.floor(Math.random() * arr.length);
    var ranElement = arr[ranIndex];
  
    return ranElement;
  }
  
//Password will be generated using the users input.

function generatePassword() {
    var choices = getPasswordChoices();

    var result = []

    var possibleChoices = [];

    var setChoices = [];

    if (choices.hasSpecChar) {
        possibleChoices = possibleChoices.concat(specChar);
        setChoices.push(genRandom(specChar));
    }

    if (choices.hasCapLetters) {
        possibleChoices = possibleChoices.concat(capLetters);
        setChoices.push(genRandom(numChar));
    }

    if (choices.hasNumChar) {
        possibleChoices = possibleChoices.concat(numChar);
        setChoices.push(genRandom(numChar));
    }

    if (choices.hasLowChar) {
        possibleChoices = possibleChoices.concat(lowLetters)
        setChoices.push(genRandom(lowLetters));
    }

    for(var i = 0; i < choices.length; i++) {
        var possibleChoices = genRandom(possibleChoices);

        result.push(possibleChoices);
    }

    for(var i = 0; i < setChoices.length; i++) {
        result[i] = setChoices[i];
    }

    return result.join("");

}


