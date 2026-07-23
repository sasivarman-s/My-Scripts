// https://dummyjson.com/products

async function fetchdata(){
    const res = fetch("https://dummyjson.com/products")
    console.log(res)
}
fetchdata()