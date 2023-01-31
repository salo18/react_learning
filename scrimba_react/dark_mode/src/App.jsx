import {useState} from 'react'
import Nav from './Nav'
import Main from './Main'
import './index.css'

export default function App() {
  const [darkModeVal, setDarkMode] = useState(false);

  function toggleDarkMode() {
     setDarkMode(prev => !prev);
  }

  return (
    <div className="container">
      <Nav
        darkMode={darkModeVal}
        toggleDarkMode={toggleDarkMode}
      />
      <Main
        darkMode={darkModeVal}
      />
    </div>
  )
}


