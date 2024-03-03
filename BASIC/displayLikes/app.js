



/**
 * Displays the likes based on the given array of names.
 * @param {string[]} arr - The array of names.
 * @returns {string} - The formatted string representing the likes.
 * @throws {Error} - If the input is not an array, not an array of strings, or if there are no arguments.
 */

const displayLikes = (arr) => {
  if (arr === undefined) throw new Error("No hay argumentos de entrada");
  if (!Array.isArray(arr)) {
    throw new Error("No es un array");
  }
  if (arr.some((e) => typeof e !== "string")) {
    throw new Error("No es un array de strings");
  }
  let respuesta = "";
  if (arr.length === 0) {
    respuesta = "No one likes this";
  } else if (arr.length === 1) {
    respuesta = `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    respuesta = `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length === 3) {
    respuesta = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else {
    respuesta = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
  return respuesta;
};

module.exports = displayLikes;
