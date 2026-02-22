//true
if("hello") console.log("String is truthy"); //this will print "String is truthy" to the console because non-empty strings are considered truthy in JavaScript.
if(42) console.log("Number is truthy"); //this will print "Number is truthy" to the console because non-zero numbers are considered truthy in JavaScript.
if(-1) console.log("Negative number is truthy");
if([]) console.log("Empty array is truthy"); //this will print "Empty array is truthy" to the console because empty arrays are considered truthy in JavaScript.
if({}) console.log("Empty object is truthy"); //this will print "Empty object is truthy" to the console because empty objects are considered truthy in JavaScript.
//falsie
if("") console.log("Empty string is falsy"); //this will not print anything to the console because empty strings are considered falsy in JavaScript.
if(null) console.log("Null is falsy"); //this will not print anything to the console because null is considered falsy in JavaScript.
if(undefined) console.log("Undefined is falsy"); //this will not print anything to the console because undefined is considered falsy in JavaScript. 
if(0) console.log("Zero is falsy"); //this will not print anything to the console because 0 is considered falsy in JavaScript.
if(NaN) console.log("NaN is falsy"); //this will not print anything to the console because NaN (Not-a-Number) is considered falsy in JavaScript.