import React from 'react'
import Script from 'next/script'
const page = () => {
  return (
    <div>
      <script>
        { `alert("Welcome to Contact page")`}
      </script>
      hey i am contact....
    </div>
  )
}

export default page
export const metadata = {
  title: " Contact info of Facebook",
  description: "it is the description Contact the facebook",
};
