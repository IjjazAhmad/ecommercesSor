import React from 'react'
import Button from '../Button'

export default function Add() {
  return (
    <>
      <div className="adds">
        <div className="container">
          <div className="bg-img">
            <div className="flex items-center sm:me-40 md:me-52 lg:me-60 lg:mt-20 mt-16 justify-end">
              <div className="text-center">
                <Button bg='warning' title='New laptop' radius='3xl' />
                <h3 className='text-[41px] text-[#2E8FC5] font-semibold mt-6 mb-4'>Sale up to 50% off</h3>
                <p className='text-white mb-4'>12 inch hd display</p>
                <Button bg='warning' title='Shop now' radius='3xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
