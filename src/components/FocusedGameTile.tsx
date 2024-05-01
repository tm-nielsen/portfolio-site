import { FocusedGameTileProps } from "../types/games"
import GameLink from "./GameLink"

export default function FocusedGameTile(props: FocusedGameTileProps) {
  const {title, coverUrl, shortText, description, learning, tools, roles} = props

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
          <p style={{padding: '0 0 0 1em'}}>{shortText}</p>
          {GameLink(props.linkProps)}
        </div>
      </div>
      <div style={{width: '100%'}}>
        <h3>About</h3>
        {splitJsonText(description)}
        <h3>What I learned</h3>
        {splitJsonText(learning)}
        <div style={{padding: '1em 0 0'}}>
          <p className="footer-text">Roles: {roles.join(', ')}</p>
          <p className="footer-text">Tools: {tools.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}