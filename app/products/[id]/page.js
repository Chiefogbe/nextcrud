import React from 'react'
import { GetOneProduct } from '@/app/utils/getoneproduct'

const SingleProductPage =async ({params:{id}}) => {
  const data=await GetOneProduct(id)
  return (
    <div>
      {data.title}
    </div>
  )
}

export default SingleProductPage
