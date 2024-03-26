import React from 'react'
import { GetAllProducts } from '../utils/getproducts'
import Link from 'next/link'

const ProductPage = async() => {
  const data=await GetAllProducts()
  return (
    <div>
      {data.map((x, key)=>{
        return(
          <div key={key}>
            <Link href={`/products/${x.id}`}>{x.title}</Link>
            </div>
        )
      })}
    </div>
  )
}

export default ProductPage
