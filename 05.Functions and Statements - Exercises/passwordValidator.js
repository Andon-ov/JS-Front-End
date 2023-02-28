function solve(password) {

    const regexAlphanumeric = /^[0-9a-zA-Z]+$/;
    const regexDigits = /\d/g;

    let digits = password.match(regexDigits);
    let result = []

    if (password.length >= 6 && password.length <= 10) {
        result.push(true)
    } else {
        console.log("Password must be between 6 and 10 characters")
    }
    if (regexAlphanumeric.test(password)) {
        result.push(true)

    } else {
        console.log("Password must consist only of letters and digits")
    }
    if (digits !== null &&  digits.length >= 2) {
        result.push(true)

    } else {
        console.log("Password must have at least 2 digits")
    }


    if (result[0]  === true && result[1]  === true &&  result[2]  === true){
        console.log('Password is valid')

    }


}

// solve('logIn');
solve('MyPass123');
// solve('Pa$s$s');