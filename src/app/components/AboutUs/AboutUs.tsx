'use client'

import React, { useState, useEffect } from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import { Chrono } from 'react-chrono'

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = (props) => {
  const [chronoItems, setChronoItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/getTimelineEvents')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const result = await response.json()
      console.log(result)
      setChronoItems(result)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.aboutUs}>
      <h2 className={styles.heading}>Our Story</h2>
      <div className={styles.scrollTarget} id="our-story"></div>
      <Chrono
        items={chronoItems}
        mode="VERTICAL_ALTERNATING"
        disableToolbar={true}
        theme={{
          primary: '#1d0937',
          secondary: '#f3f0ff',
          titleColor: '#1d0937',
          cardBgColor: '#f3f0ff',
          cardTitleColor: '#1d0937',
          cardSubtitleColor: '#1d0937',
          titleColorActive: '#1d0937',
        }}
        allowDynamicUpdate={true}
      />
    </div>
  )
}

export default AboutUs
