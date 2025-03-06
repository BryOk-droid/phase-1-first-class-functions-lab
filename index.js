// Function to return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a multiplier function
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers
const selectDifferentDrivers = function (arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
};
