import * as React from 'react'
import styles from './Intro.module.scss'

import Image from 'next/image'
import Section from '../Section/Section'
import WordArt from '../WordArt/WordArt'
import { MapPin, Calendar } from 'lucide-react'

interface IntroProps {}

const Intro: React.FC<IntroProps> = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.eventName}>And we want you to come!</div>
      {/*<div className={styles.gettingMarried}>are getting married</div>*/}
      <div className={styles.infoRow}>
        <div className={styles.details}>
          <span className={styles.detailItem}>
            <span className={`${styles.iconWrapper} ${styles.mapWrapper}`}>
              <MapPin strokeWidth={2.5} size={24} color={'#6c59ed'}></MapPin>
            </span>
            <span className={styles.detailText}>
              The Hippodrome,
              <br className={styles.forceBreak} /> Richmond, VA
            </span>
          </span>
          <span className={styles.detailItem}>
            <span className={styles.iconWrapper}>
              <Calendar strokeWidth={2.5} size={24} color={'#6c59ed'} />
            </span>
            <span className={styles.detailText}>September 6, 2025</span>
          </span>
        </div>
      </div>
      <div className={styles.rsvp}>
        <div className={styles.rsvpLink}>
          <span className={styles.rsvpLinkContent}>To RSVP, check your email! </span>
        </div>
        <div className={styles.rsvpDate}>Please RSVP by August 9th, 2025</div>
      </div>
    </div>
  )
}

export default Intro
