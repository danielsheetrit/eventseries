import { API_URL } from '../../config/index'
import axios from 'axios'

import Header from '../../components/Header'
import NiceAccordion from '../../components/NiceAccordion'
import EventArrangements from '../../components/EventArrangements'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function costumeEevent({ evt }) {

    console.log(evt);
    return (
        <section className="container">
            <Header linksColor="#222222" />
            <div className="single-event">
                <div className="single-event-header">
                    <h1>{evt.name}</h1>
                    <div className="flex align-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>{evt.venue}</p>
                    </div>
                </div>
                <div className="single-event-main flex">
                    <div className="single-event-img">
                        <img src={evt.image} alt="" />
                    </div>
                    <div className="accrodion-container">
                        <NiceAccordion
                            head="Description"
                            content={evt.description}
                        />
                        <NiceAccordion
                            head="Performers"
                            content={evt.performers}
                        />
                        <NiceAccordion
                            head="Date, time and Adress"
                            content={<EventArrangements
                                address={evt.address}
                                date={evt.date}
                                time={evt.time}
                                facility={evt.venue}
                            />}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps({ query: { id } }) {

    const res = await axios.get(`${API_URL}/api/events/${id}`)
    const event = res.data

    return {
        props: {
            evt: event[0]
        }
    }
}
