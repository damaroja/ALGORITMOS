




/**
 * Analyzes the mileage of a list of cars.
 * @param {Array} cars - The list of cars to analyze.
 * @returns {Object} - An object containing various mileage statistics.
 */


const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
  ];

const analizeCarMileage = (cars) => {
    const totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);
    const averageMileage = totalMileage / cars.length;
    const highestMileage = cars.reduce((acc, car) => acc > car.mileage ? acc : car.mileage, 0);
    const lowestMileage = cars.reduce((acc, car) => acc < car.mileage ? acc : car.mileage, cars[0].mileage);
    const highestMileageCar = cars.find(car => car.mileage === highestMileage);
    const lowestMileageCar = cars.find(car => car.mileage === lowestMileage);
    return { averageMileage, highestMileage, lowestMileage, highestMileageCar, lowestMileageCar, totalMileage};
}

module.exports = analizeCarMileage;
