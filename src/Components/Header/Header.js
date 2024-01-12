import React from 'react'
import logo from '../../Assets/images/header/logo.png'

export default function Header() {
  return (
    <>
      <div className="bg-primary">
        <div className="container">
          <header className="header py-4">
            <div className="flex items-center justify-between">
              <div className='flex'>
                <div className="logo">
                  <img src={logo} className='w-8/12 sm:w-auto ' alt="logo" />
                </div>
                <div className="hidden md:block">
                  <form className="flex items-center search ms-8">
                    <div>
                      <input type='text' className="outline-none rounded-s-xl w-72 p-2 px-3 text-gray-900 placeholder:text-gray-400" placeholder='Search any things' />
                    </div>
                    <div>
                      <button type="submit" className="rounded-e-xl bg-warning p-2 font-semibold px-6 text-white">Search</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='flex'>
                <span className='flex text-white items-center font-sans '>
                  <i>
                    <i class="fa-regular fa-user text-sm me-2 mx-6"></i>
                  </i>
                  <i>
                    <span className='uppercase hidden md:block'>User</span>
                  </i>
                </span>
                <span className='flex text-white items-center font-sans mx-6'>
                  <i>
                    <i class="fa-regular fa-heart text-sm me-8"></i>
                  </i>
                  <i>
                    <span className='uppercase hidden md:block'>Sign In</span>
                  </i>
                </span>
                <span className='flex text-white items-center font-sans mx-6'>
                  <i>
                    <i class="fa-solid fa-cart-shopping text-sm me-2"></i>
                  </i>
                  <i>
                    <span className='uppercase hidden md:block'>CART</span>
                  </i>
                </span>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  )
}