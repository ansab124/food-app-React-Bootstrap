import React from 'react'
import { Col, Container, Image, Row,} from 'react-bootstrap'

const VerticalProducts = () => {
    const products = [{
        image: "https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-1240x578.jpg",
        h5: "Rezela",
        h3: "Sultan Dies Karachi Recepies",
        p: "The doner is a Turkish creation of meat, often lamb, but not necessarily so",

    },
    {
        image: "https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-1240x578.jpg",
        h5: "Rezela",
        h3: "Sultan Dies Karachi Recepies",
        p: "The doner is a Turkish creation of meat, often lamb, but not necessarily so"
    },
    {
        image: "https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-1240x578.jpg",
        h5: "Rezela",
        h3: "Sultan Dies Karachi Recepies",
        p: "The doner is a Turkish creation of meat, often lamb, but not necessarily so"
    }
    ]
    return (
        <>
            <div className='row' style={{marginLeft:"100px", marginTop:"130px"}}>
                {products.map((item, index) => {
                    return  <div className='col-12' style={{display:"flex" }} >

                        <Image style={{ width: "300px", height: "220px", margin: "10px", justifyContent: "center", alignItems: "center" }} src={item.image}></Image>
                
                    <div>
                        <h5 style={{ textAlign: "center", justifyContent: "center" }}>{item.h5}</h5>
                        <h3 style={{ textAlign: "center", justifyContent: "center" }}>{item.h3}</h3>
                        <p style={{ textAlign: "center", justifyContent: "center" }}>{item.p}</p>
                        </div>
                        </div>

                })}
            </div>


        </>
    )
}

export default VerticalProducts
