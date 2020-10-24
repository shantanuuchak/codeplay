// Is Password Valid Checker
// -------------------------------------THIS IS THE MACHINE
function isValidPassword(username, password) {
    if (password.length >= 8 && !password.includes(' ') && !password.includes(username)) {
        return `Welcome ${username}`;
    } else {
        return `Get the hell out ${username}`;
    }
}
// -------------------------------------------------------

let trueOrFalse = isValidPassword("tanu", "whaythinktanu");


console.log(trueOrFalse);