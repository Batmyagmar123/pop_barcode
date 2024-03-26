export const validateEAN13 = (barcode) => {
  if (!/^\d{13}$/.test(barcode)) {
    return false;
  }

  const digits = barcode.split("").map(Number);
  const checksum = digits.pop();

  let calculatedSum = 0;
  digits.forEach((digit, index) => {
    calculatedSum += digit * (index % 2 === 0 ? 1 : 3);
  });

  const calculatedChecksum = (10 - (calculatedSum % 10)) % 10;
  return checksum === calculatedChecksum;
};
