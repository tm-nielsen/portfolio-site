import { FocusedGameTileProps } from "../types/games"

export default function FocusedGameTile(props: FocusedGameTileProps) {
  const {title, coverUrl, shortText, description, learning} = props

  function splitJsonText(sourceText: string):JSX.Element[] {
    return sourceText.split('\n').map(
      (paragraph, index) =>
        <p key={index} className="body-text">{paragraph}</p>
      )
  }

  return (
    <div className="game-tile focused-tile" key={title}>
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
        {splitJsonText(description)}
        <h3>What I learned</h3>
        {splitJsonText(learning)}
      </div>
    </div>
  )
}