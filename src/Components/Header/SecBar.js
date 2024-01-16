import React, { useState } from 'react'
import GithubDetailsMenuElement from "https://cdn.skypack.dev/@github/details-menu-element@1.0.9";
import { Link } from 'react-router-dom';

export default function SecBar() {
    const [Isopen, setIsopen] = useState(false)
    const [Isopenhome, setIsopenhome] = useState(false)
    return (
        <>

            <div className="bg-gray">
                <header className='container'>
                    <nav className="mx-auto text-center py-3 sm:py-0 md:flex items-center justify-between">
                        <Link to={'/shop'} className='bg-warning text-white p-3 sm:p-4'>Browse categories <i className="fa-solid fa-angle-down ms-4"></i>
                        </Link>
                        <div className="menu hidden md-2:block">
                            <ul className='flex items-center'>
                                <li className='mx-3'>
                                    <Link to={'/'}>
                                        Home
                                        <i className="fa-solid fa-angle-down ms-4"></i>
                                    </Link>
                                </li>
                                <li className='mx-3'>
                                    <Link to={'/catalog'}>
                                        Catalog
                                        <i className="fa-solid fa-angle-down ms-4"></i>
                                    </Link>
                                </li>
                                <li className='mx-3'>
                                    <Link>Blog</Link>
                                </li>
                                <li className='mx-3'>
                                    <Link to={'/shop'}>
                                        Shop
                                        <i className="fa-solid fa-angle-down ms-4"></i>
                                    </Link>
                                </li>
                                <li className='mx-3'>
                                    <Link to={'/about'}>
                                        About us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="menu">
                            <p className='text-primary font-bold mt-5 md:mt-0'>30 Days Free Return</p>
                        </div>
                    </nav>
                </header>
            </div>

        </>
    )
}
