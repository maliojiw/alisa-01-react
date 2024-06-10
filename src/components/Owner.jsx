import React from 'react'
import Nav from './Nav'

export default function Owner() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
      <Nav /> 
      <main className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">ALISA - Gen E - 01</h2>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 max-w-screen-lg	">
          <div className="w-64 h-64 flex items-center justify-center mb-4 overflow-hidden rounded-full">
            <img 
              src="https://img2.pic.in.th/pic/56902419_2123143234469096_4356620653885915136_n.jpg" 
              alt="Profile" 
              className="object-cover h-full w-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">About me</h3>
          <p className="text-center text-gray-600 leading-relaxed">
          I'm Egg, and this project is part of the JSD7 Boostcamp. I spent half a day working on it using React.js.
          </p>
        </div>
      </main>
    </div>
    </div>
  )
}
