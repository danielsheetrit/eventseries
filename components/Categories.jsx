/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import Image from 'next/image'

import { imgService } from '../services/img.service'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Categories() {
    return (
        <div className="categories">
            <div className="categories-header">
                <h2>
                    When it's time to party,<br /> we party hard, eh.
                </h2>
                <p>Here are 4 party categories, <br />
                    which we think will make your night unforgettable.
                </p>
            </div>
            <div className="categories-grid">
                <article className="flex">
                    <div className="category-img">
                        <Image
                            src={imgService.party}
                            alt={"party"}
                            width={640}
                            height={640}
                        />
                    </div>
                    <div className="category-main flex column">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h5>Parties · Clubs · Roof tops</h5>
                        <p>Join hundred of beautiful people in tonight party.</p>
                        <Link href="/">
                            <a>
                                <FontAwesomeIcon icon={faChevronRight} />
                                Check this out
                            </a>
                        </Link>
                    </div>
                </article>

                <article className="flex">
                    <div className="category-img">
                        <Image
                            src={imgService.concert}
                            alt={"concert"}
                            width={640}
                            height={640}
                        />
                    </div>
                    <div className="category-main flex column">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h5>Concerts · Music · Art</h5>
                        <p>Your favorite singer at your favorite place,
                            <br /> with your best friends.
                        </p>
                        <Link href="/">
                            <a>
                                <FontAwesomeIcon icon={faChevronRight} />
                                Check this out
                            </a>
                        </Link>
                    </div>
                </article>

                <article className="flex">
                    <div className="category-img">
                        <Image
                            src={imgService.festival}
                            alt={"festivals"}
                            width={640}
                            height={674}
                        />
                    </div>
                    <div className="category-main flex column">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h5>Festivals · Fairs · Parades</h5>
                        <p>Join us for a magical journey, <br />
                            thousands already attend.</p>
                        <Link href="/">
                            <a>
                                <FontAwesomeIcon icon={faChevronRight} />
                                Check this out
                            </a>
                        </Link>
                    </div>
                </article>

                <article className="flex">
                    <div className="category-img">
                        <Image
                            src={imgService.onlineParty}
                            alt={"online-party"}
                            width={630}
                            height={695}
                        />
                    </div>
                    <div className="category-main flex column">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <h5>Online Parties</h5>
                        <p>It's a cold evening and we are all here in one place.</p>
                        <Link href="/">
                            <a>
                                <FontAwesomeIcon icon={faChevronRight} />
                                Check this out
                            </a>
                        </Link>
                    </div>
                </article>

            </div>
        </div>
    )
}