export const GetOneProduct=async(id)=>{
  try {
    const res= await fetch(`https://fakestoreapi.com/products/${id}`)

    if(!res.ok){
      throw new Error(`Error while fetching data.`)
    }
    const data=await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}