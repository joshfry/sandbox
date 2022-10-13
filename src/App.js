import './App.css'
import mountainImage from './assets/images/mountains.jpg'

function App() {
  return (
    <div className="App">
      {/* <div className="backgoundImage" style={{ backgroundImage: `url(${mountainImage})` }} /> */}
      <div className="container">
        <img src={mountainImage} alt="Mountains" />
      </div>
    </div>
  )
}

export default App
