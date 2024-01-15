import React, { useState } from 'react'
import logo from '../../../Assets/images/Product/headphone.png'

export default function Cart() {
    const [amount, setAmount] = useState(1)

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const setIncrease = () => {
        setAmount(amount + 1)
    }
    let price = 11
    return (
        <>
            <div className="container">
                <div className="flex flex-wrap py-5">
                    <div className="w-[100%] sm:w-[100%] md:w-[65%] border lg:w-[70%]">
                        <table className='w-full md:table-fixed text-center'>
                            <thead className='bg-footer'>
                                <tr >
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    {/* <th className='hidden md-2:block'>Subtotal</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex items-center text-left">
                                            <img src={logo} className="w-[132px] h-[88px]" />
                                            <div className="content">
                                                <h4>Play game</h4>
                                                <p>Color:Black</p>
                                                <p>Size:30</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${price}</td>
                                    <td><div className="flex justify-center">
                                        <button className="outline-none px-3 border-gray-400 border bg-gray-200" onClick={setDecrease}>-</button>
                                        <button className="outline-none px-5 border-gray-400 border bg-gray-200">{amount}</button>
                                        <button className="outline-none py-1 px-3 border-gray-400 border bg-gray-200" onClick={setIncrease}>+</button>
                                    </div></td>
                                    <td className='hidden md-2:block'>
                                        ${amount * price}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="w-[100%] sm:w-[100%] md:w-[35%] border lg:w-[30%]">
                        total
                    </div>
                </div>
            </div>
        </>
    )
}
