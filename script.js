// testing json for API calls
async function api(){
    const response = await fetch("https://dummyjson.com/products")
    console.log(response)
    
}
api()