'use client'

import React, { useState } from 'react'
import styles from './Section.module.scss'
import { Triangle } from 'lucide-react'

interface SectionProps {
  children: React.ReactNode
  headingText: string
  headingId: string
}

const Section: React.FC<SectionProps> = (props) => {
  function handleHeadingClick(): void {
    setIsOpen((prevState) => !prevState)
    if (!isOpen) {
      setTimeout(scrollContentsIntoView, 300)
    }
  }

  function scrollContentsIntoView() {
    const element = document.getElementById(props.headingId + 'contents')
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={styles.scrollTarget} id={props.headingId}></div>
      <section className={styles.section}>
        <div className={styles.headingSection} onClick={handleHeadingClick}>
          <h2 className={styles.heading}>{props.headingText}</h2>
          <div className={styles.caretContainer} data-rotate-caret={isOpen}>
            <Triangle strokeWidth={2.5} size={24} color={'#1d0937'} fill={'#1d0937'} />
          </div>
        </div>
        <div className={styles.contents} data-open={isOpen}>
          <div className={styles.scrollTarget} id={props.headingId + 'contents'}></div>
          {props.children}
        </div>
      </section>
    </>
  )
}

export default Section
