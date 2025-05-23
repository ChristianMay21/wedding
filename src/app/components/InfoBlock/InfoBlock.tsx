import * as React from 'react'
import { NavigationMenu } from 'radix-ui'
import styles from './InfoBlock.module.scss'
import Image from 'next/image'

interface InfoBlockProps {
  title: string
  bodyText: string
  sectionId: string
}

const InfoBlock: React.FC<InfoBlockProps> = (props) => {
  return (
    <section>
      <h2 className={styles.infoBlock}></h2>
      <p className={styles.bodyText}></p>
    </section>
  )
}

export default InfoBlock
