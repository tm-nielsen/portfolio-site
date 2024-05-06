import { useState, useEffect, createElement } from "react"
import {GameInfo, SupplementedGameInfo, FocusedGameTileProps, GameTileProps} from "../types/games"
import FocusedGameTile from "../components/FocusedGameTile"
import GameTile from "../components/GameTile"
import GameSortingDropdown, { GameSortingMethod } from "../components/GameSortingDropdown"
import GameTagFilterDropdowns, { GameTagFilterer } from "../components/GameTagFilterDropdowns"
import GamePlatformFilterDropdown, { GameFilterMethod } from "../components/GamePlatformFilterDropdown"
import extraGameInfo from "../assets/extra_game_info.json"
import '../styles/games.css'

export default function Games() {
  const [gameList, setGameList] = useState<SupplementedGameInfo[]>([])
  const [sortingMethod, setSortingMethod] = useState<GameSortingMethod>()
  const [tagFilterer, setTagFilterer] = useState<GameTagFilterer>()
  const [platformFilterMethod, setPlatformFilterMethod] = useState<GameFilterMethod>()
  const [focusedGame, setFocusedGame] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:8080/games')
    .then((res) => {
      return res.json()
    }).then((data): void => {
      setGameList(supplementGameList(data))
    })
  }, [])

  function supplementGameList(gameList: [GameInfo]): SupplementedGameInfo[]{
    return gameList.map((gameInfo): SupplementedGameInfo => 
      new SupplementedGameInfo(gameInfo, getExtraGameInfo(gameInfo.title))
    )
  }

  function getExtraGameInfo(gameTitle: string): object {
    let findResult = extraGameInfo.find(element => element.title === gameTitle)
    return findResult? findResult: {}
  }


  function updateSortingMethod(sortingMethod: GameSortingMethod) {
    setSortingMethod(() => sortingMethod)
    setFocusedGame('')
  }

  function updateTagFilterer(filterer: GameTagFilterer) {
    setTagFilterer(filterer)
    setFocusedGame('')
  }

  function updatePlatformFilterMethod(filterMethod: GameFilterMethod) {
    setPlatformFilterMethod(() => filterMethod)
    setFocusedGame('')
  }

  function getDisplayList(): SupplementedGameInfo[] {
    let sortedGames = gameList.sort(sortingMethod)
    if (platformFilterMethod)
      sortedGames = sortedGames.filter(platformFilterMethod)
    if (tagFilterer)
      return tagFilterer.filterGameList(sortedGames)
    return sortedGames
  }

  return (
    <>
      <h1>Games</h1>
      <div className="row">
        {GameSortingDropdown(updateSortingMethod)}
        {GameTagFilterDropdowns(updateTagFilterer)}
        {GamePlatformFilterDropdown(updatePlatformFilterMethod)}
      </div>
      <ul className='game-list'>
        {
          gameList?
            getDisplayList().map((gameInfo: SupplementedGameInfo) =>
            gameInfo.title === focusedGame?
              createElement(FocusedGameTile, new FocusedGameTileProps(gameInfo))
              : GameTile(new GameTileProps(gameInfo, setFocusedGame)))
          : null
        }
      </ul>
    </>
  )
}