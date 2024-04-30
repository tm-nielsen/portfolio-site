import { FC } from "react"

const GameTile = (gameInfo: GameInfo, key: number) => {
  return (
    <div className='game-tile' key={key}>
      <img src={gameInfo.cover_url} alt="" className='game-cover' />
      <div className='game-info'>
        <h3 className='game-title'>{gameInfo.title}</h3>
        {/* <p>{gameInfo.short_text}</p> */}
      </div>
    </div>
  )
}

export default GameTile