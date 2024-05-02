import { useState, useEffect } from "react"
import {GameInfo, SupplementedGameInfo, FocusedGameTileProps, GameTileProps} from "../types/games"
import FocusedGameTile from "../components/FocusedGameTile"
import GameTile from "../components/GameTile"
import DropDown, { GameSortingMethod } from "../components/GameSortingDropDown"
import GameListFilters from "../components/GameListFilters"
import extraGameInfo from "../assets/extra_game_info.json"
import '../styles/games.css'

export default function Games() {
  const [gameList, setGameList] = useState<SupplementedGameInfo[]>([])
  const [gameSortingMethod, setGameSortingMethod] = useState<GameSortingMethod>()
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
    setGameSortingMethod(() => sortingMethod)
    setFocusedGame('')
  }

  function getDisplayList(): SupplementedGameInfo[] {
    let sortedGames = gameList.sort(gameSortingMethod)
    return sortedGames
  }

  return (
    <>
      <h1>Games</h1>
      <div className="row">
        {DropDown(updateSortingMethod)}
        {GameListFilters()}
      </div>
      <ul className='game-list'>
        {
          gameList?
            getDisplayList().map((gameInfo: SupplementedGameInfo) =>
            gameInfo.title === focusedGame?
              FocusedGameTile(new FocusedGameTileProps(gameInfo))
              : GameTile(new GameTileProps(gameInfo, setFocusedGame)))
          : null
        }
      </ul>
    </>
  )
}