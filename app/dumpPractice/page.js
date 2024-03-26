// import Link from 'next/link'
// import React from 'react'

// const Homepage = () => {
//   const person={
//     name:'Tyrion',
//     age:25
//   }
//   return (
//     <div>
//       <h2>Home Page</h2>
//       <Link href={{
//         pathname:'/about',
//         query:{person: JSON.stringify(person)}
//       }}>About Page</Link>
//     </div>
//   )
// }

// export default Homepage

// 'use client'
// import React from 'react'
// import { useSearchParams } from 'next/navigation'

// const AboutPage = () => {
//   const searchparams=useSearchParams()
//   const person=searchparams.get('person')
//   const newPerson=JSON.parse(person)
//   console.log(newPerson)
//   return (
//     <div>
//       <h2>About Page</h2>
//       {newPerson.name}
//     </div>
//   )
// }

// export default AboutPage
