import useDetectNarrowWindow from "../hooks/useDetectNarrowWindow"
import useAutoScroll from "../hooks/useAutoScroll"
import { FocusedGameTileProps } from "../types/games"
import GameLink from "./GameLink"

export default function FocusedGameTile(props: FocusedGameTileProps) {
  const {title, coverUrl, shortText, description, learning, tools, roles} = props
  const scrollRef = useAutoScroll([title])

  function splitJsonText(sourceText: string):JSX.Element[] {
    return sourceText.split('\n').map(
      (paragraph, index) =>
        <p key={index} className="game-description-body">{paragraph}</p>
      )
  }

  const windowIsNarrow = useDetectNarrowWindow()
  const shortTextElement = <p className="game-short-text">{shortText}</p>

  return (
    <div className="game-tile focused-tile">
      <div className="flex row flat" ref={scrollRef}>
        <img src={coverUrl} alt="promotional image for focused game"
          className='game-cover focused-cover' />
        <div>
          <h2 className="game-title focused-title">{title}</h2>
          {windowIsNarrow? null: shortTextElement}
          {GameLink(props.linkProps)}
        </div>
      </div>
      {windowIsNarrow? shortTextElement: null}
      <div style={{width: '100%'}}>
        <h3 className="game-description-header">About</h3>
        {splitJsonText(description)}
        <h3 className="game-description-header">What I learned</h3>
        {splitJsonText(learning)}
        <div style={{padding: '1em 0 0'}}>
          <p className="footer-text">Roles: {roles.join(', ')}</p>
          <p className="footer-text">Tools: {tools.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}