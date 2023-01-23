import youtube from '../src/assets/youtube1.png'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <a href='https://www.youtube.com/watch?v=GJc4Ir78KdE'>
          <img src={youtube}></img>
        </a>
        <a href='https://www.youtube.com/watch?v=f8ehT_VyyT8'>
          <img src={youtube}></img>
        </a>
        <a href='https://www.youtube.com/watch?v=AA33nfFjiRk'>
          <img src={youtube}></img>
        </a>
        <a href='https://www.youtube.com/watch?v=hyI0lRrG4LA'>
          <img src={youtube}></img>
        </a>
      </div>
    </div>
  )
}