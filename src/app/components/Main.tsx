import React, { useState } from 'react'
import styles from './Main.module.scss'
import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import FAQ from './FAQ/FAQ'
import Intro from './Intro/Intro'
import WordArt from './WordArt/WordArt'
import AboutUs from './AboutUs/AboutUs'
import Footer from './Footer/Footer'

interface MainProps {}

const Main: React.FC<MainProps> = async (props) => {
  return (
    <div className={styles.main} id="home">
      <Nav />
      <Hero />
      <WordArt />
      <div className={styles.contentSection}>
        <Intro />
        <div className={styles.content}>
          <AboutUs />
          <FAQ heading={'Invitation Information'} group={'invitation'} />
          <FAQ heading={'Schedule'} group={'schedule'} />
          <FAQ heading={'Frequently Asked Questions'} group={'faq'} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
