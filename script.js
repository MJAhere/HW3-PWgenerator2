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

function passwordChoices() {
    var length = parseInt(prompt(
        "How long would you prefer your password to be?"
    ));
}

if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
}

if (length < 8) {
    alert("Password length needs to be atleast 8 charecters");
    return;
}

if (length > 128) {
    alert("Password length needs to be less than 129 charecters");
    return;
}

