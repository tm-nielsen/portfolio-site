import { GameTileProps } from "../types/games"

export default function GameTile(props: GameTileProps) {
  const {title, coverUrl, grabFocus} = props
  const grabFocusWithTitle = () => grabFocus(title)

  return (
    <button className={'game-tile'} key={title} onClick={grabFocusWithTitle}>
      <img src={coverUrl} alt="promotional image for listed game" className='game-cover' />
      <div className='game-info'>
        <h2 className='game-title'>{title}</h2>
      </div>
    </button>
  )
}