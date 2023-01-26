// import {useState} from 'react'

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? '#FF5A5F' : 'transparent',

    color: props.on ? '#242424' : '#fff',
  }

  return (
    <div
      style={styles}
      className='box'
      onClick={props.toggle}
    >{props.on ? 'on' : 'off'}</div>
  )
}

// export default function Box(props) {
//   const [onOff, setOnOff] = useState(props.on);

//   function handleClick() {
//     setOnOff(prev => prev ? false : true)
//   }

//   const styles = {
//     backgroundColor: onOff ? '#FF5A5F' : 'transparent',

//     color: onOff ? '#242424' : '#fff',
//   }

//   return (
//   <div style={styles} className='box' onClick={handleClick}>{onOff ? 'on' : 'off'}</div>
//   )
// }