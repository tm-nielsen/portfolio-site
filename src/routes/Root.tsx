import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Root = () => {
  return (
    <div style={{width: '90vw'}}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Root