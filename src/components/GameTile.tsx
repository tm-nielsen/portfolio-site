interface GameTileProps {
  title: string,
  coverUrl: string,
  isFocused: boolean,
  grabFocus: (gameTile: string) => void
}

export default function GameTile(props: GameTileProps) {
  const {title, coverUrl, isFocused, grabFocus} = props
  const grabFocusWithTitle = () => grabFocus(title)

  return (
    <button className={`game-tile${isFocused? ' focused-tile': ''}`}
    key={title} onClick={grabFocusWithTitle}>
      <img src={coverUrl} alt="" className='game-cover' />
      <div className='game-info'>
        <h3 className='game-title'>{title}</h3>
      </div>
    </button>
  )
}