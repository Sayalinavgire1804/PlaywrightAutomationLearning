//> < >= <= != This are the comparator operators. They are used to compare two values and return a boolean value (true or false).
console.log(3>5);//this will print false to the console because 3 is not greater than 5.    
console.log(3<5);//this will print true to the console because 3 is less than 5.
console.log(4>=4);//this will print true to the console because 4 is greater than or equal to 4.
console.log(3<=4);//this will print true to the console because 3 is less than or equal to 4.
console.log(5=="5");//this will print true to the console because when using the loose equality operator (==), JavaScript performs type coercion and considers the number 5 and the string '5' to be equal.
console.log(5==="5");//this will print false to the console because when using the strict equality operator (===), JavaScript does not perform type coercion and considers the number 5 and the string '5' to be different types and values, resulting in false.
console.log(5!="5");//this will print false to the console because 5 is equal to 5, so the inequality operator (!=) returns false.
console.log(5!=="5");//this will print true to the console because when using the strict inequality operator (!==), JavaScript does not perform type coercion and considers the number 5 and the string '5' to be different types and values, resulting in true.


//=== this is the strict equality operator. It checks for both value and type equality. It returns true if both the value and type are the same, and false otherwise.
//== this is the loose equality operator. It checks for value equality after performing type coercion. It returns true if the values are equal after type coercion, and false otherwise.
//>== this is not allowed in JavaScript. It will throw a syntax error. The correct operator for greater than or equal to is >=.