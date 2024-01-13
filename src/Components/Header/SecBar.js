import React, { useState } from 'react'
import GithubDetailsMenuElement from "https://cdn.skypack.dev/@github/details-menu-element@1.0.9";
import { Link } from 'react-router-dom';

export default function SecBar() {
    const [Isopen, setIsopen] = useState(false)
    const [Isopenhome, setIsopenhome] = useState(false)
    return (
        <>
            <div className="bg-gray">
                <div className="container">
                    <header>
                        <nav className="mx-auto text-center md:flex max-w-7xl items-center justify-between p-5 md:p-0">
                            <div className="browsercat">
                                <Link className='bg-warning text-white p-5' onClick={(prev) => setIsopen(!prev)}>Browse categories
                                    {Isopen ? <i className="fa-solid fa-angle-up ms-4"></i> : <i className="fa-solid fa-angle-down ms-4"></i>}
                                </Link>
                            </div>
                            <div className="menu hidden md:block py-[20px]">
                                <ul className='md:flex items-center'>
                                    <li className='mx-1 sm:mx-1 md:mx-2 lg:mx-3'>
                                        <Link to={'/'} onClick={(prev) => setIsopenhome(!prev)}>
                                            Home
                                            {Isopenhome ? <i className="fa-solid fa-angle-up ms-4"></i> : <i className="fa-solid fa-angle-down ms-4"></i>}
                                        </Link>
                                    </li>
                                    <li className='mx-1 sm:mx-1 md:mx-2 lg:mx-3'>
                                        <Link to={'/catalog'} onClick={(prev) => setIsopenhome(!prev)}>
                                            Catalog
                                            {Isopenhome ? <i className="fa-solid fa-angle-up ms-4"></i> : <i className="fa-solid fa-angle-down ms-4"></i>}
                                        </Link>
                                    </li>
                                    <li className='mx-1 sm:mx-1 md:mx-2 lg:mx-3'>
                                        <Link to={'/productdetail'}>Blog</Link>
                                    </li>
                                    <li className='mx-1 sm:mx-1 md:mx-2 lg:mx-3'>
                                        <Link to={'/pages'} onClick={(prev) => setIsopenhome(!prev)}>
                                            Pages
                                            {Isopenhome ? <i className="fa-solid fa-angle-up ms-4"></i> : <i className="fa-solid fa-angle-down ms-4"></i>}
                                        </Link>
                                    </li>
                                    <li className='mx-1 sm:mx-1 md:mx-2 lg:mx-3'>
                                        <Link to={'/about'}>
                                            About us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu">
                                <p className='text-primary font-bold mt-8 md:mt-0'>30 Days Free Return</p>
                            </div>
                        </nav>
                    </header>
                </div>
            </div >
        </>
    )
}
