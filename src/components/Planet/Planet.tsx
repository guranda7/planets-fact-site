
import { useParams } from 'react-router-dom'
import data from "../../data.json"
import { useState } from 'react'
export default function Planet() {
  const {planetName} = useParams()
  const planet = data.find((planet) => planet.name === planetName)
  console.log(planetName)

  
  const [active, setActive] = useState("overview")
  let content = "";
  if (!planet) {
  return <p>Planet not found</p>;
}

  if(active === "overview") {
    content = planet?.overview.content
  }
  if (active === "structure") {
    content = planet?.structure.content
  }
  if (active === "geology"){
    content = planet?.geology.content
  }

                                          
  return (
    <div>
      <h2 >{planet?.name}</h2>
      <p>{content}</p>

      <div>
        <button onClick={() => setActive("overview")}>01 OVERVIEW</button>
        <button onClick={() => setActive("structure")}>02 INTERNAL STRUCTURE</button>
        <button onClick={() => setActive("geology")}>03 SURFACE GEOLOGY</button>
      </div>
    </div>

    


  )
}
