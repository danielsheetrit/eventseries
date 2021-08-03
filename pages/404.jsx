import Link from 'next/link'

export default function PageNotFound() {
    return (
        <section className="page-not-found container">
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
