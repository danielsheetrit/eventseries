import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export default function Categories() {
    return (
        <div className="categories">
            <div className="categories-header">
                <h3>
                    When it's time to party,<br /> we party hard, eh.
                </h3>
                <p>Here are 4 party categories, <br />
                    which we think will make your night unforgettable.
                </p>
            </div>
            <div className="categories-grid">
                <article className="flex align-center">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/dvbojtbzc/image/upload/v1628427191/angie-stewart-oHJAzWgr6Cc-unsplash_bwlgns.jpg"
                            alt="party" />
                    </div>
                    <div className="flex column">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h5>Parties · Clubs · Roof tops</h5>
                        <p>Join hundred of beautiful people in tonight party.</p>
                        <Link href="/">Check this out →</Link>
                    </div>
                </article>
                <article className="flex align-center">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/dvbojtbzc/image/upload/v1628427010/jacob-morch-ZCQjX2_z4SM-unsplash_zjolkr.jpg"
                            alt="concert" />
                    </div>
                    <div className="flex column">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h5>Concerts · Music · Art</h5>
                        <p>Your favorite singer at your favorite place,
                            <br /> with your best friends.
                        </p>
                        <Link href="/">Check this out →</Link>
                    </div>
                </article>
                <article className="flex align-center">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/dvbojtbzc/image/upload/v1628428382/steven-lasry-_bMO6KKZArM-unsplash_uc7ano.jpg"
                            alt="festivals" />
                    </div>
                    <div className="flex column">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h5>Festivals · Fairs · Parades</h5>
                        <p>Join us for a magical journey, <br />
                            thousands already attend.</p>
                        <Link href="/">Check this out →</Link>
                    </div>
                </article>
                <article className="flex align-center">
                    <div className="category-img">
                        <img src="https://res.cloudinary.com/dvbojtbzc/image/upload/v1628427645/5e73d28123000055280c65ea_uehjsn.jpg"
                            alt="" />
                    </div>
                    <div className="flex column">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h5>Online Parties</h5>
                        <p>It's a cold evening and we are all here in one place.</p>
                        <Link href="/">Check this out →</Link>
                    </div>
                </article>
            </div>
        </div>
    )
}
