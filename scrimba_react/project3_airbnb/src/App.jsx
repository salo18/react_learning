import Nav from '../components/Nav'
import Main from '../components/Main'
import Experiences from '../components/Experiences'
import data from '../data'
console.log(data);
function App() {
  const experiencesData = data.map(item => {
    return (
      <Experiences
        key={item.id}
        {...item}
        // item={item}
        // title={exp.title}
        // description={exp.description}
        // price={exp.price}
        // img={exp.coverImg}
        // stars={exp.stats.rating}
        // reviewCount={exp.stats.reviewCount} location={exp.location}
        // openSpots={exp.openSpots}
      />
    )
  })

  return (
    <div>
      <Nav />
      <Main />
      <div className='card'>
        {experiencesData}
      </div>
    </div>
  )
}

export default App


// src={`../src/experience_images{props.img}`}