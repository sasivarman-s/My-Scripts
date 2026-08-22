var arr = [10,20,30];  
console.log(...arr); // unpacking

// output -> 10 20 30

var arr = [10,20,30];
var arr1 = [0];
var arr1 = [0,...arr]; // copying into arr1
console.log(arr1); 

// output -> [0,10,20,30]

var arr = [10,20,30];
var arr1 = [0];
console.log(...arr,...arr1);

// output -> 10 20 30 0
