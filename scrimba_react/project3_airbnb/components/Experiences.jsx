export default function Experiences(props) {
  let badgeText;
  if (!props.openSpots) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
}

  return (
    // <div className='card'>
      <div className='experience'>
        {badgeText  && <div className='experience-badge'>{badgeText}</div>}
        <img className='experience-main-img' src={`../public/experience_images/${props.coverImg}`}></img>
        <div className='experience-rating'>
          <img className='star-img' src='./src/assets/star.png'></img>
          <span className='rating'>{props.stats.rating}</span>
        <span className='rating-count'>({props.stats.reviewCount}) - {props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='price'>From ${props.price}</span> / person</p>
      </div>
    // </div>
  )
}