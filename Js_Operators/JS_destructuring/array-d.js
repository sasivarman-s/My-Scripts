var arr = [1,2,3,4,5,6,7];
var [a,b,c] = arr;
console.log(a+c);
// output -> 4

var arr = [1,2,3,4,5,6,7,8,9];
var [a,b,c,...d] =arr;
console.log(a,b,c,d);
// output -> 1 2 3 [4,5,6,7,8,9]