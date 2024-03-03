






//Creame una funcion que reciba un arreglo de letras mayusculas o minusculas en secuencia y devuelva un char con la letra que falta
// Ejemplo: faltante(['A','B','C','E']) => 'D'
// Ejemplo: faltante(['O','Q','R','S']) => 'P'
// Ejemplo: faltante(['a','b','c','e']) => 'd'


/**
 * Finds the missing letters in an array of letters.
 * @param {string[]} arr - The array of letters.
 * @returns {string} - The missing letters.
 * @throws {Error} - If the input array is empty, has a single element, has more than 26 elements,
 *                   has less than 3 elements, or contains elements that are not letters.
 */


const letraFaltante = (arr) => {
    if(arr === undefined) throw new Error("Error: No hay argumentos");
    if(arr.length === 0) throw new Error("Error: No se puede ingresar un arreglo vacio");
    if(arr.length === 1) throw new Error("Error: No se puede ingresar un arreglo con un solo elemento");
    if(arr.length > 26) throw new Error("Error: No se puede ingresar un arreglo con mas de 26 elementos");
    if(arr.length < 3) throw new Error("Error: No se puede ingresar un arreglo con menos de 3 elementos");
    if(arr.some(e => typeof e !== 'string')) throw new Error("Error: No se puede ingresar un arreglo con elementos que no sean letras");
    let letras = 'abcdefghijklmnopqrstuvwxyz';
    let letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let letrasFaltantes = '';
    if (arr[0] === arr[0].toUpperCase()) {
        letras = letrasMayusculas;
    } else {
        letras = letras;
    }
    for (let i = 0; i < letras.length; i++) {
        if (arr.indexOf(letras[i]) === -1) {
            letrasFaltantes += letras[i];
        }
    }
    return letrasFaltantes;
}


module.exports = letraFaltante;

/* console.log(letraFaltante(['A','B','C','E'])); //D
console.log(letraFaltante(['O','Q','R','S'])); //P
console.log(letraFaltante(['a','b','c','e'])); //d
console.log(letraFaltante(['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y','z'])); //u
console.log(letraFaltante(['A','B','C','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','X','Y','Z'])); //U */



