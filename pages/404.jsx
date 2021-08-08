import Link from 'next/link'
import HeadLayout from '../components/HeadLayout'

export default function PageNotFound() {
    return (
        <section className="page-not-found container">
            <HeadLayout title="404 Page not found" />
            <div className="flex column align-center">
                <div className="pagenotfound-hero"></div>
                <h5>Sorry, there is nothing here...</h5>
                <Link href="/">
                    Go back home
                </Link>
            </div>
        </section>
    )
}
