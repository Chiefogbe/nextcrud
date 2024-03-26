export default async function FetchData(){
  try {
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/`)

    if(!res.ok){
      throw new Error(`Error while fetching data.`)
    }
    const data=await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

