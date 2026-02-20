let count=42;//This is a numeric literal assigned to the variable count
let negative=-5;//This is a numeric literal assigned to the variable negative
let zero=0;//This is a numeric literal assigned to the variable zero
let h=0xFF;//This is a hexadecimal literal assigned to the variable h
let octal=0o77;//This is an octal literal assigned to the variable octal
let pi=3.14;//This is a floating-point literal assigned to the variable pi
let million=1e6;//This is an exponential literal assigned to the variable million, scientific notation for 1 million
let tiny=-1.5e-4;//This is an exponential literal assigned to the variable tiny, scientific notation for a very small number
console.log(h);
//Single quote string literal
let singleQuoteString='Hello, World!';
let singlequotewithdouble='She said "Hello!"';
console.log(singlequotewithdouble);
//double quote string literal
let doubleQuoteString="Hello, World!";
let doublequotewithsingle="It's a nice day!";
//template literal
let name="Alice";
let greeting=`Hello ${name} Welcome to playwright learning!`;
console.log(greeting);
let mathsExpression=`2+2=${2 + 2}`;
//This is a template literal that evaluates the expression 2 + 2 and includes the result in the string. The output will be "2+2=4".
console.log(mathsExpression);

//path
let path="C:\\Users\\Alice\\Documents\\file.txt";//need to add double blackslash instea1d of single backslash to represent a literal backslash in the string
console.log(path);
//URL
let url="https://google.com";
console.log(url);
let url1="https://www.google.co.in/books/edition/Image_Eye_and_Art_in_Calvino/E6aSQv8HZ68C?hl=en&gbpv=1&dq=images&pg=PA89&printsec=frontcover";
console.log(url1);  
//String literal edge cases
let emptystring="";//This is an empty string literal assigned to the variable emptysring
console.log(emptystring);
let whitesinglespace=" ";//This is a string literal containing a single whitespace character assigned to the variable whitesinglespace
console.log(whitesinglespace);
let withzero="0";//This is a string literal containing the character '0' assigned to the variable withzero
console.log(withzero);
//boolesean literals
let ispermission=true;//This is a boolean literal assigned to the variable ispermission
let isadmin=false;//This is a boolean literal assigned to the variable isadmin
console.log(ispermission);
console.log(isadmin);