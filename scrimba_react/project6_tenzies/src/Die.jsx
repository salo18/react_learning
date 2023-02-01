
export default function Die(props) {
  return (
    <div className='die-box'>
      <p>{props.number()}</p>
    </div>

  )
}