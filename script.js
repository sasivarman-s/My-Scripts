// https://dummyjson.com/products

async function fetchdata(){
    const res = await fetch("https://dummyjson.com/products")
    const data = res.json()
    console.log(data)
}
fetchdata()