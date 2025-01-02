// Write the code which outputs prime numbers in the interval from 2 to n.
// Receive n value. 
// Run a for loop for as many iterations as n to check from 2 to n
// Run a second for loop to check if n is divisible by all numbers to sq rt.
// In the 2nd loop, if I can divide evenly, it's not a prime, so 

let n = 4;
outer: for (let i = 2; i <= n; i++) { //i 3 n 4 j 3

  let halfNumSquareRoot = Math.floor(Math.sqrt(n)); //2
  for (let j = 2; j <= halfNumSquareRoot; j++) {  //j2 2 = 2
    
    if ( i % j === 0 ) continue; // 2 % 2
    console.log(j);

  }

  // alert(i); // 2,3,5,7
  // console.log(i);
}
