import { Link } from "react-router-dom"
const navigation: string[] = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Naptune"]
export default function Header() {
  return (
    <div>
      <h1>THE PLANETS</h1>
      <nav>
        <ul>
          {
            navigation.map((planet) => {
              return <li key={planet}>
                <Link to={planet}>{planet}</Link>
              </li>
            })
          }
        </ul>
      </nav>
    </div>
  )
}




