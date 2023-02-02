import {useState, useEffect} from 'react'
import Die from './Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
  const [array, setArray] = useState(generateArray());

  const [win, setWin] = useState(false);

  function generateArray() {
    let arr = []
    for (let i = 0; i < 10; i += 1) {
       arr.push({
        number: getRandomInt(),
        active: false,
        id: nanoid(),
      });
    }
    return arr;
  }

  function getRandomInt() {
    return Math.ceil(Math.random() * 6)
  }

  function rollDice() {
    setArray(prev => prev.map(x => {
        return x.active ?
        x :
        {...x , number: getRandomInt()}
      })
    );

    if (win) {
      resetGame();
    }
  }

  function resetGame() {
    setArray(generateArray());
    setWin(false);
  }

  function toggleDie(id) {
    setArray(oldArr => oldArr.map(die => {
        return die.id === id ?
        {...die, active: !die.active} :
        die
      })
    )
  }

  useEffect(() => {
    const firstValue = array[0].number;

    const allSameValue = array.every(x => x.number === firstValue)

    const allActive = array.every(x => x.active);

    if (allSameValue && allActive) {
      setWin(true)
      console.log('YOU WIN')
    }
  }, [array])

  const dieElements = array.map((el, idx) => {
    return (<Die
      number={el.number}
      key={el.id}
      active={el.active}
      toggle={() => toggleDie(el.id)}
    />)
  })

  return (
    <main>
      {win && <Confetti />}
      <div className='container'>
        <h1>Tenzies</h1>
        <p className='main-text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='die-container'>
          {dieElements}
        </div>

        <button
          onClick={rollDice}
          >{win ? `New Game` : `Roll`}
        </button>

      </div>
    </main>
  )
}

