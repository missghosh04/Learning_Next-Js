"use client"
import React from 'react'

const page = () => {
  return (
    <div>
    <div className="container">
      <h1>It is an about page</h1>
      <p>This page is all about our application.</p>
      <style jsx>{`
        .container {
          padding: 20px;
          background: lightblue;
        }
      `}
      </style>
    </div>
    <div className="container">
        hello i am a next container
    </div>
    </div>
  )
}

export default page
