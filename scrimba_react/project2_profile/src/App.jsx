import me from './assets/me.png'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import './App.css'


function App() {
  return (
    <div className='main-container'>
      <Main />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
