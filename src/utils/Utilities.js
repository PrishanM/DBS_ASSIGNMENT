export function generateRandomNumber(lowerLimit = 1000000000,higherLimit = 9000000000) {
  return Math.floor((Math.random() * higherLimit) + lowerLimit);
}
