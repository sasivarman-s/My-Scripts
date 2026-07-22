var seti = setInterval(()=>{
    console.log("sasivarman is the best")
}, 5000) 
var set = setTimeout(() => {
    clearInterval(seti)
}, 11000);