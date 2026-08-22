function display(a,...b){
    console.log(a,b);  
}

display(1,2,3,4,5,6,7,8,9,); 
/* output -> 1 [
  2, 3, 4, 5,
  6, 7, 8, 9
] */

function display2(a,...b){
    console.log(a,b[2]);
    
}
display2(1,2,3,4,5);
// output -> 1 4