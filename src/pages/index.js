import React from "react"
import WhyDocere from "../Layout/sections/WhyDocere"
import FAQ from "../Layout/sections/FAQ"
import Footer from "../Layout/sections/Footer"
import Header from "../Layout/header/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <WhyDocere />
      <FAQ />
      <Footer />
    </div>
  )
}
