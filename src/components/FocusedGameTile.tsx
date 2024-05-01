import { FocusedGameTileProps } from "../types/games"

export default function FocusedGameTile(props: FocusedGameTileProps) {
  const {title, coverUrl, shortText, description, learning} = props

  return (
    <div className="game-tile focused-tile">
      <div className="flex-row flat">
        <img src={coverUrl} alt="promotional image for focused game"
          className='game-cover focused-cover' />
        <div>
          <h2 className="game-title focused-title">{title}</h2>
          <p>{shortText}</p>
        </div>
      </div>
      <div>
        <h3>About</h3>
        <p>{description}</p>
        <h3>What I learned</h3>
        <p>{learning}</p>
      </div>
    </div>
  )
}