#!/usr/bin/node

// Get the list of all command-line inputs.
const args = process.argv;

// The first two items are the node executable and the script file path.
// We subtract 2 from the total length to get the number of actual arguments.
const numArgs = args.length - 2;

if (numArgs === 0) {
  console.log('No argument');
} else if (numArgs === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
