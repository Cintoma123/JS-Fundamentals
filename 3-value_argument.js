#!/usr/bin/node

// We check for arguments by looking at their specific positions in the process.argv array.
// The actual arguments you provide start at index 2.
if (process.argv[2] === undefined) {
  // If the "box" at index 2 is empty, there are no arguments.
  console.log('No argument');
} else if (process.argv[3] === undefined) {
  // If index 2 has something but index 3 is empty, there is one argument.
  console.log('Argument found');
} else {
  // If both index 2 and 3 have something, there are two or more arguments.
  console.log('Arguments found');
}

