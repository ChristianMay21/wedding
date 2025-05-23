import * as React from 'react'
import { NavigationMenu } from 'radix-ui'
import styles from './Hero.module.scss'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <Image
      className={styles.heroImage}
      width={1920}
      height={1080}
      src="/images/header_image.gif"
      alt="A simple, stylized animation of the Hippodrome Theater in downtown Richmond. A couple - Kim and Christian - are holding each other, welcoming you to their wedding. The stars twinkle - marquee signs blink on the theater - and a trio of welcoming balloons wave in the wind."
    />
  )
}

export default Hero
