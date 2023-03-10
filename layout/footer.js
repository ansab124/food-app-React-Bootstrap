import React from 'react'
import { Image } from 'react-bootstrap'

const footer = () => {

  return (
    <div className='bg-black mt-5 p-5 '>
      <div className="d-flex justify-content-center align-items-center p-3">
        <Image src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/logo-light.png"></Image>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", color:"white", padding:"15px", listStyleType:"none"}}>
        <li style={{paddingLeft:"80px"}}>0 Fans</li>
        <li style={{paddingLeft:"80px"}}>0 Fans</li>
        <li style={{paddingLeft:"80px"}}>0 Fans</li>
        <li style={{paddingLeft:"80px"}}>0 Fans</li>
        <li style={{paddingLeft:"80px"}}>0 Fans</li>
      </div>
      <div className='p-3 text-white d-flex justify-content-center align-items-center'>
        <p className='mt-4'>© 2020 Ranna. All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default footer
