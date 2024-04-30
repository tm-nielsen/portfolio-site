import { FC } from "react"

const GameTile = (gameInfo: GameInfo, isFocused: boolean, grabFocus: (gameTitle: string) => void) => {
  const grabFocusWithTitle = () => grabFocus(gameInfo.title)

  return (
    <button className={`game-tile${isFocused? ' focused-tile': ''}`}
    key={gameInfo.title} onClick={grabFocusWithTitle}>
      <img src={gameInfo.cover_url} alt="" className='game-cover' />
      <div className='game-info'>
        <h3 className='game-title'>{gameInfo.title}</h3>
        {/* <p>{gameInfo.short_text}</p> */}
      </div>
    </button>
  )
}

export default GameTile