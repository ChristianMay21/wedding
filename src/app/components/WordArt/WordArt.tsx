import * as React from 'react'
import styles from './WordArt.module.scss'

interface WordArtProps {}

const WordArt: React.FC<WordArtProps> = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.scrollTarget} id="our-story"></div>
      <div className={styles.textContainer}>
        <div className={styles.lineOne}>
          <h1 className={styles.text}>WE&apos;RE</h1>
        </div>
        <div className={styles.lineTwo}>
          <h1 className={styles.text}>GETTING</h1>
        </div>
        <div className={styles.lineThree}>
          <h1 className={styles.text}>MARRIED</h1>
        </div>
      </div>
    </div>
  )
}

export default WordArt
