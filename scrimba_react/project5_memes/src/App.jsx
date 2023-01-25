import {useState} from 'react'
import memesData from './memeData'

function App() {
  const [imageObj, setImage] = useState(
    {
      memeImg: 'http://i.imgflip.com/1bij.jpg',
      topText: '',
      bottomText: '',
    });

  function getMemeImage() {
    const array = memesData.data.memes;
    const idx = Math.floor(Math.random() * array.length);
    const imgURL = array[idx].url;

    setImage(prevObject => {
      return {
        memeImg: memeImg.imgURL,
        topText: '',
        bottomText: '',
      }
    });
  }

  return (
    <div>
      <nav>
        <img src='../public/troll_face.png'></img>
        <p>Meme Generator</p>
      </nav>

      <div className='container'>
          <div className='form'>
            <input type='text' placeholder='start of meme' ></input>
            <input className='input2' type='text' placeholder='end of meme'></input>
            <button onClick={getMemeImage}>Get new meme image 🖼️ </button>
          </div>
        <img className='meme' src={imageObj.memeImg}></img>
      </div>
    </div>


  )
}

export default App
