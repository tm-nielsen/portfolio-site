import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div style={{flexDirection: 'row', margin: '0 2em 2em auto'}}>
      <Link to='/'>Home</Link>
      <Link to='projects'>Projects</Link>
      <Link to='games'>Games</Link>
    </div>
  )
}