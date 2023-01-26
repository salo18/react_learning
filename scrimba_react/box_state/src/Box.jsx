import {useState} from 'react'

export default function Box(props) {
  const [onOff, setOnOff] = useState(props.on);

  function handleClick() {
    setOnOff(prev => prev ? false : true)
  }

  const styles = {
    backgroundColor: onOff ? '#FF5A5F' : 'transparent',

    color: onOff ? '#242424' : '#fff',
  }

  return (
  <div style={styles} className='box' onClick={handleClick}>{onOff ? 'on' : 'off'}</div>
  )
}