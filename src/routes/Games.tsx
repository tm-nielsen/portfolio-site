import { useState, useEffect, createElement } from "react"
import {GameInfo, SupplementedGameInfo, FocusedGameTileProps, GameTileProps} from "../types/games"
import FocusedGameTile from "../components/FocusedGameTile"
import GameTile from "../components/GameTile"
import GameListSieve, { SieveMethod } from "../components/GameListSieve"
import extraGameInfo from "../assets/extra_game_info.json"
import '../styles/games.css'

export default function Games() {
  const [gameList, setGameList] = useState<SupplementedGameInfo[]>([])
  const [sieveMethod, setSieveMethod] = useState<SieveMethod>()
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

  function updateSieveMethod(newSieveMethod: SieveMethod) {
    setSieveMethod(() => newSieveMethod)
    setFocusedGame('')
  }

  function getDisplayList(): SupplementedGameInfo[] {
    if (sieveMethod)
      return sieveMethod(gameList)
    return gameList
  }

  return (
    <>
      <h1>Games</h1>
      {GameListSieve(updateSieveMethod)}
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