import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-amber-950 flex justify-between px-7 py-2'>
        <div className="logo">Facebook</div>
      <ul className='flex gap-5'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/contact'><li>Contact</li></Link>
        <Link href='/about'><li>About</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
