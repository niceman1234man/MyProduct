import React from 'react'
import { FaStar,FaStarHalfAlt,FaRegStar } from 'react-icons/fa'

function Rating({value,text}) {
  return (
    <div className='flex'>
        <p>{value>=1 ?<FaStar/> :value>=0.5 ?<FaStarHalfAlt/> :<FaRegStar/>}</p>
        <p>{value>=2 ?<FaStar/> :value>=1.5 ?<FaStarHalfAlt/>:<FaRegStar/>}</p>
        <p>{value>=3 ?<FaStar/> :value>=2.5 ?<FaStarHalfAlt/>:<FaRegStar/>}</p>
        <p>{value>=4 ?<FaStar/> :value>=3.5 ?<FaStarHalfAlt/>:<FaRegStar/>}</p>
        <p>{value>=5 ?<FaStar/> :value>=4.5 ?<FaStarHalfAlt/>:<FaRegStar/>}</p>
        <p>{text&&text}</p>
    </div>
  )
}

export default Rating