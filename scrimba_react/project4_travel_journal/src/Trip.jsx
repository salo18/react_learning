
function Trip(props) {
  return (
    <div className='trip'>
      <img className='trip-img' src={props.imageUrl}></img>
      <div className='trip-content'>
        <div className='location-info'>
          <img className='pin' src='../public/location-pin.svg'></img>
          <p className='country'>{props.location.toUpperCase()}</p>
          <a href={props.googleMapsUrl} className='google-link'>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <p className='trip-dates'>{props.startDate} - {props.endDate}</p>
        <p className='trip-description'>{props.description}</p>
      </div>
    </div>
  )
}

export default Trip
