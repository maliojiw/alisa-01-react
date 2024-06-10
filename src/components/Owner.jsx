import React from 'react'
import Nav from './Nav'

export default function Owner() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
      <Nav /> //calling mf nav
      <main className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">ALISA - Gen E - 01</h2>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 max-w-screen-lg	">
          <div className="w-64 h-64 flex items-center justify-center mb-4 overflow-hidden rounded-full">
            <img 
              src="https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Owner profile" 
              className="object-cover h-full w-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Short Biography</h3>
          <p className="text-center text-gray-600 leading-relaxed">
            I am a graduate of Generation's Junior Software Developer Bootcamp with skills in the MERN Stack 
            MongoDB, Express.js, React, Node.js. I have a passion for online marketing, SEO, and ASO, and aim to combine 
            my technical and marketing knowledge for impactful digital solutions. As an experienced TikTok creator, I excel 
            in content creation, audience engagement, and trend analysis. My proficiency in affiliate marketing enhances 
            my ability to promote products and services. My background in software development, online marketing, 
            and social media equips me to contribute to dynamic and innovative projects.
          </p>
        </div>
      </main>
    </div>
    </div>
  )
}
