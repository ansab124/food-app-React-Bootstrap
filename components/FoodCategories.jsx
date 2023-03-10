import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const FoodCategories = () => {
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
            {/* <div style={{marginTop:"100px", display: "flex", justifyContent: "center", alignItems: "center", marginLeft:"130px" }}>
                {products.map((item, index) => {
                    return <div style={{ alignItems: "center", justifyContent: "center" }} >

                        <Image style={{ width: "300px", height: "220px", margin: "10px", display: "flex", justifyContent: "center", alignItems: "center" }} src={item.image}></Image>

                        <h5 style={{ textAlign: "center", justifyContent: "center" }}>{item.h5}</h5>
                        <h3 style={{ textAlign: "center", justifyContent: "center" }}>{item.h3}</h3>
                        <p style={{ textAlign: "center", justifyContent: "center" }}>{item.p}</p>

                    </div>

                })}
            </div> */}


            <Row className='mt-5'>
                <Col md={4}>
                    <Image src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-1240x578.jpg" fluid />
                    <h5 style={{ textAlign: "center", justifyContent: "center" }}>Rezela</h5>
                    <h3 style={{ textAlign: "center", justifyContent: "center" }}>Sultan Dies Karachi Recepies</h3>
                    <p style={{ textAlign: "center", justifyContent: "center" }}>The doner is a Turkish creation of meat, often lamb, but not necessarily so</p>

                </Col>
                <Col md={4}>
                    <Image src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-1240x578.jpg" fluid />
                    <h5 style={{ textAlign: "center", justifyContent: "center" }}>Rezela</h5>
                    <h3 style={{ textAlign: "center", justifyContent: "center" }}>Sultan Dies Karachi Recepies</h3>
                    <p style={{ textAlign: "center", justifyContent: "center" }}>The doner is a Turkish creation of meat, often lamb, but not necessarily so</p>

                </Col>
                <Col md={4}>
                    <Image src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-1240x578.jpg" fluid />
                    <h5 style={{ textAlign: "center", justifyContent: "center" }}>Rezela</h5>
                    <h3 style={{ textAlign: "center", justifyContent: "center" }}>Sultan Dies Karachi Recepies</h3>
                    <p style={{ textAlign: "center", justifyContent: "center" }}>The doner is a Turkish creation of meat, often lamb, but not necessarily so</p>

                </Col>
            </Row>

        </>
    )
}

export default FoodCategories
