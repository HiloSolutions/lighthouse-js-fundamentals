//Whrite out a chorus 10x using WHILE loop.
const chorus = "Let's dance!";
let repeat = 0; 

while (repeat <10) { //When the value of repeat reaches 10, our while condition is no longer true and so JavaScript stops executing the contents of the block following the while statement and moves on.
  
  console.log(chorus);
  repeat ++; //repeat++ is shorthand for repeat = repeat + 1
}

console.log("Until the sun comes up!");