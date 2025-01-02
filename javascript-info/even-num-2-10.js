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
// Receive n value. 
// Run a for loop for as many iterations as n to check from 2 to n
// Run a second for loop to check if n is divisible by all numbers to sq rt.
// In the 2nd loop, if I can divide evenly, it's not a prime, so 

let n = 4;
outer: for (let i = 2; i <= n; i++) {

  let halfNumSquareRoot = Math.floor(Math.sqrt(n));
  for (let j = 2; j <= halfNumSquareRoot; j++) {
    
    if ( i % j === 0 ) continue;
    console.log(j);

  }

  // alert(i); // 2,3,5,7
  // console.log(i);
}
