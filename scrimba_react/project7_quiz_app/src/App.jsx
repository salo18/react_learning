import { useState, useEffect} from 'react'
import Question from './Question'
import {nanoid} from 'nanoid'

/*
PLANNING THE APP:
- STATE - newUser -- true -- once they click "enter quiz" set to false
- make API call to get quiz questions
  - set the questions as state
- let user choose answers
  - need to keep state of the selected answer
- user clicks "check answers"
  - correct answer is compared to answer that was chosen
- compute incorrect / correct answers
*/


export default function App() {
  const [questions, setQuestions] = useState([]);
  const [answerCount, setAnswerCount] = useState(0);
  const [resultsPage, setResultsPage] = useState(false)
  // const [startGame, setStartGame] = useState(true)

  // START GAME:
  // useEffect(() => {
  //   if (startGame) {

  //   }
  // }, [startGame])

  function fixData(arr) {
    return arr.map(x => {
      return {
        ...x,
        id: nanoid(),
        all_answers: [x.correct_answer, ...x.incorrect_answers].sort(),
        userAnswer: '',
      }
    })
  }

  // API call
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=7&category=23&difficulty=easy&type=multiple')
    .then(res => res.json())
    .then(data => fixData(data.results))
    .then(data => setQuestions(data))
  }, [])

  function handleRadioChange(id, value) {
    setQuestions(old => old.map(x => {
      if (x.id === id) {
        return {
          ...x,
          userAnswer: value,
        }
      } else {
        return x;
      }
    }))
    // console.log(questions);
  }

  const questionElements = questions.map(x => {
    return <Question
              question={x.question}
              answers={x.all_answers}
              correctAnswer={x.correct_answer}
              key={x.id}
              id={x.id}
              onChange={handleRadioChange}
              showResults={resultsPage}
              // onShowResults={updateStyles}
              // userAnswer=''


              // changeMethod={() => handleRadioChange()}
              // check score?
              // checkAnswer={checkScore}
            />
  })

  // function updateStyles() {
  //

  // }


  function checkAnswers(e) {
    e.preventDefault()

    // questions.forEach(x => {
    //   if (x.correct_answer === x.userAnswer) {
    //     setAnswerCount(old => old += 1)
    //   }
    // });

    /*
    NOTES FOR TOMORROW:
      - this function is working... console logs show correct /incorrect answers....
      - need to update the styles on each iteration -- correct answer gets green text, incorrect gets red
      - not seeing checkedAnswerCorrect as a property on the questions object
      - is there a way to directly update the styles?
        - if not a function that can be called in the useEffect on line 37 in Question component that does somehow update the styles? THIS SEEMS TO BE MOST PROMISING
          --- create a function that updates styles and pass it as a prop to be called onSubmit?
    */



    setQuestions(old => old.map(x => {
      if (x.correct_answer === x.userAnswer) {
        setAnswerCount(old => old += 1)
        console.log(`${x.userAnswer} is correct`)

        return {
          ...x,
          checkedAnswerCorrect: true,
        }
      } else {
        console.log(`${x.userAnswer} is incorrect`)
        return {
          ...x,
          checkedAnswerCorrect: false,
        }
      }
    }));

    console.log(`${answerCount}/7`)
    console.log(questions)
    setResultsPage(true)
  }

  return (
    <div className="App">
      <form>
        {questionElements}
        <button type='submit' onClick={checkAnswers}>Check Answers</button>
        <button type='reset'>Reset answers</button>
      </form>
    </div>
  )
}




  // const questionElements = questions.map((x, idx) => {
  //   return (
  //     <div>
  //       <p key={idx} className='question'>{x.question}</p>
  //       <ul>
  //         {/* {x.incorrect_answers.push(x.correct_answer)} */}
  //         {x.incorrect_answers.map(y => <li>{y}</li>)}
  //         <li>{x.correct_answer}< /li>
  //       </ul>
  //     </div>
  //   )
  // })