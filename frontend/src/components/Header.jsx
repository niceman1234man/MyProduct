import React from 'react'
import{FaShoppingCart,FaUser} from 'react-icons/fa'

function Header() {
  return (
    <div>
      <div className='flex'>
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