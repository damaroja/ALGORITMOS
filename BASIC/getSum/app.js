const suma = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Error: a and b must be numbers');
    }   
    return a + b;
}

module.exports = suma;
