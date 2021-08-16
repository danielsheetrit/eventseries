import { API_URL } from '../../config/index'
import axios from 'axios'

export default function costumeEevent({ evt }) {
    console.log(evt);
    return (
        <div>
            <h1>balagan</h1>
        </div>
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
