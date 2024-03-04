


const analizeCarMileage = require('./app');

describe('analizeCarMileage', () => {
  const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
  ];

  it('should return the correct mileage statistics', () => {
    const result = analizeCarMileage(cars);
    expect(result.averageMileage).toBe(28660);
    expect(result.highestMileage).toBe(50000);
    expect(result.lowestMileage).toBe(13000);
    expect(result.highestMileageCar).toEqual({ make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 });
    expect(result.lowestMileageCar).toEqual({ make: 'Audi', model: 'R8', year: 2020, mileage: 13000 });
    expect(result.totalMileage).toBe(143300);
  });
});

