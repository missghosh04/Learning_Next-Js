import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='container flex mx-auto bg-red-500 min-h-[90vh] relative'>
      <Image  priority={true} fill={true} objectFit='cover' src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt='piture of peacook feather'/>
      i am Homepage
    </div>
  )
}

export default page

