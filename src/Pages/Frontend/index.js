import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Shop from './Shop'
import SingleProduct from './SingleProduct'

export default function index() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/productdetail:uid' element={<SingleProduct />} />
            </Routes>
        </>
    )
}
