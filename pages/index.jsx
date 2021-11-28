import { API_URL } from '../config/index'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Categories from '../components/categories'
import Header from '../components/Header'
import UpcomingEvents from '../components/UpcomingEvents'

export default function Home({ events }) {

  return (
    <section className="home container">
      <Header />

      <div
        className="hero flex full column align-center"
      >

        <h2>
          All the crazy sh*t i did tonight, <br />
          those will be the best memories
        </h2>

        <span>
          ▪ David Guetta ft Kid Cudi
        </span>

        <button>
          <FontAwesomeIcon icon={faChevronRight} />
          Find a party for tonight
        </button>

        <div className="scroll-down-animation"></div>

      </div>

      <UpcomingEvents {...events} />
      <Categories />

    </section>
  )
}

export async function getStaticProps() {
  const res = await axios.get(`${API_URL}/api/events`)
  const events = await res.data
  return {
    props: {
      events
    },
    revalidate: 1
  }
}