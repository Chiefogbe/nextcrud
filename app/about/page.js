import React from 'react'
import FetchData from '../utils/getusers'
import Link from 'next/link'


const AboutPage = async() => {
  const data=await FetchData()
  return (
    <div>
      This is the About Page

      {data.map((x, key)=>{
        return(
          <div key={key}>
            <Link href={`/about/${x.id}`}>{x.name}</Link>
            </div>
        )
      })}
    </div>
  )
}

export default AboutPage
