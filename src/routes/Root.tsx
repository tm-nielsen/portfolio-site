import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function Root() {
  return (
    <div style={{width: '90vw'}}>
      <Header />
      <Outlet />
    </div>
  )
}