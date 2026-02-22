// && - this is called logical and operator
//|| - this is called logical or operator
//! - this is called logical not operator
let a=true;
let b=false;
console.log(a&&b); //this will print false to the console because the logical AND operator (&&) returns true only if both operands are true. In this case, since b is false, the result is false.
console.log(a||b); //this will print true to the console because the logical OR operator (||) returns true if at least one of the operands is true. In this case, since a is true, the result is true.
console.log(!a); //this will print false to the console because the logical NOT operator (!) negates the value of a. Since a is true, !a evaluates to false.
console.log(!b); //this will print true to the console because the logical NOT operator (!) negates the value of b. Since b is false, !b evaluates to true.