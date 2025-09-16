import { Link } from "react-router-dom"

export default function MissingPage() {
  return (
    <>
      <>page does not exist</>
      <p><Link to="/">Home</Link></p>
    </>
  )
}