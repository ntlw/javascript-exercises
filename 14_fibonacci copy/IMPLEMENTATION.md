# Fibonacci Implementation Documentation

## Overview
This document describes the implementation of the fibonacci function that returns the nth member of the Fibonacci sequence with proper edge case handling and type coercion.

## Fibonacci Sequence Definition
The Fibonacci sequence follows the pattern: **1, 1, 2, 3, 5, 8, 13, 21, 55, 610, ...**

- Position 0: 0
- Position 1: 1
- Position 2: 1
- Position 3: 2
- Position 4: 3
- Position n: fibonacci(n-1) + fibonacci(n-2)

## Implementation Approach

### Algorithm Choice: Iterative Method
The implementation uses an **iterative approach** rather than recursion for several key reasons:

1. **Efficiency**: O(n) time complexity vs exponential for naive recursion
2. **No Stack Overflow**: Handles large numbers without hitting call stack limits
3. **Simplicity**: Easier to understand and maintain
4. **Memory**: Constant O(1) space complexity

### Core Logic

```javascript
const fibonacci = function(position) {
  // 1. Type Conversion
  const num = Number(position);

  // 2. Edge Case Handling
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;

  // 3. Iterative Calculation
  let firstPrev = 1;   // fibonacci(1)
  let secondPrev = 0;  // fibonacci(0)

  for (let i = 2; i <= num; i++) {
    const current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;
};
```

## Implementation Details

### 1. Type Conversion
```javascript
const num = Number(position);
```
- Accepts both numeric and string inputs
- `Number("8")` converts to `8`
- `Number(8)` returns `8`
- Handles all test cases requiring string input conversion

### 2. Edge Case Handling

#### Negative Numbers
```javascript
if (num < 0) return "OOPS";
```
- Returns the string "OOPS" for any negative input
- Example: `fibonacci(-25)` → `"OOPS"`

#### Zero
```javascript
if (num === 0) return 0;
```
- The 0th Fibonacci number is defined as 0
- Example: `fibonacci(0)` → `0`

#### One
```javascript
if (num === 1) return 1;
```
- The 1st Fibonacci number is 1
- Base case for the sequence

### 3. Iterative Calculation

The algorithm uses two variables to track the previous two Fibonacci numbers:

- `firstPrev`: Stores F(n-1)
- `secondPrev`: Stores F(n-2)

**Loop Process:**
```
Iteration 1 (i=2):
  current = 1 + 0 = 1  // F(2)
  secondPrev = 1       // Update to F(1)
  firstPrev = 1        // Update to F(2)

Iteration 2 (i=3):
  current = 1 + 1 = 2  // F(3)
  secondPrev = 1       // Update to F(2)
  firstPrev = 2        // Update to F(3)

Iteration 3 (i=4):
  current = 2 + 1 = 3  // F(4)
  secondPrev = 2       // Update to F(3)
  firstPrev = 3        // Update to F(4)
```

## Test Coverage

All 11 test cases pass:

### Basic Fibonacci Calculations
- ✓ `fibonacci(4)` returns `3`
- ✓ `fibonacci(6)` returns `8`
- ✓ `fibonacci(10)` returns `55`
- ✓ `fibonacci(15)` returns `610`
- ✓ `fibonacci(25)` returns `75025`

### Edge Cases
- ✓ `fibonacci(0)` returns `0`
- ✓ `fibonacci(-25)` returns `"OOPS"`

### String Input Handling
- ✓ `fibonacci("0")` returns `0`
- ✓ `fibonacci("1")` returns `1`
- ✓ `fibonacci("2")` returns `1`
- ✓ `fibonacci("8")` returns `21`

## Performance Characteristics

- **Time Complexity**: O(n) - linear time
- **Space Complexity**: O(1) - constant space
- **Max Safe Value**: Can compute up to at least the 25th Fibonacci number (75025)

## Alternative Approaches Considered

### 1. Recursive Approach (Not Used)
```javascript
// NOT IMPLEMENTED - inefficient
const fibonacci = function(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
};
```
**Rejected because:**
- Exponential time complexity O(2^n)
- Stack overflow risk for large n
- Redundant calculations

### 2. Memoized Recursion (Not Used)
```javascript
// NOT IMPLEMENTED - unnecessary complexity
const fibonacci = function(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
  return memo[n];
};
```
**Rejected because:**
- More complex than needed
- Still uses call stack
- Iterative approach is simpler and equally efficient

### 3. Array-Based Approach (Not Used)
```javascript
// NOT IMPLEMENTED - uses more memory
const fibonacci = function(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib[n];
};
```
**Rejected because:**
- O(n) space complexity
- Unnecessary memory usage
- Only need the last two values

## Key Takeaways

1. **Iterative solutions** are often more efficient than recursive ones for sequence calculations
2. **Type coercion** in JavaScript makes it easy to handle both numbers and strings
3. **Edge cases** should be handled explicitly before the main logic
4. **Simple is better** - the chosen approach balances readability and performance

## Files Modified

- [`fibonacci.js`](fibonacci.js) - Main implementation
- [`fibonacci.spec.js`](fibonacci.spec.js) - Unskipped all test cases

## Running Tests

From the project root:
```bash
npm test "14_fibonacci copy/fibonacci.spec.js"
```

Expected output:
```
PASS 14_fibonacci copy/fibonacci.spec.js
  fibonacci
    ✓ 4th fibonacci number is 3
    ✓ 6th fibonacci number is 8
    ✓ 10th fibonacci number is 55
    ✓ 15th fibonacci number is 610
    ✓ 25th fibonacci number is 75025
    ✓ 0th fibonacci number is 0
    ✓ doesn't accept negatives
    ✓ DOES accept strings (x4)

Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
```

---

**Date Completed**: January 17, 2026
**Implementation Time**: Completed in a single session
**Final Status**: All tests passing ✓
