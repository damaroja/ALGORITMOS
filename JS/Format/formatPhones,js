


//formatear numero de telefono

const isNumber = (value) => {
  if (value === undefined) throw new Error("value is undefined");
  if (value === null) throw new Error("value is null");
  if (value === "") throw new Error("value is empty");
  if (isNaN(value)) throw new Error("value is not a number");
  if(value.length < 10 || value.length > 10) throw new Error("value is not a valid phone number");
  return true;
};

/**
 * Formats a phone number string into a specific format.
 * @param {string} phoneNumberString - The phone number string to be formatted.
 * @returns {string|null} The formatted phone number string, or null if the input is not a valid phone number.
 */


const formatPhoneNumber = (phoneNumberString) => {
  if (isNumber(phoneNumberString)) {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{8})$/);
    if (match) {
      return "+(" + match[1] + ') ' + match[2];
    }
    return null;
  }
};

module.exports = {formatPhoneNumber, isNumber};


/* console.log(formatPhoneNumber(1234567890)) ;
console.log(formatPhoneNumber(12345678901)) ;
console.log(formatPhoneNumber(123456789012)) ;
console.log(formatPhoneNumber(1234567890123)) ;
console.log(formatPhoneNumber(12345678901234)) ; */

