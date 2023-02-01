import {useState} from 'react'
import Die from './Die'


export default function App() {
  const [array, setArray] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <main>
      <div className='container'>
        <h1>Tenzies</h1>
        <p className='main-text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='die-container'>
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
          <Die
            number={getRandomInt}
          />
        </div>

        <button>Roll</button>
      </div>
    </main>
  )
}

