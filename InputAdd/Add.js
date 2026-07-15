var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var ans = document.getElementById("answer")

function change(){
    var num1value = Number(num1.value)
    var num2value = Number(num2.value)
    var total = num1value+num2value
    ans.textContent=total
}