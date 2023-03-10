import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SubHeader from '@/components/SubHeader'
import Hero from '@/components/Hero'
import FoodCategories from '@/components/FoodCategories'
import TrendingRecepie from '@/components/TrendingRecepie'
import AboutMe from '@/components/AboutMe'
import VerticalProducts from '@/components/VerticalProducts'
import Products from '@/components/Products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <main>
        <SubHeader />
        <Hero />
        <FoodCategories/>
        <div style={{ display: "flex", padding: "10px", margin:"80px" }}>
          <TrendingRecepie />
          <AboutMe />
        </div>
        <Products/>
       
        <VerticalProducts />
      </main>
    </>
  )
}
