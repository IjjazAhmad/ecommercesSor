import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeproduct, deleteproduct } from '../../Redux/Sclice/cartSlice';

export default function Cart() {
  const [amount, setAmount] = useState(1)
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  console.log("🚀 ~ Cart ~ cart:", cart)
  const deleteall = () => {
    dispatch(deleteproduct())
  };


  return (
    <>
      <div className="container mx-auto my-8">
        {cart.length
          ? <div className="flex flex-wrap">
            <div className="w-[100%] sm:w-[90%] mx-auto sm:mx-0 md:w-[70%] lg:w-[75%]">
              <div className="relative overflow-x-auto shadow-md mb-8">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-gray-700 uppercase bg-footer">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        SubTotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, i) => {

                      const setDecrease = () => {
                        amount > 1 ? setAmount(amount - 1) : setAmount(1)
                      }
                      const setIncrease = () => {
                        amount < item.max ? setAmount(amount + 1) : setAmount(item.max)
                      }

                      let title = item.name.slice(0, 15)
                      return (
                        <tr key={i} className='border-y-2 relative'>
                          <th scope="row" className="px-6 py-3 font-medium">
                            <div className="flex items-center">
                              <img src={item.image} alt="image" className='min-w-[50px] min-h-[50px] max-w-0 me-4' />
                              {title}
                            </div>
                          </th>
                          <td className="px-6 py-3">
                            ${Math.round(item.price)}
                          </td>
                          <td className="px-6 py-3">
                            <div className="flex ms-3">
                              <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setDecrease}>-</button>
                              <button className="outline-none py-2 px-7 border-gray-950 border bg-gray-200">{amount}</button>
                              <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setIncrease}>+</button>
                            </div>
                          </td>
                          <td className="px-6 py-3">
                            {/* {setsubtotal(amount * item.price)} */}
                            ${Math.round(amount * item.price)}
                          </td>
                          <button className='btn absolute right-4 top-8' onClick={() => dispatch(removeproduct(item.id))}><i className="fa-regular fa-circle-xmark"></i></button>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap justify-between items-center font-medium">
                <Link to={'/shop'} className='bg-warning text-white py-3 px-8 uppercase rounded-full'>Continue shopping</Link>
                <Link className='text-[#C33131] border-2 border-[#C33131] py-3 px-8 uppercase rounded-full' onClick={deleteall}>Clear cart</Link>
              </div>
            </div>
            <div className="w-[100%] sm:w-[90%] mx-auto sm:mx-0 md:w-[30%] lg:w-[25%]">
              <h2 className='text-xs text-gray-700 uppercase bg-footer text-center border-2 border-b-0 font-bold py-3'>Cart Total</h2>
              <div className="border-2 border-t-0 px-8">
                <div className="flex flex-wrap justify-between my-5 font-semibold">
                  <span>SubTotal</span> <span>$457674</span>
                </div>
                <hr />
                <div className="flex flex-wrap justify-between my-5 font-semibold">
                  <span>SubTotal</span> <span>$457674</span>
                </div>
              </div>
            </div>
          </div>
          : <>
            <h1 className='text-[55px]'>
              <span className='text-primary'>No</span>
              <span className='text-warning text-[50px]'> Product</span>
              <span className='text-primary'> Your</span>
              <span className='text-warning text-[50px]'> Cart</span>
            </h1>
            <br />
            <Link to={'/shop'} className='bg-warning text-white py-3 px-8 uppercase rounded-full'>Continue shopping</Link>
          </>

        }
      </div>
    </>
  )
}
