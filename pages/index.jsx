import { API_URL } from '../config/index'
import axios from 'axios'
import Categories from '../components/categories'

export default function Home({ events }) {

  return (
    <section className="home container">
      <div className="hero flex column align-center justify-center">
        <h2>
          All the crazy sh*t i did tonight, <br />
          those will be the best memories
        </h2>
        <span>
          ▪ David Guetta ft Kid Cudi
        </span>
        <button>
          Find a party for tonight ➝
        </button>
        <div className="scroll-down-animation"></div>
      </div>
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