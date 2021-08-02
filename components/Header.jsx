import Link from 'next/link';

export default function Header() {
    return (
        <header className="container">
            <div className="flex space-between align-center">
                <div className="logo"></div>
                <nav>
                    <ul className="flex">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
