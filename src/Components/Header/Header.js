import React from 'react'
import logo from '../../Assets/images/header/logo.png'
import { Link } from 'react-router-dom'

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
                <div className="hidden md-2:block">
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
                  <div>
                    <i class="fa-regular fa-user text-sm me-2 mx-6"></i>
                  </div>
                  <span className='hidden md:block'>User</span>
                </span>
                <span className='flex text-white items-center font-sans mx-6'>
                  <div className='flex'>
                    <i class="fa-regular fa-heart text-sm me-2"></i>
                    <span className="inline-flex items-center rounded-full bg-warning px-2 py-[2px] text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 me-2">
                      0
                    </span>
                  </div>
                  <span className='hidden md:block'>Sign In</span>
                </span>
                <Link to='/cart' className='flex text-white items-center font-sans mx-6'>
                  <div className='flex'>
                    <i class="fa-solid fa-cart-shopping text-sm me-2"></i>
                    <span className="inline-flex items-center rounded-full bg-warning px-2 py-[2px] text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 me-2">
                      0
                    </span>
                  </div>
                  <span className='hidden md:block'>Cart</span>
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  )
}
