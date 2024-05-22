import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/logo.png'
import styles from './MainHeader.module.css'
import Image from 'next/image'
import MainHeaderBackground from '../MainHeaderBackground/MainHeaderBackground'

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={Logo} alt="NextLevel Food" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/meals"> Browse meals</Link>
                        </li>
                        <li>
                            <Link href="/community"> Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader
