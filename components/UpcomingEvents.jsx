import Link from 'next/link'

import Carousle from '../components/Carousle'

export default function UpcomingEvents({ events }) {

    return (
        <div className="upcoming-events">
            <h2>Celebrating life,<br />
                with awesome events
            </h2>
            <div className="upcoming-header flex align-center justify-center">
                <p>We want you with us!<br />
                    Tonight we are celebrating life <br /> with amazing events right here, right now.
                </p>
            </div>

            <div className="car">
                <Carousle>
                    {events.slice(0, 6).map(evt => {
                        return (
                            <article key={evt.id}>

                                <div className="upcoming-img-container">
                                    <img
                                        src={evt.image}
                                        alt={evt.name}
                                    />
                                </div>

                                <div className="upcoming-desc-container">

                                    <div className="upcoming-desc-header flex align-center space-between">
                                        <h4>{evt.name}</h4>
                                        <Link href={`/events/${evt.id}`}>Join us</Link>
                                    </div>

                                    <div
                                        className="upcoming-desc-main flex align-center space-between"
                                    >
                                        <span>{evt.date}</span>
                                        <div className="upcoming-desc-seperator"></div>
                                        <span>{evt.time}</span>
                                        <div className="upcoming-desc-seperator"></div>
                                        <span>{evt.venue}</span>
                                    </div>

                                </div>
                            </article>
                        )
                    })}
                </Carousle>
            </div>
        </div>
    )
}
