import { useState } from 'react'
import Box from './Box'
import boxes from './boxes'

export default function App() {
  const [boxArr, setBoxArr] = useState(boxes);

  function toggle(id) {
      setBoxArr(prevArr => {
        return prevArr.map(box => {
          return box.id === id ? {...box, on: !box.on} : box;
        })
      })
  }

  const boxElements = boxArr.map(box => {
    return <Box
      key={box.id}
      toggle={() => toggle(box.id)}
      on={box.on}
      />
  })

  return (
    <div className='container'>
      {boxElements}
    </div>
  )
}


// export default function App() {
//   const [boxArr, setBoxArr] = useState(boxes);

//   const boxElements = boxArr.map(box => {
//     return <Box
//       key={box.id}
//       onOff={box.on}
//       />
//   })

//   return (
//     <div className='container'>
//       {boxElements}
//     </div>
//   )
// }

