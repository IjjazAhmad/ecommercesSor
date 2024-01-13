import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleTopBar({ title }) {
    return (
        <>
            <div className="bg-gray-50">
                <div className="container">
                    <div className="py-3">
                        <p className="flex items-center"><Link to={'/'}>Home</Link><i class="fa-solid fa-angle-right mx-3"></i><Link to={'/shop'}>All category</Link><i class="fa-solid fa-angle-right mx-3"></i>{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
