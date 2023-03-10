import React from 'react'
import { Image } from 'react-bootstrap'
import AboutMe from './AboutMe'

const TrendingRecepie = () => {
    return (
        <>
        <hr/>

        <div style={{marginTop:"100px"}}>
            <Image style={{width:"80%", marginLeft:"10%"}} src='https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-11-1240x578.jpg'></Image>
            <div >
            <h5 className='d-flex justify-content-center align-items-center'>Salad</h5>
            <h3 className='d-flex justify-content-center align-items-center'>Lemon Dijon</h3>
            <p className='d-flex justify-content-center align-items-center'>Paragraph..</p>
        </div>
       
        </div>

            
       
        </>
    )
}

export default TrendingRecepie
