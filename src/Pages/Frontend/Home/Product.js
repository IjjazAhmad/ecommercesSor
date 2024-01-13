import React from 'react'
import ProCard from '../../../Components/ProCard'

export default function Product() {
    return (
        <>
            <div className="container">
                <div className="flex">
                    <p className='text-[30px] font-semibold text-[#2E8FC5]'>Popular products</p>
                </div>
                <div className="flex mt-10 flex-wrap mb-6">
                    <div className='mb-3 mx-auto'>
                        <ProCard />
                    </div>
                    <div className='mb-3 mx-auto'>
                        <ProCard />
                    </div>
                    <div className='mb-3 mx-auto'>
                        <ProCard />
                    </div>
                    <div className='mb-3 mx-auto'>
                        <ProCard />
                    </div>
                    <div className='mb-3 mx-auto'>
                        <ProCard />
                    </div>
                    <div className='mb-3 mx-auto'>
                        <ProCard />
                    </div>
                    <div className='mb-3 mx-auto'>
                        <ProCard />
                    </div>
                    <div className='mb-3 mx-auto'>
                        <ProCard />
                    </div>
                </div>
            </div>
        </>
    )
}
