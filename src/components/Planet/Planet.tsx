
import { useParams } from 'react-router-dom'
import data from "../../data.json"

export default function Planet() {
  const {planetName} = useParams()
  const planet = data.find((planet) => planet.name === planetName)
  console.log(planetName)
  return (
    <div>
      <h2>{planet?.name}</h2>
      <p>{planet?.overview.content}</p>
    </div>
  )
}
