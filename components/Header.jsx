import Link from 'next/link';

export default function Header() {
    return (
        <header className="container">
            <div className="flex space-between align-center">
                <div className="logo"></div>
                <nav className="flex ">
                    <ul className="flex align-center">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/about">Sign up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
