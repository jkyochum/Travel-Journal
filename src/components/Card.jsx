export default function Card(props) {
    return (
        <div className="card">
            <img src={props.card.imageUrl} className="card-image" />
            <div className="location">
                <img src="./assets/location-marker.svg" alt="location marker" />
                <h3>{props.card.location}</h3>
                <p><a href={props.card.googleMapsUrl} target="_blank">View on Google Maps</a></p>
            </div>
            <h2 className="card-title">{props.card.title}</h2>
            <p className="visit-dates">{props.card.startDate} - {props.card.endDate}</p>
            <p className="description">{props.card.description}</p>
        </div>
    )
}