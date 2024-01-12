import React from 'react'

export default function Button({ title, radius, bg }) {
    return (
        <>
            <button className={`bg-${bg} rounded-${radius} py-2 text-white px-5 text-[14px]`}>{title}</button>
        </>
    )
}
