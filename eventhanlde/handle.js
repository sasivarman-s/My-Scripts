let btn = document.getElementById("btn")
btn.addEventListener("mouseover",()=>{
    btn.textContent = "You hovering me"
    btn.style.padding="10px"
})
btn.addEventListener("click", ()=>{
    btn.innerHTML="you clicked me"
    btn.style.backgroundColor="black"
    btn.style.color="white"
})
btn.addEventListener("mouseout",()=>{
    btn.textContent="hover me"
    btn.style.backgroundColor="green"
    btn.style.color="white"
})

let lst = document.getElementById("list")
lst.addEventListener("mouseover",()=>{
    lst.style.backgroundColor="gold"
})
lst.addEventListener("mouseout",()=>{
    lst.style.backgroundColor="green"
})