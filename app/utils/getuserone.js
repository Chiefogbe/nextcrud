export default async function FetchOneData(id){
  try {
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if(!res.ok){
      throw new Error(`Error while fetching data.`)
    }
    const data=await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}