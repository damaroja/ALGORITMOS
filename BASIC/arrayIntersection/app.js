




 // funcion que genera la interseccion de dos arreglos y que devuelve un nuevo arreglo con los elementos que se repiten en ambos arreglos.

/**
 * Finds the intersection of two arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - The intersection of the two arrays.
 * @throws {Error} - If either arr1 or arr2 is undefined.
 * @throws {Error} - If either arr1 or arr2 is an empty array.
 * @throws {Error} - If either arr1 or arr2 is not an array.
 */


const interseccionArr = (arr1, arr2) => {
    if (arr1 === undefined || arr2 === undefined) {
        throw new Error('Ambos argumentos son requeridos');
    }
    if (arr1.length === 0 || arr2.length === 0) {
        throw new Error('Ambos arreglos deben tener al menos un elemento');
    }
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Ambos argumentos deben ser arreglos');
    }
    const arr3 = arr1.filter((value) => arr2.includes(value));
    return arr3;
}

module.exports = interseccionArr;

