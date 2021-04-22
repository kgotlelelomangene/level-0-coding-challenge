//Task 0.1
console.log("Task 0.1");

var x = 0;
var y = 1;

console.log("The value of x : " + x);
console.log("The value of y : " + y);

x = x + 3;
y = y + x;

console.log("The value of x : " + x);
console.log("The value of y : " + y);

//Task 0.2
console.log("\nTask 0.2 ");

var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + ( 1 * 2 );
var a = 1 + 1 * 2 / 2;
var b = (1 + 1 * 2 ) /  2;

console.log("The value of x : " + x);
console.log("The value of y : " + y);
console.log("The value of z : " + z);
console.log("The value of a : " + a);
console.log("The value of b : " + b);

//Task 0.3
console.log("\nTask 0.3 ");

function hello(str){
    console.log("Hello " + str);
}

hello("Kgotlelelo");

//Task 0.4
console.log("\nTask 0.4 ");

function evenOrOdd(int){
    if(int%2 == 0 ){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
        
}

evenOrOdd(12);