




//Creamos una funcion que compruebe si dos cadenas son anaogramas. Recuerda que un anagrama es una palabra o frase que resulta de la transposición de letras de otra palabra o frase. Por ejemplo: "Amor" y "Roma" son anagramas. "Hola" y "Hello" no son anagramas.

/**
 * Verifies if a given string is valid.
 * @param {string} str - The string to be verified.
 * @throws {Error} If the string is undefined, empty, or not a string.
 */
const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(str === '') throw new Error('Empty string');
    if(typeof str !== 'string') throw new Error('Not a string');
}



/**
 * Checks if two strings are anagrams.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} True if the strings are anagrams, false otherwise.
 */


//Creamos una funcion que compruebe si dos cadenas son anaogramas. Recuerda que un anagrama es una palabra o frase que resulta de la transposición de letras de otra palabra o frase. Por ejemplo: "Amor" y "Roma" son anagramas. "Hola" y "Hello" no son anagramas.

const isAnagram = (str1, str2) => {
    verifyString(str1);
    verifyString(str2);
    const normalize = str => str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
}

module.exports = { verifyString, isAnagram};


//Esta funcion convierte el str1 a minusculas, reemplaza todos caracteres 
// a caracter vacio si no es (a-z0-9), crea un array lleno de los caracteres 
// de la str1, ordena el array y lo convierte a str. Lo mismo con la otra 
//   str2 y la compara. 
