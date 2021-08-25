export default function EventArrangements({ address, date, time, facility }) {
    return (
        <div className="event-arrangements">
            <p>Adress: {address}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Facility: {facility}</p>
        </div>
    )
}
