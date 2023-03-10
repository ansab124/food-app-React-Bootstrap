import React from 'react'
import Footer from './footer'
import Header from './header'

const AppLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{paddingLeft:"40px", paddingRight:"40px"}}>{children}</main>
            <Footer />
        </>
    )
}

export default AppLayout