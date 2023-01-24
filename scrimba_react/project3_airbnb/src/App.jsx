import Nav from '../components/Nav'
import Main from '../components/Main'
import Experiences from '../components/Experiences'

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Experiences
        img='./src/assets/katie-zaferes.png'
        stars='5.0'
        description='Life lessons with Katie Zaferes'
        price='$136'
        reviewCount='6'
      />
    </div>
  )
}

export default App
