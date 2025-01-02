// Use the for loop to output even numbers from 2 to 10.

for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    alert( i );
  }
}

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
do {
  alert( `number ${i}!` );
  i++;
} while(i < 3);


// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while(num <= 100 && num);

// Write the code which outputs prime numbers in the interval from 2 to n.
// Receive n value. Run a for loop for as many iterations as n to check from 2 to n
// Check if n is divisible by 2, 3, 5, 7

let n = 10;
for (let i = 2; i < n; i++) {

  // if (i % 1 === 0 && i % n === 0 ) continue;

  // alert(i); // 2,3,5,7
  // console.log(i);
}
