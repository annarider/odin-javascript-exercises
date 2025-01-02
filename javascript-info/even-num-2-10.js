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
  alert( i );
  i++;
} while(i < 3);