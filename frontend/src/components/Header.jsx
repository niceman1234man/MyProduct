import React from 'react'
import{FaShoppingCart,FaUser} from 'react-icons/fa'

function Header() {
  return (
    <div className='  py-6 bg-slate-500'>
      <div className='flex justify-between max-w-[1240px]  mx-auto'>
      <h1>MyShop</h1>
        <div className='flex mx-auto'>
        <p className='flex justify-center items-center mx-5'><FaShoppingCart/>cart</p>
        <p className='flex justify-center items-center'><FaUser/>sign in</p>
        </div>
      </div>
        
  
    </div>
  )
}

export default Header