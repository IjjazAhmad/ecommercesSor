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
                        <nav className="mx-auto text-center md:flex items-center justify-between">
                                <Link to={'/shop'} className='bg-warning text-white p-4'>Browse categories <i className="fa-solid fa-angle-down ms-4"></i>
                                </Link>
                            <div className="menu hidden md-2:block">
                                <ul className='flex items-center'>
                                    <li className='mx-3'>
                                        <Link to={'/'} onClick={(prev) => setIsopenhome(!prev)}>
                                            Home
                                            {Isopenhome ? <i className="fa-solid fa-angle-up ms-4"></i> : <i className="fa-solid fa-angle-down ms-4"></i>}
                                        </Link>
                                    </li>
                                    <li className='mx-3'>
                                        <Link to={'/catalog'} onClick={(prev) => setIsopenhome(!prev)}>
                                            Catalog
                                            {Isopenhome ? <i className="fa-solid fa-angle-up ms-4"></i> : <i className="fa-solid fa-angle-down ms-4"></i>}
                                        </Link>
                                    </li>
                                    <li className='mx-3'>
                                        <Link to={'/productdetail'}>Blog</Link>
                                    </li>
                                    <li className='mx-3'>
                                        <Link to={'/shop'} onClick={(prev) => setIsopenhome(!prev)}>
                                            Pages
                                            {Isopenhome ? <i className="fa-solid fa-angle-up ms-4"></i> : <i className="fa-solid fa-angle-down ms-4"></i>}
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
                                <p className='text-primary font-bold mt-8 md:mt-0'>30 Days Free Return</p>
                            </div>
                        </nav>
                    </header>
                </div>
          
        </>
    )
}
