let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton")

function generatorPassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%^&*()_+=-[];:/>,.<?";

    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generator = '';
    for (let i = 0; i < len; i++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator
}

function getPassword() {
    const newPassword = generatorPassword(passwordLength.value);
    password.value = newPassword;
}

function savePassword() {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
}