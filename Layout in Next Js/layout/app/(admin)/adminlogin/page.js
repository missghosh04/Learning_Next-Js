import React from 'react'

const page = () => {
  return (
    <div>
      Admin Login
      <p>Feel free to log in as an Admin</p>
    </div>
  )
}

export default page
export async function generateMetadata({ params }) {
  return {
    title: "Admin Login",
    description: "Admin: A simple Instagram clone built with Next.js",
  };
}
