import React from 'react'

export default function ClientCard({ img, title, des }) {
    return (
        <>
            <div className="card mb-14">
                <div className="border-2 border-gray-300 rounded-3xl py-3 px-9 relative cardmain">
                    <div className="image flex items-center">
                        <img src={img} alt="Product" />
                        <h3 className='ms-10 text-xl font-semibold text-primary'>{title}</h3>
                    </div>
                    <div className="content-1 mt-2 bg-footer p-2 rounded-xl">
                        <p className='font-semibold text-primary'>Lorem ipsum dolor sit amet consectetur. <br /> Nec sit enim tellus faucibus bibendum<br /> Phasellus tristique aenean at lorem sed <br />scelerisque.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
