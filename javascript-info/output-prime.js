// Write the code which outputs prime numbers in the interval from 2 to n.
// Receive n value. 
// Run a for loop for as many iterations as n to check from 2 to n
// Run a second for loop to check if n is divisible by all numbers to sq rt.
// In the 2nd loop, if I can divide evenly, it's not a prime, so 

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) { 
  
  for (let j = 2; j < i; j++) {  
    
    if ( i % j === 0 ) continue nextPrime; 
  }
  
  console.log(i);
  // 2,3,5,7
}
