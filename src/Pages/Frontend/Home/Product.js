import React, { useEffect, useState } from 'react'
import ProCard from '../../../Components/ProCard/Card'
import { FetchProduct } from '../../Redux/Sclice/ProductSclice'
import { useDispatch, useSelector } from 'react-redux'

export default function Product() {
    const state = useSelector((state) => state)
    const [Products, SetProduct] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchProduct());
        SetProduct(state.redux.products)
    }, [dispatch])
    const eightProducts = Products.slice(5, 13);
    return (
        <>
            <div className="container">
                <div className="flex">
                    <p className='text-[30px] font-semibold text-[#2E8FC5]'>Popular products</p>
                </div>
                <div className="flex mt-10 flex-wrap mb-6 justify-center">
                    {eightProducts.map((product, i) => {
                       let title = product.title.slice(0, 20)
                        return (
                            <div key={i} className='mb-3'>
                                <ProCard Name={title} Price={product.price} img={product.image} id={product.id} product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
