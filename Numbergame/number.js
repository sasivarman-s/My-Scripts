// code now
var num = document.getElementById("num")
var add = document.getElementById("btnadd")
var sub = document.getElementById("btnsub")
var reset = document.getElementById("btnreset")
add.onclick = ()=>{
    num.textContent=parseInt(num.textContent)+1
    console.log(num)
    
}
sub.onclick = ()=>{
    num.textContent = parseInt(num.textContent)-1
    console.log(num)
    
}
reset.onclick = ()=>{
    num.textContent = 0
    console.log(num)
    
}