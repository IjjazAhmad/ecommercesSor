import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import SingleProduct from './SingleProduct'

export default function index() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/productdetail' element={<SingleProduct />} />
            </Routes>
        </>
    )
}
