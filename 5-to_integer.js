#!/usr/bin/node

// Get the first argument passed to the script.
const arg = process.argv[2];

// Try to convert the argument to an integer.
const number = parseInt(arg);

// Check if the conversion resulted in NaN (Not a Number).
if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + number);
}