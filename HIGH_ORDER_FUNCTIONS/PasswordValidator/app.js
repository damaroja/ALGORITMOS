








/**
 * Validates a password based on specific criteria.
 * @param {string} password - The password to be validated.
 * @returns {boolean} - Returns true if the password is valid, false otherwise.
 */


//create a validatepassword function that takes in a password and returns true if the password is valid and false if it is not valid
// A valid password is at least 8 characters long and contains at least one number
// A valid password is at least one lowercase letter
// A valid password is at least one uppercase letter


/**
 * Verifies if a given string is valid.
 * @param {string} str - The string to be verified.
 * @throws {Error} If the string is undefined, empty or not a string.
 */


const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(str === '') throw new Error('Empty string');
    if(typeof str !== 'string') throw new Error('Not a string');
}


const validatePassword = (password) => {
    verifyString(password);
    const isLenghtValid = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    return isLenghtValid && hasNumber && hasLowerCase && hasUpperCase;
}

module.exports = { validatePassword, verifyString };
