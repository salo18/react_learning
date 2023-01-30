import {useState} from 'react'
import memesData from './memeData'

export default function App() {
  const [meme, setMeme] = useState({
      memeImg: 'http://i.imgflip.com/1bij.jpg',
      topText: '',
      bottomText: '',
    });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const array = allMemeImages.data.memes;
    const idx = Math.floor(Math.random() * array.length);
    const imgURL = array[idx].url;

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        memeImg: imgURL,
      }
    });
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevImg => {
      return {
        ...prevImg,
        [name]: value,
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
            <input
              type='text'
              placeholder='start of meme'
              name='topText'
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              className='input2'
              type='text'
              placeholder='end of meme'
              name='bottomText'
              value={meme.bottomText}
              onChange={handleChange}
            />
            <button
              onClick={getMemeImage}>
              Get new meme image 🖼️
            </button>
          </div>
        <div className='meme-container'>
          <img className='meme-img' src={meme.memeImg}></img>
          <p className='meme-text top'>{meme.topText}</p>
          <p className='meme-text bottom'>{meme.bottomText}</p>
        </div>

      </div>
    </div>


  )
}
