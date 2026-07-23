// https://dummyjson.com/products

async function fetchdata(){
    const res = await fetch("https://dummyjson.com/products")
    console.log(res)
}
fetchdata()