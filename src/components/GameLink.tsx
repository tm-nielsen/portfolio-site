import { FaPeoplePulling, FaPeopleCarryBox, FaPersonHarassing,
  FaPersonPraying, FaPersonWalkingLuggage, FaUpRightFromSquare } from "react-icons/fa6";
import { GameLinkProps } from "../types/games";

export default function GameLink(props: GameLinkProps) {
  const {url, hasWebBuild, tags} = props

  function getIcon(): JSX.Element {
    let icon = FaUpRightFromSquare

    if (tags.includes('fun')) 
      if (hasWebBuild) icon = FaPersonHarassing
      else icon = FaPersonPraying

    else if (tags.includes('bad')) icon = FaPeoplePulling
    else if (tags.includes('jam'))
      if (hasWebBuild) icon = FaPeopleCarryBox
      else icon = FaPersonWalkingLuggage

    return icon({className: 'game-link-icon'})
  }

  return (
    <a className="flex row game-link" href={url} target="_blank">
      Play Now
      {getIcon()}
    </a>
  )
}