import { useState } from 'react'
import Box from './Box'
import boxes from './boxes'

function App() {
  const [boxArr, setBoxArr] = useState(boxes);
  console.log(boxArr);
  const boxElements = boxArr.map(box => {
    return <Box key={box.id} onOff={box.on} />
  })

  return (
    <div className='container'>
      {boxElements}
    </div>
  )
}

export default App
