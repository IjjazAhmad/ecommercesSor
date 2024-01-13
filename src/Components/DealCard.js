import React from 'react'
export default function DealCard({ title, img, des }) {
    return (
        <>
            <div className="flex ">
                <div className="w-20">
                    <img src={img} />
                </div>
                <div className='ms-5'>
                    <h3 className='mb-2 text-primary font-bold'>{title}</h3>
                    <span>{des}</span>
                </div>
            </div>
        </>
    )
}
