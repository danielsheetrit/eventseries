import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../public/img/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header({ linksColor, container }) {

    const router = useRouter()
    const [hamburgerMode, setHamburgerMode] = useState(false)

    useEffect(() => {
        if (hamburgerMode) document.body.classList.add('hamburger-mode')
        else document.body.classList.remove('hamburger-mode')
    }, [hamburgerMode])

    return (
        <header className={container}>
            <div className="flex space-between align-center">
                <div
                    onClick={() => router.push('/')}
                    className="logo"
                >
                    <Logo />
                </div>
                <nav>
                    <ul className="flex align-center">
                        <li onClick={() => setHamburgerMode(false)}>
                            <Link href='/'>
                                <a style={{ color: linksColor }}>Home</a>
                            </Link>
                        </li>
                        <li onClick={() => setHamburgerMode(false)}>
                            <Link href="/events">
                                <a style={{ color: linksColor }}>Events</a>
                            </Link>
                        </li>
                        <li onClick={() => setHamburgerMode(false)}>
                            <Link href="/about">
                                <a style={{ color: linksColor }}>About</a>
                            </Link>
                        </li>
                        <li onClick={() => setHamburgerMode(false)}>
                            <Link href="/about">
                                <a>Sign up</a>
                            </Link>
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

Header.defaultProps = {
    linksColor: 'white',
    container: '',
    fill: '#222222'
}