import {useState, useEffect} from 'react'
import Die from './Die'
import Stopwatch from './Stopwatch'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
  const [array, setArray] = useState(generateArray());

  const [win, setWin] = useState(false);

  const [count, setCount] = useState(0);

  // STOPWATCH
  const [running, setRunning] = useState(true);
  const [time, setTime] = useState(0);

  // SCORE
  const [score, setScore] = useState([]);

  const [highScore, setHighScore] = useState(score);

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
    setCount(old => old += 1);

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
    setCount(0);
    setTime(0)
    setRunning(true)
  }

  function toggleDie(id) {
    setArray(oldArr => oldArr.map(die => {
        return die.id === id ?
        {...die, active: !die.active} :
        die
      })
    )
  }

  // WIN CONDITION
  useEffect(() => {
    const firstValue = array[0].number;

    const allSameValue = array.every(x => x.number === firstValue)

    const allActive = array.every(x => x.active);

    if (allSameValue && allActive) {
      setWin(true)
    }
  }, [array])

  useEffect(() => {
    if (win) {
      setRunning(false);

      setScore(oldScore => [...oldScore, {
        minutes: ("0" + Math.floor((time / 60000) % 60)).slice(-2),
        seconds: ("0" + Math.floor((time / 1000) % 60)).slice(-2),
        rolls: count,
        key: nanoid()
      }
    ])

    }
  }, [win])

  function findHighScore(arr) {
    const newArr = [...arr];
    const sorted = newArr.sort((a, b) => a.rolls - b.rolls);
    return sorted[0];
  }


  // SET HIGH SCORE
  useEffect(() => {
    if (score.length >= 1) {
      setHighScore(findHighScore(score))
    }
  }, [score]);

  const dieElements = array.map((el, idx) => {
    return (<Die
      number={el.number}
      key={el.id}
      active={el.active}
      toggle={() => toggleDie(el.id)}
    />)
  })

  const scoreElements = score.map(el => {
    return <p>Time: {el.minutes}:{el.seconds} // Rolls: {el.rolls}</p>
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
      <p className='counter'>You have rolled {count} times</p>
      <Stopwatch
        running={running}
        time={time}
        setTime={setTime}
      />

      <div className='scores'>

      <p className='scores-text'>High Score (lowest rolls): </p>
        {highScore.rolls &&
          <p>{highScore.minutes}:{highScore.seconds} // Rolls: {highScore.rolls}</p>
        }

        <p className='scores-text'>Past Games:</p>
        {scoreElements}
      </div>
      </div>
    </main>
  )
}

