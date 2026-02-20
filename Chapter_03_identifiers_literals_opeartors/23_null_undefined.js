console.log(null===undefined);//this will print false to the console because null and undefined are different types and values in JavaScript. null represents the intentional absence of any object value, while undefined represents a variable that has been declared but has not been assigned a value.
console.log(null==undefined);//this will print true to the console because when using the loose equality operator (==), JavaScript performs type coercion and considers null and undefined to be equal.
console.log(null==0);//this will print false to the console because null is only loosely equal to undefined, and not to any other value, including 0.   
console.log(null=='');//this will print false to the console because null is not loosely equal to an empty string ('').
console.log(undefined==0);//this will print false to the console because undefined is not loosely equal to 0. undefined is only loosely equal to null, and not to any other value, including 0.
console.log(undefined=='');//this will print false to the console because undefined is not loosely equal to an empty string (''). undefined is only loosely equal to null, and not to any other value, including an empty string.   
