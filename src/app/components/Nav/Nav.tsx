'use client'

import React, { useState, useEffect } from 'react'
import { NavigationMenu } from 'radix-ui'
import styles from './Nav.module.scss'
import { Menu, X } from 'lucide-react'

const Nav: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  function handleHamburgerClick(): void {
    setNavIsOpen((prevState) => !prevState)
  }
  function handleScrimClick(): void {
    setNavIsOpen(false)
  }

  function handleLinkClick(): void {
    setNavIsOpen(false)
  }
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  return (
    <>
      <div className={styles.scrim} data-show={navIsOpen} onClick={handleScrimClick}></div>
      <div className={styles.hamburger} onClick={handleHamburgerClick}>
        {navIsOpen ? <X strokeWidth={2.5} /> : <Menu strokeWidth={2.5} />}
      </div>
      <NavigationMenu.Root
        className={styles.navRoot}
        data-open={navIsOpen}
        data-scrolled={scrolled}
      >
        <div className={styles.mobileNavHeader}>
          <p className={styles.mobileNavHeading}>Kim & Christian</p>
          <p className={styles.mobileNavDate}>September 6, 2025</p>
          <p className={styles.mobileNavLocation}>Richmond, VA</p>
        </div>
        <NavigationMenu.List className={styles.navList}>
          <NavigationMenu.Item className={styles.navItem} onClick={handleLinkClick}>
            <NavigationMenu.Link className={styles.navLink} href="#home">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={styles.navItem} onClick={handleLinkClick}>
            <NavigationMenu.Link className={styles.navLink} href="#our-story">
              Our Story
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={styles.navItem} onClick={handleLinkClick}>
            <NavigationMenu.Link className={styles.navLink} href="#invitation">
              Information
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={styles.navItem} onClick={handleLinkClick}>
            <NavigationMenu.Link className={styles.navLink} href="#schedule">
              Schedule
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={styles.navItem} onClick={handleLinkClick}>
            <NavigationMenu.Link className={styles.navLink} href="#schedule">
              FAQ
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={styles.navItem} onClick={handleLinkClick}>
            <NavigationMenu.Link
              className={styles.navLink}
              href="https://withjoy.com/kim-and-christian-sep-26/registry "
            >
              Registry
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </>
  )
}

export default Nav
