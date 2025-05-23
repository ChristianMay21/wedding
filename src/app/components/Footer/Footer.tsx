import * as React from 'react'
import { NavigationMenu } from 'radix-ui'
import styles from './Footer.module.scss'
import Image from 'next/image'

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={styles.footer}>
      Have any questions?
      <a className={styles.mailto} href="mailto:corral.may01@gmail.com">
        Contact Us
      </a>
    </footer>
  )
}

export default Footer
