import me from '../src/assets/me.png'
export default function Main() {
  return (
    <div>
      <img src={me} className='img-main'></img>
      <div className='main-content'>
        <h1>Surfer Joe</h1>
        <h2>Big Wave Surfer</h2>
        <p>surferjoe.com</p>
      </div>
      <div className='links'>
        <a href='https://unsplash.com/photos/_CFv3bntQlQ'>Unsplash</a>
        <a href='https://www.youtube.com/results?search_query=big+wave+surfer'>Youtube</a>
      </div>
    </div>
  )
}