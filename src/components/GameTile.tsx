import { Link } from "react-router-dom"

export default function GameTile(title: string, coverUrl: string) {
  return (
    <Link className={'game-tile'} to={'/games/' + title} key={title}>
      <img src={coverUrl} alt="promotional image for listed game" className='game-cover' />
      <div className='game-info'>
        <h2 className='game-title'>{title}</h2>
      </div>
    </Link>
  )
}