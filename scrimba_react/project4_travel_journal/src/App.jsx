import reactLogo from './assets/react.svg'
import data from './data'
import Trip from './Trip'
import Nav from './Nav'


function App() {
  const tripData = data.map(trip => {
    return (
      <Trip
        key={trip.id}
        {...trip}
      />
    )
  })
  console.log(data);
  return (
    <div>
      <Nav />
      <div className='trips-container'>
        {tripData}
      </div>
    </div>
  )
}

export default App
