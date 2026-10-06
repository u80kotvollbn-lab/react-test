import './App.css'
import animalsData from './data/animals.json'
import type { Animal } from './types/Animal'

const animals: Animal[] = animalsData

function App() {
  return (
    <div className="animals">
      {animals.map((animal) => (
        <div key={animal.name} className="animal-card">
          <h2>{animal.name}</h2>
          <p>Continent: {animal.continent}</p>
          <p>Average speed: {animal.averageSpeed} km/h</p>
          <p>Weight: {animal.weight} kg</p>
        </div>
      ))}
    </div>
  )
}

export default App
