import React from 'react'

export default function TopBar() {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <nav className="text-center lightBlack md:flex items-center justify-between py-4">
            <div>
              <p>Need help? Call us: (+98) 0234 456 789</p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center mx-2">
                <i className="fa fa-location-dot me-3 lightBlack"></i>
                <p>Our store</p>
              </div>
              <div className="flex items-center mx-2">
                <i className="fa fa-truck-fast me-3 lightBlack"></i>
                <p>Track your order</p>
              </div>
            </div>
          </nav>

        </div>
      </div>

    </>
  )
}
