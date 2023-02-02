export default function Die(props) {
  const styles = {
    backgroundColor: props.active ? '#59E391' : '#fff'
  }

  return (
    <div className='die-box' style={styles}
    // onClick={() => props.toggle(props.id)}
    onClick={props.toggle}
    >
      <p>{props.number}</p>
    </div>
  )
}