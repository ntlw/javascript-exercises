const fibonacci = function(position) {
  // Convert string to number if needed
  const num = Number(position);

  // Handle edge cases
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;

  // Iterative calculation
  let firstPrev = 1;  // fibonacci(1)
  let secondPrev = 0; // fibonacci(0)

  for (let i = 2; i <= num; i++) {
    const current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
