export default function Experiences(props) {
  return (
    <div className='container'>
      <div className='experience'>
        <img className='experience-main-img' src={props.img}></img>

        <div className='experience-rating'>
          <img className='star-img' src='./src/assets/star.png'></img>
          <span className='rating'>{props.stars}</span>
          <span className='rating-count'>({props.reviewCount}) - USA</span>
        </div>
        <p>{props.description}</p>
        <p><span className='price'>From {props.price}</span> / person</p>
      </div>
    </div>
  )
}