import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../public/img/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    const router = useRouter()
    const [hamburgerMode, setHamburgerMode] = useState(false)

    useEffect(() => {
        if (hamburgerMode) document.body.classList.add('hamburger-mode')
        else document.body.classList.remove('hamburger-mode')
    }, [hamburgerMode])

    return (
        <header className="container">
            <div className="header-container flex full space-between align-center">
                <div
                    onClick={() => router.push('/')}
                    className="logo"
                >
                    <Logo />
                </div>
                <nav>
                    <ul className="flex align-center">
                        <li onClick={() => setHamburgerMode(false)}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={() => setHamburgerMode(false)}>
                            <Link href="/events">Events</Link>
                        </li>
                        <li onClick={() => setHamburgerMode(false)}>
                            <Link href="/about">About</Link>
                        </li>
                        <li onClick={() => setHamburgerMode(false)}>
                            <Link href="/about">Sign up</Link>
                        </li>
                    </ul>
                </nav>
                <div
                    className="hamburger"
                    onClick={() => setHamburgerMode(!hamburgerMode)}
                >
                    <FontAwesomeIcon
                        icon={hamburgerMode ? faTimes : faBars}
                        size="2x"
                    />
                </div>
            </div>
        </header>
    )
}