





/**
 * Checks if the input is an array of objects.
 *
 * @param {Array} array - The input array to be checked.
 * @returns {boolean} - Returns true if the input is an array of objects, otherwise returns false.
 * @throws {Error} - Throws an error if the input array is undefined.
 */


const isArrayOfObjects = (array) => {
    if (array === undefined) throw new Error("array is required");
    if (array.length === 0) throw new Error("array is required");
    if (Array.isArray(array)) {
      return array.every(
        (element) => typeof element === "object" && !Array.isArray(element)
      );
    }
    return false;
  };

/**
 * Checks if the objects in the array have the right format.
 * The format should be { name: 'Chocolate', price: 2.5, quantity: 5 },
 * where name is a string, price is a number greater than 0, and quantity is a number greater than 0.
 *
 * @param {Array} array - The input array to be checked.
 * @returns {boolean} - Returns true if all objects in the array have the right format, otherwise returns false.
 * @throws {Error} - Throws an error if the input array is undefined.
 */


const isRightFormat = (array) => {
    if (array === undefined) throw new Error("array is required");
    let result = true;
    array.forEach((element) => {
        if (
            typeof element.name !== "string" ||
            element.name.trim() === "" ||
            element.name === undefined ||
            element.name === null ||
            typeof element.price !== "number" ||
            element.price === undefined ||
            element.price === null ||
            typeof element.quantity !== "number" ||
            element.quantity === undefined ||
            element.quantity === null ||
            element.price <= 0 ||
            element.quantity <= 0
        ) {
            result = false;
        }
    });
    return result;
};


const verifyNumber = (n) => {
    if(n === undefined) throw new Error('The number is required')   
    if(typeof n !== 'number') throw new Error('The number is required')
    if(n <= 0) throw new Error('Number must be greater than 0')
    return true
}



//crear una funcion que reciba un array de objetos y devuelva el total de la suma de los precios de los objetos por la cantidad de cada objeto

const sumOfPrice = (array, tipo) => {
    if(!verifyNumber(tipo)) throw new Error('Valid tipo number is required')
    if (array === undefined) throw new Error("array is required");
    if(isArrayOfObjects(array) && isRightFormat(array)){
        const baseInponible = array.reduce((acc, obj) => acc + (obj.price * obj.quantity), 0);
        const total = Number((baseInponible * (tipo/100)) + baseInponible)
        return {BaseInponible: baseInponible, tasa: tipo, total}
    }
    return false;
}





module.exports = { isRightFormat, isArrayOfObjects, sumOfPrice };

