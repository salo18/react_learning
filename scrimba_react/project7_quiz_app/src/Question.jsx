/*
What should each answer be? An LI or a button?
  - button
How to keep track of which element is pressed?
  - onClick event on each component that knows if the answer is correct because of the correct answer prop
  - how to keep track of when to calculate correct or incorrect answers?
    - create a state(false) 'trackAnswers' that gets passed when the "check answers" button gets clicked (set to true)

How to keep track of the score??
  - need to somehow aggregate the data of each question

  - delete this question component
  - when its time to compare results
    - setQuestions -- add a "userResponse" key and pass in value
    - compare userResponse with correct answer
    - add a new key 'score', put 0 if incorrect and 1 if correct
  - iterate through questions and add up the values of the `score` keys

Alternative
  - create a function in App that gets passed as a prop to Question
  - inside App, iterate through each question and return a new array that contains a `scores` key

  function checkScore() {
  setQuestions(old => old.map(q => {
    return q.correct_answer[0] ===
  }))
}

bad because there is no way to update the state of each component (is the answer correct) and pass this up for checkScore to use in App... need to go with first answer

*/

import { useEffect } from "react"


export default function Question(props) {
  useEffect(() => {
    if (props.showResults) {
      props.answers.map(answer => {
        // console.log(props);
      })
    }
  }, [props.showResults]);

  const styles = {
    // color: props.showResults ? '#94D7A2' : '#F8BCBC'
  }

const answers = props.answers.map(answer => {
  return (
    <div>
      <input
        id={props.id}
        name={props.id}
        value={answer}
        type='radio'
        onChange={() => props.onChange(props.id, answer)}
        // checked={props.userAnswer === {answer}}
      />
     <label htmlFor={props.id} style={styles}>{answer}</label>
    </div>
  )
})

  return (
    <div>
      <label htmlFor={props.id} id={props.id}>{props.question}
        {answers}
      </label>



      {/* <p className='question'>{props.question}</p>
      <ul>

      </ul> */}
    </div>
  )
}