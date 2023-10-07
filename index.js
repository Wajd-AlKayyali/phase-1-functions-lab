// Code your solution in this file!
let pickup;
function distanceFromHqInBlocks(pickup) {
  const headQuarter = 42;
  const distance = Math.abs(pickup - headQuarter); // Math.abs ensures that the result is a positive value
  return distance;
}

function distanceFromHqInFeet(pickup) {
  const distanceInFeet = distanceFromHqInBlocks(pickup) * 264;
  return distanceInFeet;
}
let start;
let destination;
function distanceTravelledInFeet(start, destination) {
  let distanceTravelled = Math.abs(start - destination) * 264;
  return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    // Calculate fare for distances between 400 and 2000 feet (excluding 400)
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    // Flat fare for distances between 2000 and 2500 feet (excluding 2500)
    return 25;
  } else if (distance >= 2500) {
    return "cannot travel that far"; // Distance over 2500 feet is not allowed
  }
}
