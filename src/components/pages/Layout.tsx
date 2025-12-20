import Header from "../Header/Header"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export default function Layout() {
  const navigate = useNavigate()
  useEffect(()=> {
    navigate("/Earth")
  },[])
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
