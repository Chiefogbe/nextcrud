import React from 'react'
import FetchOneData from '@/app/utils/getuserone'

const Singleuser = async({params:{id}}) => {
  const data=await FetchOneData(id)
  return (
    <div>
      {data.name}
    </div>
  )
}

export default Singleuser
