import { useState, useEffect, createElement } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { GameInfo, SupplementedGameInfo, FocusedGameTileProps } from "../types/games"
import FocusedGameTile from "../components/FocusedGameTile"
import GameTile from "../components/GameTile"
import GameListSieve, { SieveMethod } from "../components/GameListSieve"
import extraGameInfo from "../assets/extra_game_info.json"
import offlineGameInfo from '../assets/offline_game_info.json'
import '../styles/games.css'

const statusCodes = {
  LOADING: 1,
  LOADED: 0,
  OFFLINE: 2
}

export default function Games() {
  const [gameList, setGameList] = useState<SupplementedGameInfo[]>([])
  const [status, setStatus] = useState<number>(statusCodes.LOADING)
  const [sieveMethod, setSieveMethod] = useState<SieveMethod>()

  const {focusedGame} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_PATH)
    .then((res) => {
      return res.json()
    }).then((data): void => {
      setGameList(supplementGameList(data))
      setStatus(statusCodes.LOADED)
    }).catch(error => {
      setGameList(supplementGameList(offlineGameInfo as any))
      setStatus(statusCodes.OFFLINE)
      console.log(error.message)
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

  function updateSieveMethod(newSieveMethod: SieveMethod, shouldResetSelection: boolean = true) {
    setSieveMethod(() => newSieveMethod)
    if (shouldResetSelection && focusedGame)
      navigate('/games')
  }

  function getDisplayList(): SupplementedGameInfo[] {
    if (sieveMethod)
      return sieveMethod(gameList)
    return gameList
  }

  const displayList = gameList? getDisplayList(): []

  return (
    <div className="flat">
      <h1>Games</h1>
      {GameListSieve(updateSieveMethod)}
      {status === statusCodes.LOADING?
        <h2>Loading</h2>
      : displayList.length > 0? <ul className='game-list'>
          {
            displayList.map((gameInfo: SupplementedGameInfo) =>
            gameInfo.title === focusedGame?
              createElement(FocusedGameTile, {...new FocusedGameTileProps(gameInfo), key: 'focused-game'})
              : GameTile(gameInfo.title, gameInfo.cover_url))
          }
        </ul> : <h2>No Matching Games</h2>
      }
      {status === statusCodes.OFFLINE?
        <>
          <h2>Back End Offline.</h2>
          <p>This version of the games list was loaded by a manual backup and is thus outdated.</p>
        </>: null
      }
    </div>
  )
}